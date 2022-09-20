import Container from "react-bootstrap/Container";

import Footer from "../../../components/Footer";

import { HiChatAlt, HiOutlinePencilAlt, HiUserCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";

import { useState } from "react";
import Image from "../../../assets/logo-mente-sa.png";

function ProfileProfessional() {
  let navigate = useNavigate();
  const [currentView, setCurrentView] = useState("home");

  function toSchedule() {
    //PREPARE TO SAVE
    navigate("/usuario/escolha-profissional");
  }

  function renderButton() {
    if (currentView === "home") {
      return (
        <Container className={`${styles.content} bg-light card`}>
          <div className="d-flex justify-content-end">
            <button className="mt-2 btn btn-primary">
              <i>
                <HiOutlinePencilAlt />
              </i>
              Editar Perfil
            </button>
          </div>
        </Container>
      );
    } else if (currentView === "session") {
      return (
        <Container className={`${styles.content} bg-light card`}>
          <div className="d-flex justify-content-end">
            <button className="mt-2 btn btn-primary">
              <i>
                <HiOutlinePencilAlt />
              </i>
              Session
            </button>
          </div>
        </Container>
      );
    } else {
      return (
        <Container className={`${styles.content} bg-light card`}>
          <div className="d-flex justify-content-end">
            <button onClick={toSchedule} className="mt-2 btn btn-primary">
              <i>
                <HiOutlinePencilAlt />
              </i>
              Agenda
            </button>
          </div>
        </Container>
      );
    }
  }

  return (
    <>
      {/* steper 2 */}

      <section className="h-100 gradient-custom-2">
        <div className="">
          <div
            className="text-white d-flex flex-row justify-content-center "
            style={{ backgroundColor: "#5086C1", height: "200px" }}
          >
            <div
              className="ms-4 mt-5 d-flex flex-column  "
              style={{ width: "150px", zIndex: 1 }}
            >
              <img
                src={Image}
                alt="Generic placeholder image"
                className="img-fluid img-thumbnail mt-5  mb-3"
                style={{ width: "150px", zIndex: 1 }}
              />
            </div>
            <div className="ms-4" style={{ marginTop: "100px" }}>
              <p className="  fs-5 fw-bold  text-center">Amanda Piovanni</p>
              <p className="text-wrap text-center lh-1 ">
                Psicologo Comportamental
              </p>
              <p className="text-wrap text-center lh-1 ">CRP 06/156944</p>
            </div>
          </div>

          <Container>
            <div className="p-4 text-black">
              <div className="d-flex justify-content-end text-center py-1">
                <div>
                  <button
                    onClick={() => setCurrentView("home")}
                    className={
                      currentView == "home"
                        ? "btn btn-secondary rounded-pill clicked"
                        : "btn btn-primary rounded-pill"
                    }
                  >
                    <i>
                      <HiUserCircle />
                    </i>{" "}
                    Meu Perfil
                  </button>
                </div>
                <div className="px-3">
                  <button
                    onClick={() => setCurrentView("session")}
                    className={
                      currentView == "session"
                        ? "btn btn-secondary rounded-pill clicked"
                        : "btn btn-primary rounded-pill"
                    }
                  >
                    <i>
                      <HiChatAlt />
                    </i>{" "}
                    Atendimento
                  </button>
                </div>
                <div className="px-3">
                  <button
                    onClick={() => setCurrentView("schedule")}
                    className={
                      currentView == "schedule"
                        ? "btn btn-secondary rounded-pill clicked"
                        : "btn btn-primary rounded-pill"
                    }
                  >
                    <i>
                      <HiChatAlt />
                    </i>{" "}
                    Agenda
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {renderButton()}
      {/* { currentView ==='home' ?
              <Container className={`${styles.content} bg-light card`}>
                <div className="d-flex justify-content-end">
                    <button className="mt-2 btn btn-primary"><i><HiOutlinePencilAlt/></i>Editar Perfil</button>
                </div>
                  <Form>
                    <Form.Group className="mb-5" >
                      <div className="row">
                        <Input type={'text'} typeForm={'form-control'} setClassCol={'col-sm-7'} label={'Logradouro'}/>
                        <Input type={'number'} typeForm={'form-control'} setClassCol={'col-sm'} label={'Número'}/>
                        <Input type={'text'} typeForm={'form-control'} setClassCol={'col-sm'} label={'Complemento'}/>
                      </div>
                    </Form.Group>
                  </Form>
              </Container>
              :
              <Container className={`${styles.content} bg-light card`}>

                <h1>Session</h1>
        
              </Container>
        } */}

      <Footer />
    </>
  );
}

export default ProfileProfessional;
