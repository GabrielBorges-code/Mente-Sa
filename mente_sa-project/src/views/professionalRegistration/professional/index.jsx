import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import Input from "../../../components/Input";
import InputSelect from "../../../components/Input/inputSelect";

import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

import styles from "./index.module.css";

function Professional() {
  return (
    <>
      <Header mensage={'só mais um pouquinho...'}/>

      {/* steper 2 */}

      <Container className={`${styles.content} bg-light card`}>
        
 
        <Form>
        <Form.Group className="mb-5" >
        <h3>Dados Profissionais</h3>
            

            <div className="row">
                <Input type={'text'} typeForm={'form-control'} label={'Faculdade/Univesidade'}/>
                <Input type={'text'} typeForm={'form-control'} label={'Ano de Conclusão'}/>
                
            </div>
            <div className="row">
                <Input type={'text'} typeForm={'form-control'} label={'Especialização'}/>
                <Input type={'text'} typeForm={'form-control'} label={'CRM / CRP'}/>
            </div>
            <div className="row">
                <Input type={'text'} typeForm={'form-control'} label={'Pós-Graduação'}/>
                <Input type={'date'} typeForm={'form-control'} label={'Ano de Conclusão'}/>
            </div>
            <div className="row">
                <Input type={'text'} typeForm={'form-control'} label={'Mestrado'}/>
                <Input type={'date'} typeForm={'form-control'} label={'Ano de Conclusão'}/>
                
            </div>
            <div className="row">
                <Input type={'text'} typeForm={'form-control'} label={'Doutorado'}/>
                <Input type={'date'} typeForm={'form-control'} label={'Ano de Conclusão'}/>
            </div>
                        
          </Form.Group>          

          <div className="row d-flex justify-content-center">
            <Button className="btn btn-lg col-md-3"  type="submit">
              Avançar
            </Button>
          </div>
        </Form>
      </Container>

      <Footer />
    </>
  );
}

export default Professional;
