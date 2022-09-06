import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import Input from "../../../components/Input";
import InputSelect from "../../../components/Input/inputSelect";

import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

function Enterprise() {
  let navigate = useNavigate
  //PREPARANDO PARA SALVAR AS INFORMAÇÕES
  function save(){
    navigate('/registro/profissional/empresa')
  }
  return (
    <>
      <Header mensage={'finalizando!'}/>

      {/* steper 3 */}

      <Container className={`${styles.min_height} bg-light card`}>
      <Form>
        <Form.Group className="mb-5" >
        <h3>Dados Empresa</h3>
            

            <div className="row">
                <Input type={'text'} typeForm={'form-control'} label={'Logradouro'}/>
                <Input type={'date'} typeForm={'form-control'} label={'Número'}/>
                <Input type={'date'} typeForm={'form-control'} label={'Complemento'}/>
            </div>
            <div className="row">
                <Input type={'text'} typeForm={'form-control'} label={'Bairro'}/>
                <Input type={'text'} typeForm={'form-control'} label={'Estado'}/>
                <Input type={'text'} typeForm={'form-control'} label={'Cidade'}/>
            </div>
            <div className="row">
                <Input type={'text'} typeForm={'form-control'} label={'Email da Empresa'}/>
                <Input type={'date'} typeForm={'form-control'} label={'Telefone'}/>
            </div>
            <div className="row">
                <Input type={'text'} typeForm={'form-control'}  label={'Valor da Sessão'}/>
                <Input type={'date'} typeForm={'form-control'} label={'Duração da Sessão'}/>
                <Input type={'date'} typeForm={'form-control'} label={'Tipo de Atendimento '}/>
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

export default Enterprise;
