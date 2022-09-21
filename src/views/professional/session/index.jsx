import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import ModalCadastroAnamnese from "../../../components/ModalSession/ModalCadastroAnamnese";

import { CgFileDocument } from "react-icons/cg"
import { useNavigate } from "react-router-dom";

import {doc, setDoc, addDoc, getDocs, collection, where, query} from 'firebase/firestore';
import { db, auth } from "../../../services/firebase"; 

import styles from "./index.module.css";
import { useState, useEffect, useRef } from "react";

function Session() {
    let navigate = useNavigate();
    const [users, setUsers] = useState(JSON.parse(sessionStorage.getItem("@AuthFirebase:user")))

    console.log(users);

    const [showModal, setShowModal] = useState(false);  
    const [sessionList, setSessionList] = useState([]);
    const [anamnese, setAnamnese] = useState([]);
    // const [duration, setDuration] = useState('')
    // const [hourSession, setHourSession] = useState('')
    // const [namePatient, setNamePatient] = useState('')
    // const [idProfessional,setIdProfessional] = useState('')
    // const [status, setStatus] = useState('')

    
    const formRef = useRef();

    async function handleShowSessions () {
        const q = query(collection(db, "Session"), where("professional.uid", "==", users.uid));
        const querySnapshot = await getDocs(q);
        
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
            //console.log(doc.data());
            if (sessionList.length === 0) {
                setSessionList(response => [...response, doc.data()]);
            } 
        });           
        //console.log("LIST ", sessionList);
    }
    
    async function handleSave () { //PREPARE TO SAVE
        // const data = formRef.current.getData();
        // console.log(data);        
        
        
        // e.preventDefault()
        //   const info = await setDoc(doc(db, "Anamnese", users.uid),{
        //       dateService: dateService,
        //       price: price,
        //       typeService: typeService,
        //       complaint: complaint,
        //       evolutionComplaint: evolutionComplaint,
        //       typeComplaint: typeComplaint,
        //       transformationComplaint: transformationComplaint,
        //       symptoms: symptoms,
        // })
    };

    useEffect(() => {
        handleShowSessions();
        
      },[])
    

    return (
        <>
            <h3>Sessoes</h3>
            <hr></hr>

            <ModalCadastroAnamnese
                show={showModal}
                onHide={() => setShowModal(false)}
                outerRef = {formRef}
                // onOpen = {() => setShowModal(true)}
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
                        sessionList?.map((item)=>{
                            console.log("ITEM: ", item.id);
                            return (
                                <tr key={item.id}>
                                    <td><img src="https://files.tecnoblog.net/wp-content/uploads/2018/09/linus-torvalds-dedo-meio.jpg" alt="foto perfil" /></td>
                                    <td>{item.patient.name}</td>
                                    <td>{item.dateSession}</td>
                                    <td>{item.hourSession}</td>
                                    <td>{item.duration}</td>
                                    <td><Button className="mt-2 btn btn-primary" onClick={() => setShowModal(true)}><i><CgFileDocument /></i></Button></td>
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