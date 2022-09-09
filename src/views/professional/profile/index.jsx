
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import Input from "../../../components/Input";
import InputSelect from "../../../components/Input/inputSelect";

import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

function ProfileProfessional() {
    let navigate = useNavigate()
    
    function save(){ //PREPARE TO SAVE
      navigate('/registro/profissional/empresa')
    }
    
    return (
      <>
        <Header message={''} linkBack={'/registro/profissional/'}/>
        {/* steper 2 */}
        
        <Container className={`${styles.min_height} bg-light card`}>
        
  
          
        </Container>
  
        <Footer />
      </>
    );
  }
  
  export default ProfileProfessional;