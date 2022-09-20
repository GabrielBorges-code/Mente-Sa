import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

import Input from "../../../components/Input";
import InputSelect from "../../../components/Input/inputSelect";

import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Stepper from "../../../components/Stepper";

import { useState } from "react";
import styles from "./index.module.css";

import {doc, setDoc, getDoc} from 'firebase/firestore'
import { db, auth } from "../../../services/firebase"; 
import { useEffect } from "react";

function Personal() {
  let navigate = useNavigate();
  const [users, setUsers] = useState(JSON.parse(sessionStorage.getItem("@AuthFirebase:user")))
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [dateBorn, setDateBorn] = useState()
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
      const info = await setDoc(doc(db, "PatientePersonal", users.uid),{
          name: name,
          phone: phone,
          street: street,
          numberHouse: numberHouse,
          complement: complement,
          district: district,
          state: state,
          city: city,
      })
  
    navigate('/usuario/perfil')
  }

  return (
    <>
      <Header message={"Olá paciente, queremos te conhecer!"} linkBack={"/"} />
      {/* steper */}
      <Stepper
        step={'0'}
        icon={true}
        state1={"primary"}
        state2={"secondary"}
        state3={"secondary"}
      />

      <Container className={`${styles.content} bg-light card`}>
        <Form onSubmit={handleSave}>
          <Form.Group className="mb-5">
            <h3>Dados Pessoais</h3>

            <div className="row">
            <Input
                type={"text"}
                typeForm={"form-control"}
                setClassCol={"col-sm"}
                label={"Nome"}
                value={name} 
                setValue={setName}
              />
            </div>

             <div className="row">
             
              <Input
                type={"number"}
                typeForm={"form-control"}
                setClassCol={"col-sm"}
                label={"Telefone"}
                value={phone} 
                setValue={setPhone}
              />
            </div>

            <div className="row">
              <Input
                type={"text"}
                typeForm={"form-control"}
                setClassCol={"col-sm"}
                label={"Data Nascimento"}
                value={dateBorn} 
                setValue={setDateBorn}
              />
                
              <InputSelect
                label={"Estado Civil"}
                value={civilState} 
                setValue={setCivilState}
                options={["Solteiro", "Casado", "Separado", "Divorciado", "Viúvo"]}
              />

              <InputSelect
                label={"Sexo"}
                value={genre} 
                setValue={setGenre}
                options={["Masculino", "Feminino"]}
              />
              
            </div>

            <h3>Endereço</h3>

            <div className="row">

              <Input
                type={"text"}
                typeForm={"form-control"}
                setClassCol={"col-sm-8"}
                label={"Logradouro"}
                value={street} 
                setValue={setStreet}
              />
              <Input
                type={"number"}
                typeForm={"form-control"}
                setClassCol={"col-sm"}
                label={"Número"}
                value={numberHouse}
                setValue={setNumberHouse}
              />

              <Input
                type={"text"}
                typeForm={"form-control"}
                setClassCol={"col-sm"}
                label={"Complemento"}
                value={complement} 
                setValue={setComplement}
              />
              
            </div>

            <div className="row">
              <Input
                type={"text"}
                typeForm={"form-control"}
                setClassCol={"col-sm"}
                label={"Bairro"}
                value={district}
                setValue={setDistrict}
              />
              <Input
                type={"text"}
                typeForm={"form-control"}
                setClassCol={"col-sm"}
                label={"Estado"}
                value={state} 
                setValue={setState}
              />

              <Input
                type={"text"}
                typeForm={"form-control"}
                setClassCol={"col-sm"}
                label={"Cidade"}
                value={city} 
                setValue={setCity}
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

export default Personal;
