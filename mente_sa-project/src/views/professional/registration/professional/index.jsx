
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Input from "../../../../components/Input";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import { useNavigate } from "react-router-dom";

import styles from "./index.module.css";

function Professional() {
  let navigate = useNavigate()
  
  function save(){ //PREPARE TO SAVE
    navigate('/registro/profissional/empresa')
  }
  
  return (
    <>
      <Header message={'só mais um pouquinho...'} linkBack={'/registro/profissional/'}/>
      {/* steper 2 */}

      <Container>
        <div className="position-relative m-4">
            <div className={`${styles.progressB} progress`} >
                <div className={`${styles.bar} progress-bar`} role="progressbar" aria-label="Progress"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                <button type="button" className="position-absolute top-0 start-0 translate-middle btn btn-md btn-success rounded-pill" >1</button>
                <button type="button" className="position-absolute top-0 start-50 translate-middle btn btn-md btn-primary rounded-pill" >2</button>
                <button type="button" className="position-absolute top-0 start-100 translate-middle btn btn-md btn-secondary rounded-pill" >3</button>
            </div>
            
        </div>
        </Container>

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
              <button onClick={save}  className='btn btn-lg col-md-3 btn-primary'>Avançar</button>
          </div>
          
        </Form>
      </Container>

      <Footer />
    </>
  );
}

export default Professional;
