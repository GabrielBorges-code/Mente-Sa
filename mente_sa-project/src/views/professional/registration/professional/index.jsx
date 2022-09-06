import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import Input from "../../../../components/Input";
import InputSelect from "../../../../components/Input/inputSelect";

import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import {Link, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import styles from "./index.module.css";

function Professional() {
  let navigate = useNavigate()
  //PREPARANDO PARA SALVAR AS INFORMAÇÕES
  function save(){
    navigate('/registro/profissional/empresa')
  }

  

  return (
    <>
      <Header message={'só mais um pouquinho...'} linkBack={'/registro/profissional/'}/>

      {/* steper 2 */}

      <Container className={`${styles.min_height} bg-light card`}>
        
 
        <Form>
        <Form.Group className="mb-5" >
        <h3>Dados Profissionais</h3>
            

            <div className="row">
                <Input type={'text'} typeForm={'form-control'} setClassCol={'col-sm'} label={'Faculdade/Univesidade'}/>
                <Input type={'text'} typeForm={'form-control'} setClassCol={'col-sm'} label={'Ano de Conclusão'}/>
                
            </div>
            <div className="row">
                <Input type={'text'} typeForm={'form-control'} setClassCol={'col-sm'} label={'Especialização'}/>
                <Input type={'text'} typeForm={'form-control'} setClassCol={'col-sm'} label={'CRM / CRP'}/>
            </div>
            <div className="row">
                <Input type={'text'} typeForm={'form-control'} setClassCol={'col-sm'} label={'Pós-Graduação'}/>
                <Input type={'date'} typeForm={'form-control'} setClassCol={'col-sm'} label={'Ano de Conclusão'}/>
            </div>
            <div className="row">
                <Input type={'text'} typeForm={'form-control'} setClassCol={'col-sm'} label={'Mestrado'}/>
                <Input type={'date'} typeForm={'form-control'} setClassCol={'col-sm'} label={'Ano de Conclusão'}/>
                
            </div>
            <div className="row">
                <Input type={'text'} typeForm={'form-control'} setClassCol={'col-sm'} label={'Doutorado'}/>
                <Input type={'date'} typeForm={'form-control'} setClassCol={'col-sm'} label={'Ano de Conclusão'}/>
            </div>
                        
          </Form.Group>          

          <div className="row d-flex justify-content-center">
          <div className="row d-flex justify-content-center"> 
              <button onClick={save}  className='btn btn-lg col-md-3 btn-primary'>Avançar</button>
          </div>
          </div>
        </Form>
      </Container>

      <Footer />
    </>
  );
}

export default Professional;