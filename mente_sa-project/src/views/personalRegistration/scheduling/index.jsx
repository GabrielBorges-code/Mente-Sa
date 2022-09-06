import Container from "react-bootstrap/Container";

import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Stepper from "../../../components/Stepper";

import styles from "./index.module.css";

function Scheduling() {
  return (
    <>
      {/* step 2 */}
      <Header
        message={"Escolha um profissional para te acompanhar"}
        linkBack={"/registro/usuario/escolha-profissional"}
      />

      <Stepper state1={"success"} state2={"success"} state3={"primary"} />

      <Container className={`${styles.content} bg-light card`}>
        <h3>Agendamento</h3>
      </Container>

      <Footer />
    </>
  );
}

export default Scheduling;
