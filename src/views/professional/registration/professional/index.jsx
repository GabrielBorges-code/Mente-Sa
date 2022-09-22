import { useState } from "react";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Input from "../../../../components/Input";
import TextArea from "../../../../components/TextArea";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import { useNavigate } from "react-router-dom";
import { HiCheck } from "react-icons/hi";

import Stepper from "../../../../components/Stepper";

import styles from "./index.module.css";
import { useEffect } from "react";
import {doc, setDoc, getDoc} from 'firebase/firestore'
import { db, auth } from "../../../../services/firebase"; 

function Professional() {
  let navigate = useNavigate()
  const [users, setUsers] = useState(JSON.parse(sessionStorage.getItem("@AuthFirebase:user")))
  
  const [college, setCollege] = useState('')
  const [dateFinishCollege, setDateFinishCollege] = useState()
  //const [formationDegree, setFormationDegree] = useState()
  const [specializationName, setSpecializationName] = useState('')
  const [regionalCouncilNumber, setRegionalCouncilNumber] = useState('')
  const [postGraduate, setPostGraduate] = useState('')
  const [dateFinishPostGraduate, setDateFinishPostGraduate] = useState()
  const [masterDegree, setMasterDegree] = useState('')
  const [dateMasterDegree, setDateMasterDegree] = useState()
  const [doctorateDegree, setDoctorateDegree] = useState('')
  const [dateDoctorateDegree, setDateDoctorateDegree] = useState()
  const [professionalDescription, setProfessionalDescription] = useState ('')

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
     return setValidated(true);
    }
    setValidated(true);
    handleSave()
  };

  async function handleSave(e){ //PREPARE TO SAVE

    //TODO we have changing fiels: "data nascimento", "estado civil", "sexo"

      const info = await setDoc(doc(db, "Professional", users.uid),{
        college: college,
        dateFinishCollege: dateFinishCollege || null,
        specializationName: specializationName || null,
        regionalCouncilNumber: regionalCouncilNumber || null,
        postGraduate: postGraduate || null,
        dateFinishPostGraduate: dateFinishPostGraduate || null,
        masterDegree: masterDegree || null,
        dateMasterDegree: dateMasterDegree || null,
        doctorateDegree: doctorateDegree || null,
        dateDoctorateDegree: dateDoctorateDegree ||null, 
        professionalDescription: professionalDescription ||null
      })
      console.log(info)
  
    navigate('/registro/profissional/empresa')
  }

  async function handleEdit(){

    const docRef = doc(db, "Professional", users.uid);
    const docSnap = await getDoc(docRef);
    const {college, dateFinishCollege, specializationName, regionalCouncilNumber, postGraduate, dateFinishPostGraduate, masterDegree, dateMasterDegree, doctorateDegree, dateDoctorateDegree, professionalDescription} = docSnap.data()
    
    setCollege(college)
    setDateFinishCollege(dateFinishCollege)
    setSpecializationName(specializationName)
    setRegionalCouncilNumber(regionalCouncilNumber)
    setPostGraduate(postGraduate)
    setDateFinishPostGraduate(dateFinishPostGraduate)
    setMasterDegree(masterDegree)
    setDateMasterDegree(dateMasterDegree)
    setDoctorateDegree(doctorateDegree)
    setDateDoctorateDegree(dateDoctorateDegree)
    setProfessionalDescription(professionalDescription)
}

  useEffect(() => {
    console.log(users)
    handleEdit()
    
  },[])
  
  
  return (
    <>
      <Header
        message={"só mais um pouquinho..."}
        linkBack={"/registro/profissional/"}
      />
      {/* steper 2 */}

      <Stepper
        step={"50%"}
        state1={"success"}
        state2={"primary"}
        state3={"secondary"}
      />

      <Container className={`${styles.min_height} bg-light card`}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-5">
            <h3>Dados Profissionais</h3>

            <div className="row">
              <Input
                type={"text"}
                typeForm={"form-control"}
                setClassCol={"col-sm"}
                value={college}
                setValue={setCollege}
                label={"Faculdade/Univesidade"}
                required={true}
              />
              <Input
                type={"month"}
                typeForm={"form-control"}
                setClassCol={"col-sm"}
                value={dateFinishCollege}
                setValue={setDateFinishCollege}
                label={"Quando Concluiu?"}
              />
            </div>

            <div className="row">
              <Input
                type={"text"}
                typeForm={"form-control"}
                setClassCol={"col-sm"}
                value={specializationName}
                setValue={setSpecializationName}
                label={"Título/ Especialização"}
              />
              <Input
                type={"text"}
                typeForm={"form-control"}
                setClassCol={"col-sm"}
                value={regionalCouncilNumber}
                setValue={setRegionalCouncilNumber}
                label={"CRM / CRP"}
              />
            </div>

            <div className="row">
              <Input
                type={"text"}
                value={postGraduate}
                setValue={setPostGraduate}
                typeForm={"form-control"}
                setClassCol={"col-sm"}
                label={"Pós-Graduação"}
              />
              <Input
                type={"month"}
                value={dateFinishPostGraduate}
                setValue={setDateFinishPostGraduate}
                typeForm={"form-control"}
                setClassCol={"col-sm"}
                label={"Quando Concluiu?"}
              />
            </div>

            <div className="row">
              <Input
                type={"text"}
                value={masterDegree}
                setValue={setMasterDegree}
                typeForm={"form-control"}
                setClassCol={"col-sm"}
                label={"Mestrado"}
              />
              <Input
                type={"month"}
                value={dateMasterDegree}
                setValue={setDateMasterDegree}
                typeForm={"form-control"}
                setClassCol={"col-sm"}
                label={"Quando Concluiu?"}
              />
            </div>

            <div className="row">
              <Input
                type={"text"}
                value={doctorateDegree}
                setValue={setDoctorateDegree}
                typeForm={"form-control"}
                setClassCol={"col-sm"}
                label={"Doutorado"}
              />
              <Input
                type={"month"}
                value={dateDoctorateDegree}
                setValue={setDateDoctorateDegree}
                typeForm={"form-control"}
                setClassCol={"col-sm"}
                label={"Quando Concluiu?"}
              />
            </div>

            <div className="row">
              <TextArea
                type={"text"}
                typeForm={"form-control"}
                setSizeRow={4}
                setClassCol={"col-sm"}
                name="professionalDescription"
                value={professionalDescription}
                setValue={setProfessionalDescription}
                label={"Sobre/Quem sou eu:"}
                placeholder="Escreva aqui sobre seus anos de experiência, especializações e competências profissionais. Assim, seus pacientes saberão um pouco mais sobre você."
              />
            </div>
          </Form.Group>

          <div className="row d-flex justify-content-center">
            <button type="submit" className="btn btn-lg col-md-3 btn-primary">
              Avançar
            </button>
          </div>
        </Form>
      </Container>

      <Footer />
    </>
  );
}

export default Professional;
