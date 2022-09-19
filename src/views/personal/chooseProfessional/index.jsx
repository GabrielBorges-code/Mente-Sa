import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

import { useNavigate } from "react-router-dom";

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
        step={'50%'}
        icon={true}
        state1={"success"}
        state2={"primary"}
        state3={"secondary"}
      />

      <Container className={`${styles.content} bg-light card`}>
        <h3>Todos os profissionais</h3>

        <div>
          <Table responsive="sm">
            <thead>
              <tr>
                <th></th>
                <th>Nome</th>
                <th>Cargo</th>
                <th>CRM / CRP</th>
                <th>Data</th>
                <th>Área de Atuação</th>
                <th></th>
              </tr>
            </thead>

            <tbody className={styles.color_td}>
              <tr>
                <td><img src="https://files.tecnoblog.net/wp-content/uploads/2018/09/linus-torvalds-dedo-meio.jpg" alt="foto perfil" /></td>
                <td>João Sousa</td>
                <td>Psicólogo</td>
                <td>08/65974</td>
                <td>26 de maio de 2019</td>
                <td>Psicologia Clinica</td>
                <td>
                  <Button>Selecionar</Button>
                </td>
              </tr>
              
              

              <tr>
                <td><img src="https://files.tecnoblog.net/wp-content/uploads/2018/09/linus-torvalds-dedo-meio.jpg" alt="foto perfil" /></td>
                <td>Beatriz Brum</td>
                <td>Psicólogo</td>
                <td>06/97536</td>
                <td>26 de maio de 2019</td>
                <td>Psicologia Clinica</td>
                <td>
                  <Button>Selecionar</Button>
                </td>
              </tr>
              <tr>
                <td><img src="https://files.tecnoblog.net/wp-content/uploads/2018/09/linus-torvalds-dedo-meio.jpg" alt="foto perfil" /></td>
                <td>Camila Fellix</td>
                <td>Psicanalista</td>
                <td>06/97536</td>
                <td>26 de maio de 2019</td>
                <td>Psicanalista Clinica</td>
                <td>
                  <Button>Selecionar</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>

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
