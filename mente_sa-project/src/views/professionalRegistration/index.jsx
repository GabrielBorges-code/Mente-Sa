import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Footer from "../../components/footer";
import Header from "../../components/header";

import Container from "react-bootstrap/Container";

import styles from "./index.module.css";

function ProfessionalRegistration() {
  return (
    <>
      <Header />

      {/* steper */}

      <Container className={`${styles.min_height} bg-light`}>
        <h3>Dados Pessoais</h3>

        <Form>
          <Form.Group className="mb-3" >
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control type="text" placeholder="Jose Alvez Pereira" />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="nome@email.com" />

            <Form.Label>Telefone</Form.Label>
            <Form.Control type="tel" placeholder="61 9 7777-6666" />

          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Telefone</Form.Label>
            <Form.Control type="tel" placeholder="61 9 7777-6666" />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Control type="text" placeholder="05/08/1987" />
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Estado Civil</Form.Label>
            <Form.Select aria-label="Default select example">
              <option disabled>Escolha</option>
              <option value="Solteiro">Solteiro</option>
              <option value="Casado">Casado</option>
              <option value="Separado">Separado</option>
              <option value="Divorciado">Divorciado</option>
              <option value="Viúvo">Viúvo</option>
            </Form.Select>
          </Form.Group>

          <Form.Label>Sexo</Form.Label>
          <Form.Group className="mb-3" >
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">
                Masculino
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">
                Feminino
              </label>
            </div>
            
          </Form.Group>

          {/* <br/><br/><br/> */}
          
          <h3>Endereço</h3>

          <Form.Group className="mb-3" >
            <Form.Label>Logradouro</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Numero</Form.Label>
            <Form.Control type="number"/>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Complemento</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Bairro</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Estado</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Cidade</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>

          <div class="row d-flex justify-content-center">
            <Button className="col-md-6" variant="primary" type="submit">
              Avançar
            </Button>
          </div>
        </Form>
      </Container>

      <Footer />
    </>
  );
}

export default ProfessionalRegistration;
