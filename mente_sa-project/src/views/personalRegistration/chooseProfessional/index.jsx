import Container from "react-bootstrap/Container";

import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

import styles from "./index.module.css";

function Scheduling() {
  return (
    <>
    {/* step 2 */}
      <Header mensage={"Escolha um profissional para te acompanhar"} />

      <Container className={`${styles.content} bg-light card`}>
        <h3>Todos os profissionais</h3>


      </Container>

      <Footer />
    </>
  );
}

export default Scheduling;
