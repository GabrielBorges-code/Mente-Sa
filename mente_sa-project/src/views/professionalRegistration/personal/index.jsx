import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import Input from "../../../components/Input";
import InputSelect from "../../../components/Input/inputSelect";

import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

import styles from "./index.module.css";

function Personal() {
  return (
    <>
      <Header mensage={"Olá profissional, queremos te conhecer!"} />

      {/* steper */}

      <Container className={`${styles.content} bg-light card`}>
        <Form>
          <Form.Group className="mb-5">
            <h3>Dados Pessoais</h3>
            <div className="row">
              <Input
                type={"text"}
                typeForm={"form-control"}
                label={"Nome Completo"}
              />
            </div>

            <div className="row">
              <Input type={"email"} typeForm={"form-control"} label={"Email"} />
              <Input
                type={"text"}
                typeForm={"form-control"}
                label={"Telefone"}
              />
            </div>
            <div className="row">
              <Input
                type={"date"}
                typeForm={"form-control"}
                label={"Data Nascimento"}
              />

              <InputSelect label={"Estado Civil"} />

              <div className="col-md-3">
                <label className="form-label">Sexo</label>
                <select className="form-select form-select">
                  <option>Escolha</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                </select>
              </div>
            </div>
            {/* <br/><br/><br/> */}
          </Form.Group>

          <Form.Group className="mb-5">
            <h3>Endereço</h3>
            <div className="row">
              <Input
                type={"text"}
                typeForm={"form-control"}
                label={"Logradouro"}
              />
              <Input type={"text"} typeForm={"form-control"} label={"Número"} />
              <Input
                type={"text"}
                typeForm={"form-control"}
                label={"Complemento"}
              />
            </div>

            <div className="row">
              <Input type={"text"} typeForm={"form-control"} label={"Bairro"} />
              <Input type={"text"} typeForm={"form-control"} label={"Estado"} />
              <Input type={"text"} typeForm={"form-control"} label={"Cidade"} />
            </div>
          </Form.Group>

          <div className="row d-flex justify-content-center">
            <Button className="btn btn-lg col-md-3" type="submit">
              Avançar
            </Button>
          </div>
        </Form>
      </Container>

      <Footer />
    </>
  );
}

export default Personal;
