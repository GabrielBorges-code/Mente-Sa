import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Link, Navigate, useNavigate } from "react-router-dom";

import Input from "../../../../components/Input";
import InputSelect from "../../../../components/Input/inputSelect";

import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import Stepper from "../../../../components/Stepper";

import styles from "./index.module.css";
import { useState } from "react";

//credentials of firebase
import {doc, setDoc} from 'firebase/firestore'
import { db, auth } from "../../../../services/firebase"; 
import { useEffect } from "react";

function Personal() {
  let navigate = useNavigate()
  const [users, setUsers] = useState(JSON.parse(sessionStorage.getItem("@AuthFirebase:user")))
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [dateBorn, setDateBorn] = useState('')
  const [civilState, setCivilState] = useState('')
  const [genre, setGenre] = useState('')
  const [street, setStreet] = useState('')
  const [numberHouse, setNumberHouse] = useState('')
  const [complement, setComplement] = useState('')
  const [district, setDistrict] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')

  

  
  async function handleSave(e){ //PREPARE TO SAVE

    //TODO we have changing fiels: "data nascimento", "estado civil", "sexo"
    e.preventDefault()
      const info = await setDoc(doc(db, "Personal", users.uid),{
          name: name,
          phone: phone,
          street: street,
          numberHouse: numberHouse,
          complement: complement,
          district: district,
          state: state,
          city: city,
      })
  
    navigate('/registro/profissional/sobre')
  }

  

  useEffect(() => {
    console.log(users)
    
  },[])
  
  return (
        
    <>
      <Header message={'Olá profissional, queremos te conhecer!'} linkBack={'/'}/>
      {/* steper */}
      <Stepper step={"0%"} state1={'primary'} state2={'secondary'} state3={'secondary'} />

      <Container className={`${styles.min_height} bg-light card`}>
        <Form onSubmit={handleSave}>
        <Form.Group className="mb-5" >
        <h3>Dados Pessoais</h3>
            <div className="row">
            <Input type={'text'} typeForm={'form-control'} value={name} setValue={setName} label={'Nome Completo'}/>
            </div>

            <div className="row">
            
            <Input type={'text'} typeForm={'form-control'} value={phone} setValue={setPhone} setClassCol={'col-sm'} label={'Telefone'}/>
            
            </div>
            <div className="row">
              <Input type={'date'} typeForm={'form-control'} value={dateBorn} setValue={setDateBorn} setClassCol={'col-sm'} label={'Data Nascimento'}/>
              <InputSelect label={'Estado Civil'} value={civilState} setValue={setCivilState} options={['Solteiro','Casado','Divorciado','Viúvo']} />
              <InputSelect label={'Sexo'} value={genre} setValue={setGenre} options={['Masculino','Feminino', 'Prefiro não responder']} />
            </div>

          
          </Form.Group>
          <Form.Group className="mb-5" >
          
          <h3>Endereço</h3>
          <div className="row">
            <Input type={'text'} typeForm={'form-control'} value={street} setValue={setStreet} setClassCol={'col-sm-7'} label={'Logradouro'}/>
            <Input type={'text'} typeForm={'form-control'} value={numberHouse} setValue={setNumberHouse} setClassCol={'col-sm'} label={'Número'}/>
            <Input type={'text'} typeForm={'form-control'} value={complement} setValue={setComplement} setClassCol={'col-sm'} label={'Complemento'}/>
            </div>

            <div className="row g-3">
            <Input type={'text'} typeForm={'form-control'} value={district} setValue={setDistrict} setClassCol={'col-sm-7'} label={'Bairro'}/>
            <Input type={'text'} typeForm={'form-control'} value={state} setValue={setState} setClassCol={'col-sm'} label={'Estado'}/>
            <Input type={'text'} typeForm={'form-control col-sm'} value={city} setValue={setCity} setClassCol={'col-sm'} label={'Cidade'}/>
            </div>
            </Form.Group>

          

          <div className="row d-flex justify-content-center"> 
              <button type="submit"   className='btn btn-lg col-md-3 btn-primary'>Avançar</button>
          </div>
        </Form>
      </Container>

      <Footer />
    </>
  );
}

export default Personal;
