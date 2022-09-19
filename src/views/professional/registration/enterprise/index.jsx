import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import Input from "../../../../components/Input";
import InputSelect from "../../../../components/Input/inputSelect";

import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import Stepper from "../../../../components/Stepper";

import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {doc, setDoc, addDoc, getDoc, collection} from 'firebase/firestore'
import { db, auth } from "../../../../services/firebase"; 
import { useEffect } from "react";




function Enterprise() {
  let navigate = useNavigate()
  const [users, setUsers] = useState(JSON.parse(sessionStorage.getItem("@AuthFirebase:user")))
  const [edit, setEdit] = useState(false)
  const [logradouro, setLogradouro] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')
  const [district, setDistrict] = useState('')
  const [state,setState] = useState('')
  const [city, setCity] = useState('')
  const [emailEnterprise, setEmailEnterprise] = useState('')
  const [phoneEnterprise, setPhoneEnterprise] = useState('')
  
  
  
  async function handleSaveorEdit(e){ //PREPARE TO SAVE OR EDIT
    //TODO we have changing fiels: "data nascimento", "estado civil", "sexo"
    

    e.preventDefault()
      const info = await setDoc(doc(db, "Enterprise", users.uid),{
          logradouro: logradouro,
          number: number,
          complement: complement,
          district: district,
          state: state,
          city: city,
          emailEnterprise: emailEnterprise,
          phoneEnterprise: phoneEnterprise,

      })
      changeStatusCompleted()
    
  }

  async function handleEdit(){

      const docRef = doc(db, "Enterprise", users.uid);
      const docSnap = await getDoc(docRef);
      const {city, complement, district, emailEnterprise, logradouro, number, phoneEnterprise, state} = docSnap.data()
      
      setCity(city)
      setComplement(complement)
      setDistrict(district)
      setEmailEnterprise(emailEnterprise)
      setLogradouro(logradouro),
      setNumber(number)
      setPhoneEnterprise(phoneEnterprise)
      setState(state)
  }

  async function changeStatusCompleted() {
    const usersRef = doc(db, 'Users', users.uid)
    console.log(usersRef)
    const request = await updateDoc(usersRef,{formCompleted: true})

  navigate('/profile') //NEXT BUTTON

  }


  useEffect(() => {
    console.log(users)
    handleEdit()
    
  },[])

  return (
    <>
      <Header message={'finalizando!'} linkBack={'/registro/profissional/sobre'} edit/>

      {/* steper 3 */}
      <Stepper step={'100%'} state1={'success'} state2={'success'} state3={'primary'} />
      

      <Container className={`${styles.min_height} bg-light card`}>
      <Form onSubmit={handleSaveorEdit}>
        <Form.Group className="mb-5" >
        <h3>Dados Empresa</h3> 
            <div className="row">
                <Input type={'text'} value={logradouro} setValue={setLogradouro} typeForm={'form-control'} setClassCol={'col-sm-7'} label={'Logradouro'}/>
                <Input type={'number'} value={number} setValue={setNumber} typeForm={'form-control'} setClassCol={'col-sm'} label={'Número'}/>
                <Input type={'text'} value={complement} setValue={setComplement} typeForm={'form-control'} setClassCol={'col-sm'} label={'Complemento'}/>
            </div>
            <div className="row">
                <Input type={'text'} value={district} setValue={setDistrict} typeForm={'form-control'} setClassCol={'col-sm'} label={'Bairro'}/>
                <Input type={'text'} value={state} setValue={setState} typeForm={'form-control'} setClassCol={'col-sm'} label={'Estado'}/>
                <Input type={'text'} value={city} setValue={setCity} typeForm={'form-control'} setClassCol={'col-sm'} label={'Cidade'}/>
            </div>
            <div className="row">
                <Input type={'text'} value={emailEnterprise} setValue={setEmailEnterprise} typeForm={'form-control'} setClassCol={'col-sm'} label={'Email da Empresa'}/>
                <Input type={'text'} value={phoneEnterprise} setValue={setPhoneEnterprise} typeForm={'form-control'} setClassCol={'col-sm'} label={'Telefone'}/>
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

export default Enterprise;
