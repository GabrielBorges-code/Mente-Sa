import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import Input from "../../../../components/Input";
import InputSelect from "../../../../components/Input/inputSelect";

import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";

import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

function Enterprise() {
  let navigate = useNavigate()
  
  
  function save(){ //METHOD TO SAVE
    
    navigate('/profile') //NEXT BUTTON
  }
  return (
    <>
      <Header message={'finalizando!'} linkBack={'/registro/profissional/sobre'}/>

      {/* steper 3 */}
      <Container className={``}>
        <div className="position-relative m-4">
            <div className={`${styles.progressB} progress`} >
                <div className={`${styles.bar} progress-bar`} role="progressbar" aria-label="Progress"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                <button type="button" className="position-absolute top-0 start-0 translate-middle btn btn-md btn-success rounded-pill" >1</button>
                <button type="button" className="position-absolute top-0 start-50 translate-middle btn btn-md btn-success rounded-pill" >2</button>
                <button type="button" className="position-absolute top-0 start-100 translate-middle btn btn-md btn-primary rounded-pill" >3</button>
            </div>
            
        </div>
        </Container>

      <Container className={`${styles.min_height} bg-light card`}>
      <Form>
        <Form.Group className="mb-5" >
        <h3>Dados Empresa</h3>
            

            <div className="row">
                <Input type={'text'} typeForm={'form-control'} setClassCol={'col-sm-7'} label={'Logradouro'}/>
                <Input type={'number'} typeForm={'form-control'} setClassCol={'col-sm'} label={'Número'}/>
                <Input type={'text'} typeForm={'form-control'} setClassCol={'col-sm'} label={'Complemento'}/>
            </div>
            <div className="row">
                <Input type={'text'} typeForm={'form-control'} setClassCol={'col-sm'} label={'Bairro'}/>
                <Input type={'text'} typeForm={'form-control'} setClassCol={'col-sm'} label={'Estado'}/>
                <Input type={'text'} typeForm={'form-control'} setClassCol={'col-sm'} label={'Cidade'}/>
            </div>
            <div className="row">
                <Input type={'text'} typeForm={'form-control'} setClassCol={'col-sm'} label={'Email da Empresa'}/>
                <Input type={'text'}  typeForm={'form-control'} setClassCol={'col-sm'} label={'Telefone'}/>
            </div>
            <div className="row">
                <Input type={'number'} typeForm={'form-control'} setClassCol={'col-sm'} label={'Valor da Sessão'}/>
                <Input type={'number'} typeForm={'form-control'} setClassCol={'col-sm'} label={'Duração da Sessão'}/>
                <InputSelect label={'Tipo de Atendimento'} options={['ONLINE','PRESENCIAL', 'ONLINE E PRESENCIAL']} />
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
