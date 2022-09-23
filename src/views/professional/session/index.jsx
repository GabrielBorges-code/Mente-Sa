import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import ModalCadastroAnamnese from "../../../components/ModalSession/ModalCadastroAnamnese";

import { CgFileDocument } from "react-icons/cg"
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {doc, setDoc, addDoc, getDocs, collection, where, query} from 'firebase/firestore';
import { db, auth } from "../../../services/firebase"; 

import styles from "./index.module.css";
import { useState, useEffect } from "react";
import { forEach } from "lodash";

function Session() {
    let navigate = useNavigate();
    const [users, setUsers] = useState(JSON.parse(sessionStorage.getItem("@AuthFirebase:user")))

    //console.log(users);

    const [showModal, setShowModal] = useState(false);  
    const [sessionList, setSessionList] = useState([]);
    const [formAnamnese, setFormAnamnese] = useState({});
    const [idSessionList, setIdSessionList] = useState([]);
    const [currentIdSession, setCurrentIdSession] = useState('');


    async function handleShowSessions () {
        const q = query(collection(db, "Session"), where("professional.uid", "==", users.uid));
        const querySnapshot = await getDocs(q);
       
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
            console.log("DATA: ", doc.data());
            if (sessionList.length === 0) {
                setIdSessionList((response) => [...response, doc.id]);
                setSessionList((response) => [...response, doc.data()]);
            } 
        });
        //console.log("ID LIST ", idSessionList);
        //console.log("LIST ", sessionList);
    }

    // Get o ID da sessao
    function getIdSession (id) {
        idSessionList.forEach((item, index) => {
            if (index == id) {                
                //console.log("ACHOU", item);
                setCurrentIdSession(item);
            }
        });
    }

    // Abre Modal e seta o ID referente a sessao clicada
    function openModal (id) {    
        getIdSession(id) 
        setShowModal(true);
    }
    
    async function handleSaveAnamnese () { 
        //console.log("FORM ANAMNESE: ", formAnamnese);           
        //console.log("CURRENT ID SESSION: ", currentIdSession);

        const info = await setDoc(doc(db, "Session", currentIdSession),{
            anamnese: {
                dateService: formAnamnese.fdateService,
                price: formAnamnese.fprice,
                typeService: formAnamnese.ftypeService,
                complaint: formAnamnese.fcomplaint,
                evolutionComplaint: formAnamnese.fevolutionComplaint,
                typeComplaint: formAnamnese.ftypeComplaint,
                transformationComplaint: formAnamnese.ftransformationComplaint,
                symptoms: formAnamnese.fsymptoms
            }            
        });

        toast.success("Informações salvas com sucesso!")
        setShowModal(false);
    };

    async function handleEditAnamnese () {
        const docRef = doc(db, "Session", currentIdSession);
        const docSnap = await getDoc(doc(db, docRef, "anamnese"));
        const {
            dateService, 
            price, 
            typeService, 
            complaint, 
            evolutionComplaint, 
            typeComplaint, 
            transformationComplaint, 
            symptoms
        } = docSnap.data();

        setFormAnamnese({
            dateService, 
            price, 
            typeService, 
            complaint, 
            evolutionComplaint, 
            typeComplaint, 
            transformationComplaint, 
            symptoms
        });

        console.log("SET FORM ANAMNESE: ", setFormAnamnese);
    }

    useEffect(() => {
        //handleShowSessions();
        //handleEditAnamnese();
    },[])
    

    return (
        <>
            <h3>Sessoes</h3>
            <hr></hr>

            <ModalCadastroAnamnese
                show={showModal}
                onSave={() => handleSaveAnamnese()}
                setanamnese = {setFormAnamnese}
                onHide = {() => setShowModal(false)}
            />

            <div>
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nome</th>
                            <th>Data</th>
                            <th>Horario</th>
                            <th>Duracao</th>
                            <th>Anamnese</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody className={styles.color_td}>

                    {
                        sessionList?.map((item, index)=>{
                            //console.log("INDEX: ", getCurrentIdSession(index));
                            
                            return (
                                <tr key={index}>
                                    <td><img src="https://files.tecnoblog.net/wp-content/uploads/2018/09/linus-torvalds-dedo-meio.jpg" alt="foto perfil" /></td>
                                    <td>{item.patient.name}</td>
                                    <td>{item.dateSession}</td>
                                    <td>{item.hourSession}</td>
                                    <td>{item.duration}</td>
                                    <td><Button className="mt-2 btn btn-primary" onClick={() => openModal(index)}><i><CgFileDocument /></i></Button></td>
                                    <td>{item.status[0]}</td>                                
                                </tr>
                            )
                        })
                    }
                        

                        {/* <tr>
                            <td><img src="https://files.tecnoblog.net/wp-content/uploads/2018/09/linus-torvalds-dedo-meio.jpg" alt="foto perfil" /></td>
                            <td>João Sousa</td>
                            <td>20/09/2022</td>
                            <td>14:00</td>
                            <td>50min</td>
                            <td><Button className="mt-2 btn btn-primary" onClick={() => handleSave()}><i><CgFileDocument /></i></Button></td>
                            <td>Pendente</td>
                        </tr>


                        <tr>
                            <td><img src="https://files.tecnoblog.net/wp-content/uploads/2018/09/linus-torvalds-dedo-meio.jpg" alt="foto perfil" /></td>
                            <td>João Sousa</td>
                            <td>13/09/2022</td>
                            <td>14:00</td>
                            <td>50min</td>
                            <td><Button className="mt-2 btn btn-primary"><i><CgFileDocument /></i></Button></td>
                            <td>Pendente</td>
                        </tr> */}

                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default Session;