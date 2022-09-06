import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Link, Navigate, useNavigate } from "react-router-dom";

import Input from "../../../components/Input";
import InputSelect from "../../../components/Input/inputSelect";

import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Stepper from "../../../components/Stepper";

import styles from "./index.module.css";
import { useState } from "react";

function Scheduling() {
  let navigate = useNavigate();
  const [] = useState();

  function save() {
    //PREPARE TO SAVE
    navigate("/registro/usuario/agendamento");
  }

  return (
    <>
      {/* step 2 */}
      <Header
        message={"Escolha um profissional para te acompanhar"}
        linkBack={"/registro/usuario/"}
      />

      <Stepper
        icon={true}
        state1={"success"}
        state2={"primary"}
        state3={"secondary"}
      />

      <Container className={`${styles.content} bg-light card`}>
        <h3>Todos os profissionais</h3>

        <div className="row d-flex justify-content-center">
          <button onClick={save} className="btn btn-lg col-md-3 btn-primary">
            Avançar
          </button>
        </div>
      </Container>

      <Footer />
    </>
  );
}

export default Scheduling;
