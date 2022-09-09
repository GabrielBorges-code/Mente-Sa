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

function Scheduling() {
  let navigate = useNavigate();
  const [] = useState();

  function save() {
    //PREPARE TO SAVE
    navigate("/usuario/perfil");
  }

  return (
    <>
      {/* step 2 */}
      <Header
        message={"Agora sim! Vamos concluir seu agendamento?"}
        linkBack={"/usuario/perfil"}
      />

      <Stepper
        step={"100%"}
        icon={true}
        state1={"success"}
        state2={"success"}
        state3={"primary"}
      />

      <Container className={`${styles.content} bg-light card`}>
        <Form>
          <Form.Group className="mb-5">
            <h3>Agendamento</h3>

            <div className="row">
              <Input
                type={"date"}
                typeForm={"form-control"}
                setClassCol={"col-sm"}
                label={"Data"}
              />
              <Input
                type={"time"}
                typeForm={"form-control"}
                setClassCol={"col-sm"}
                label={"Horário"}
              />

              <InputSelect
                label={"Tipo de Atendimento"}
                options={["Atendimento A", "Atendimento B", "Atendimento C"]}
              />
            </div>
          </Form.Group>

          <div className="row d-flex justify-content-center">
            <button onClick={save} className="btn btn-lg col-md-3 btn-primary">
              Concluir
            </button>
          </div>
        </Form>
      </Container>

      <Footer />
    </>
  );
}

export default Scheduling;
