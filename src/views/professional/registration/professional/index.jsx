import { useState } from "react";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Input from "../../../../components/Input";
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
  const [specializationName, setSpecializationName] = useState('')
  const [regionalCouncilNumber, setRegionalCouncilNumber] = useState('')
  const [postGraduate, setPostGraduate] = useState('')
  const [dateFinishPostGraduate, setDateFinishPostGraduate] = useState()
  const [masterDegree, setMasterDegree] = useState('')
  const [dateMasterDegree, setDateMasterDegree] = useState()
  const [doctorateDegree, setDoctorateDegree] = useState('')
  const [dateDoctorateDegree, setDateDoctorateDegree] = useState()

  
  async function handleSave(e){ //PREPARE TO SAVE

    //TODO we have changing fiels: "data nascimento", "estado civil", "sexo"
    e.preventDefault()
      const info = await setDoc(doc(db, "Professional", users.uid),{
          college: college,
          dateFinishCollege: dateFinishCollege,
          specializationName: specializationName,
          regionalCouncilNumber: regionalCouncilNumber,
          postGraduate: postGraduate,
          dateFinishPostGraduate: dateFinishPostGraduate,
          masterDegree: masterDegree,
          dateMasterDegree: dateMasterDegree,
          doctorateDegree: doctorateDegree,
          dateDoctorateDegree: dateDoctorateDegree,
      })
      console.log(info)
  
    navigate('/registro/profissional/empresa')
  }

  async function handleEdit(){

    const docRef = doc(db, "Professional", users.uid);
    const docSnap = await getDoc(docRef);
    const {college, dateFinishCollege, specializationName, regionalCouncilNumber, postGraduate, dateFinishPostGraduate, masterDegree, dateMasterDegree, doctorateDegree, dateDoctorateDegree} = docSnap.data()
    
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
}

  useEffect(() => {
    console.log(users)
    handleEdit()
    
  },[])
  
  
  return (
    <>
      <Header message={'só mais um pouquinho...'} linkBack={'/registro/profissional/'}/>
      {/* steper 2 */}

      <Stepper step={'50%'} state1={'success'} state2={'primary'} state3={'secondary'} />

      <Container className={`${styles.min_height} bg-light card`}>

        <Form onSubmit={handleSave}>
        <Form.Group className="mb-5" >
        <h3>Dados Profissionais</h3>
        
          
            <div className="row">
                <Input type={'text'} typeForm={'form-control'} setClassCol={'col-sm'} value={college} setValue={setCollege} label={'Faculdade/Univesidade'}/>
                <Input type={'month'} typeForm={'form-control'} setClassCol={'col-sm'}value={dateFinishCollege} setValue={setDateFinishCollege}  label={'Quando Concluiu?'}/>   
            </div>

            <div className="row">
  
                <Input type={'text'} typeForm={'form-control'} setClassCol={'col-sm'}  value={specializationName} setValue={setSpecializationName} label={'Título/ Especialização'}/>
                <Input type={'text'} typeForm={'form-control'} setClassCol={'col-sm'}  value={regionalCouncilNumber} setValue={setRegionalCouncilNumber} label={'CRM / CRP'}/>
            </div>

            <div className="row">
                <Input type={'text'} value={postGraduate} setValue={setPostGraduate} typeForm={'form-control'} setClassCol={'col-sm'} label={'Pós-Graduação'}/>
                <Input type={'month'} value={dateFinishPostGraduate} setValue={setDateFinishPostGraduate} typeForm={'form-control'} setClassCol={'col-sm'} label={'Quando Concluiu?'}/>
            </div>

            <div className="row">
                <Input type={'text'} value={masterDegree} setValue={setMasterDegree} typeForm={'form-control'} setClassCol={'col-sm'} label={'Mestrado'}/>
                <Input type={'month'} value={dateMasterDegree} setValue={setDateMasterDegree} typeForm={'form-control'} setClassCol={'col-sm'} label={'Quando Concluiu?'}/>
            </div>

            <div className="row">
                <Input type={'text'} value={doctorateDegree} setValue={setDoctorateDegree} typeForm={'form-control'} setClassCol={'col-sm'} label={'Doutorado'}/>
                <Input type={'month'} value={dateDoctorateDegree} setValue={setDateDoctorateDegree} typeForm={'form-control'} setClassCol={'col-sm'} label={'Quando Concluiu?'}/>
            </div>
                        
          </Form.Group>          

          
          <div className="row d-flex justify-content-center"> 
              <button type="submit"  className='btn btn-lg col-md-3 btn-primary'>Avançar</button>
          </div>
          
        </Form>
      </Container>

      <Footer />
    </>
  );
}

export default Professional;
