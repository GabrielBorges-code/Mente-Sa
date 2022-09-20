import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import ModalCadastroAnamnese from "../../../components/ModalSession/ModalCadastroAnamnese";

import { CgFileDocument } from "react-icons/cg"
import { useNavigate } from "react-router-dom";

import {doc, setDoc, addDoc, getDoc, collection, updateDoc} from 'firebase/firestore'
import { db, auth } from "../../../services/firebase"; 
import { useEffect } from "react";
import { useRef } from "react";

import styles from "./index.module.css";
import { useState } from "react";

function Session() {
    let navigate = useNavigate();
    //const [users, setUsers] = useState(JSON.parse(sessionStorage.getItem("@AuthFirebase:user")))

    const [showModal, setShowModal] = useState(false);  
    
    const formRef = useRef();
    
    const handleSave = () => { //PREPARE TO SAVE
        const data = formRef.current.getData();
        console.log(data);
        
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

    return (
        <>
            <h3>Sessoes</h3>
            <hr></hr>

            <ModalCadastroAnamnese
                show={showModal}
                onHide={() => setShowModal(false)}
                outerRef = {formRef}
                onOpen = {() => handleSave()}
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
                        <tr>
                            <td><img src="https://files.tecnoblog.net/wp-content/uploads/2018/09/linus-torvalds-dedo-meio.jpg" alt="foto perfil" /></td>
                            <td>João Sousa</td>
                            <td>20/09/2022</td>
                            <td>14:00</td>
                            <td>50min</td>
                            <td><Button className="mt-2 btn btn-primary" onClick={() => setShowModal(true)}><i><CgFileDocument /></i></Button></td>
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
                        </tr>

                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default Session;