import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Link, Navigate, useNavigate } from "react-router-dom";

import Input from "../../../../components/Input";
import InputSelect from "../../../../components/Input/inputSelect";

import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";

import styles from "./index.module.css";
import { useState } from "react";

function Personal() {
  let navigate = useNavigate()
  const [] = useState()

  
  function save(){ //PREPARE TO SAVE
    navigate('/registro/profissional/sobre')
  }
  
  return (
    <>
      <Header message={'Olá profissional, queremos te conhecer!'} linkBack={'/'}/>
      {/* steper */}

      <Container>
        <div className="position-relative m-4">
            <div className={`${styles.progressB} progress`} >
                <div className={`${styles.bar} progress-bar`} role="progressbar" aria-label="Progress"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                <button type="button" className="position-absolute top-0 start-0 translate-middle btn btn-md btn-primary rounded-pill" >1</button>
                <button type="button" className="position-absolute top-0 start-50 translate-middle btn btn-md btn-secondary rounded-pill" >2</button>
                <button type="button" className="position-absolute top-0 start-100 translate-middle btn btn-md btn-secondary rounded-pill" >3</button>
            </div>
            
        </div>
        </Container>
      <Container className={`${styles.min_height} bg-light card`}>
        <Form>
        <Form.Group className="mb-5" >
        <h3>Dados Pessoais</h3>
            <div className="row">
            <Input type={'text'} typeForm={'form-control'} label={'Nome Completo'}/>
            </div>

            <div className="row">
            <Input type={'email'} typeForm={'form-control'} setClassCol={'col-sm'} label={'Email'}/>
            <Input type={'text'} typeForm={'form-control'} setClassCol={'col-sm'} label={'Telefone'}/>
            
            </div>
            <div className="row">
              <Input type={'date'} typeForm={'form-control'} setClassCol={'col-sm'} label={'Data Nascimento'}/>
              <InputSelect label={'Estado Civil'} options={['Solteiro','Casado','Divorciado','Viúvo']} />
              <InputSelect label={'Sexo'} options={['Masculino','Feminino']} />
              
              
            </div>
          {/* <br/><br/><br/> */}
          </Form.Group>
          <Form.Group className="mb-5" >
          
          <h3>Endereço</h3>
          <div className="row">
            <Input type={'text'} typeForm={'form-control'} setClassCol={'col-sm-7'} label={'Logradouro'}/>
            <Input type={'text'} typeForm={'form-control'} setClassCol={'col-sm'} label={'Número'}/>
            <Input type={'text'} typeForm={'form-control'} setClassCol={'col-sm'} label={'Complemento'}/>
            </div>

            <div className="row g-3">
            <Input type={'text'} typeForm={'form-control'} setClassCol={'col-sm-7'} label={'Bairro'}/>
            <Input type={'text'} typeForm={'form-control'} setClassCol={'col-sm'} label={'Estado'}/>
            <Input type={'text'} typeForm={'form-control col-sm'} setClassCol={'col-sm'} label={'Cidade'}/>
            </div>
            </Form.Group>

          

          <div className="row d-flex justify-content-center"> 
              <button onClick={save}  className='btn btn-lg col-md-3 btn-primary'>Avançar</button>
          </div>
        </Form>
      </Container>

      <Footer />
    </>
  );
}

export default Personal;
