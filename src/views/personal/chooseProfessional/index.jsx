import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import ModalAgendamento from "../../../components/ModalSession/ModalAgendamento";

import { useNavigate } from "react-router-dom";

import { db } from "../../../services/firebase";

import {
  doc,
  setDoc,
  addDoc,
  getDocs,
  collection,
  where,
  query,
} from "firebase/firestore";

import { useState, useEffect, useRef } from "react";

import styles from "./index.module.css";

function ChooseProfessional() {
  let navigate = useNavigate();

  const [users, setUsers] = useState(
    JSON.parse(sessionStorage.getItem("@AuthFirebase:user"))
  );

  // console.log(users);

  const [showModal, setShowModal] = useState(false);
  const [professionalList, setProfessionalList] = useState([]);
  const [personalList, setPersonalList] = useState([]);
  // const [anamnese, setAnamnese] = useState([]);
  // const [duration, setDuration] = useState('')
  // const [hourSession, setHourSession] = useState('')
  // const [namePatient, setNamePatient] = useState('')
  // const [idProfessional,setIdProfessional] = useState('')
  // const [status, setStatus] = useState('')

  // const formRef = useRef();

  async function teste() {
    const querySnapshot = await getDocs(collection(db, "Personal"));
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      // console.log()
      if (personalList.length === 0) {
        // setPersonalList((response) => [...response, doc.data()]);
        setPersonalList((response) => [...response, doc]);
      }
    });

  }

  // console.log(personalList)

  async function handleShowSessions() {
    const q = query(collection(db, "Professional"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      if (professionalList.length === 0) {
        setProfessionalList((response) => [...response, doc.data()]);
      }
    });
    // console.log(professionalList);
  }

  // console.log(professionalList)
  console.log(personalList.name)

  async function handleSave() {
    //PREPARE TO SAVE
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
  }

  useEffect(() => {
    handleShowSessions();
    teste();
  }, []);

  return (
    <>
      <h3>Todos os profissionais</h3>
      <hr></hr>

      <ModalAgendamento show={showModal} onHide={() => setShowModal(false)} />

      <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th></th>
              <th>Nome</th>
              {/* <th>Cargo</th> */}
              <th>CRM / CRP</th>
              <th>Universidade</th>
              <th>Área de Atuação</th>
              <th></th>
            </tr>
          </thead>

          {/* <tbody className={styles.color_td}>
            {professionalList?.map((item) => {
              return (
                <>
                  <tr>
                    <td>
                      <img
                        src="https://cdn.britannica.com/99/124299-050-4B4D509F/Linus-Torvalds-2012.jpg"
                        alt="foto perfil"
                      />
                    </td>
                    <td></td>
                    
                    <td>{item.regionalCouncilNumber}</td>
                    <td>{item.college}</td>
                    <td>{item.specializationName}</td>
                    <td>
                      <Button>Selecionar</Button>
                    </td>
                  </tr>
                
                </>
              );
            })}
          </tbody> */}
        </Table>
      </div>
    </>
  );
}
// C:/Users/Gabriel/Documents/Projetos/Dev-For-Tech-React/outra/Mente-Sa/src/views/personal/chooseProfessional/index.jsx:3:29
export default ChooseProfessional;
