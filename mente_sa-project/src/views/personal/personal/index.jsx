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

function Personal() {
  let navigate = useNavigate();
  const [] = useState();

  function save() {
    //PREPARE TO SAVE
    navigate("/registro/usuario/escolha-profissional");
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
        <Form>
          <Form.Group className="mb-5">
            <h3>Dados Pessoais</h3>

            <div className="row">
            <Input
                type={"text"}
                typeForm={"form-control"}
                setClassCol={"col-sm"}
                label={"Nome"}
              />
            </div>

            <div className="row">
              <Input
                type={"email"}
                typeForm={"form-control"}
                setClassCol={"col-sm-8"}
                label={"Email"}
              />
              <Input
                type={"number"}
                typeForm={"form-control"}
                setClassCol={"col-sm"}
                label={"Telefone"}
              />
            </div>

            <div className="row">
              <Input
                type={"text"}
                typeForm={"form-control"}
                setClassCol={"col-sm"}
                label={"Data Nascimento"}
              />
                
              <InputSelect
                label={"Estado Civil"}
                options={["Solteiro", "Casado", "Separado", "Divorciado", "Viúvo"]}
              />

              <InputSelect
                label={"Sexo"}
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
              />
              <Input
                type={"number"}
                typeForm={"form-control"}
                setClassCol={"col-sm"}
                label={"Número"}
              />

              <Input
                type={"text"}
                typeForm={"form-control"}
                setClassCol={"col-sm"}
                label={"Complemento"}
              />
              
            </div>

            <div className="row">
              <Input
                type={"text"}
                typeForm={"form-control"}
                setClassCol={"col-sm"}
                label={"Bairro"}
              />
              <Input
                type={"text"}
                typeForm={"form-control"}
                setClassCol={"col-sm"}
                label={"Estado"}
              />

              <Input
                type={"text"}
                typeForm={"form-control"}
                setClassCol={"col-sm"}
                label={"Cidade"}
              />
            
            </div>

          </Form.Group>

          <div className="row d-flex justify-content-center">
            <button onClick={save} className="btn btn-lg col-md-3 btn-primary">
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