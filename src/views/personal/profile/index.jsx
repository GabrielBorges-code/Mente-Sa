import Container from "react-bootstrap/Container";

import Footer from "../../../components/Footer";
import Navbar from "../../../components/NavBar";

import styles from "./index.module.css";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import { AiOutlineCalendar } from "react-icons/ai";
import { BsFillBookFill } from "react-icons/bs";
import { BsFillCameraVideoFill } from "react-icons/bs";

function Profile() {
  return (
    <>
      <Navbar />

      <Container className={`${styles.content} bg-light card`}>

        <div className="dropdown">
          <DropdownButton id="dropdown-basic-button" title="Sessões">
            <Dropdown.Item href="#/action-1">
              <AiOutlineCalendar />
              Meu Perfil
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              <AiOutlineCalendar />
              Histórico de Sessão
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              <BsFillCameraVideoFill />
              Agendar Sessão
            </Dropdown.Item>
          </DropdownButton>
        </div>
        
        <br/>
        
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, cumque?
        Nesciunt, dicta, veniam, aliquid perferendis id blanditiis porro dolorem
        iste voluptatibus placeat corporis quidem exercitationem inventore
        aliquam quia molestiae architecto!
      </Container>

      <Footer />
    </>
  );
}

export default Profile;
