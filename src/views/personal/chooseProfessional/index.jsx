import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import ModalAgendamento from "../../../components/ModalSession/ModalAgendamento";

import { useNavigate } from "react-router-dom";

import { useState } from "react";
import styles from "./index.module.css";

function ChooseProfessional() {
  let navigate = useNavigate();
  const [] = useState();

  function save() {
    //PREPARE TO SAVE
    navigate("/usuario/agendamento");
  }

  return (
     <>
        <h3>Todos os profissionais</h3>
        <hr></hr>

        <ModalAgendamento 
          show={showModal}
          onHide={() => setShowModal(false)}
        />

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
                <td>
                  <img
                    src="https://files.tecnoblog.net/wp-content/uploads/2018/09/linus-torvalds-dedo-meio.jpg"
                    alt="foto perfil"
                  />
                </td>
                <td>João Sousa</td>
                <td>Psicólogo</td>
                <td>08/65974</td>
                <td>26 de maio de 2019</td>
                <td>Psicologia Clinica</td>
                <td>
                  <Button onClick={() => setShowModal(true)}>Selecionar</Button>
                </td>
              </tr>

              <br />

              <tr>
                <td>
                  <img
                    src="https://files.tecnoblog.net/wp-content/uploads/2018/09/linus-torvalds-dedo-meio.jpg"
                    alt="foto perfil"
                  />
                </td>
                <td>Beatriz Brum</td>
                <td>Psicólogo</td>
                <td>06/97536</td>
                <td>26 de maio de 2019</td>
                <td>Psicologia Clinica</td>
                <td>
                  <Button>Selecionar</Button>
                </td>
              </tr>

              <br />

              <tr>
                <td>
                  <img
                    src="https://files.tecnoblog.net/wp-content/uploads/2018/09/linus-torvalds-dedo-meio.jpg"
                    alt="foto perfil"
                  />
                </td>
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
    </>
  );
}

export default ChooseProfessional;
