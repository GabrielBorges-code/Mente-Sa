
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import Input from "../../../components/Input";
import InputSelect from "../../../components/Input/inputSelect";

import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { HiOutlinePencilAlt, HiUserCircle, HiChatAlt } from "react-icons/hi"

import Image from "../../../assets/logo-mente-sa.png"

function ProfileProfessional() {
    let navigate = useNavigate()
    
    function save(){ //PREPARE TO SAVE
      navigate('/registro/profissional/empresa')
    }
    
    return (
      <>
        
        {/* steper 2 */}
        
        <section className="h-100 gradient-custom-2">
            
                  <div className="">
                    <div className="text-white d-flex flex-row justify-content-center" style={{backgroundColor: "#5086C1", height: "200px"}} >
                      <div className="ms-4 mt-5 d-flex flex-column " style={{width: "150px", zIndex: 1}}>
                        <img src={Image}
                          alt="Generic placeholder image" className="img-fluid img-thumbnail mt-5 mb-3"
                          style={{width: "150px", zIndex: 1}}/>
                        <button type="button" className="btn btn-sm btn-primary " 
                          style={{zIndex: 1}}>
                          <HiOutlinePencilAlt />
                        </button>
                      </div>
                      <div className="ms-3" style={{marginTop: "100px"}}>
                        <h5>Dra Amanda Piovanni</h5>
                        <p>Psicologo Comportamental</p>
                        <p>CRP 06/156944</p>
                      </div>
                    </div>
                    
                    <Container>
                    <div className="p-4 text-black" >
                      <div className="d-flex justify-content-end text-center py-1">
                        <div>
                          
                          <button className="btn btn-primary"><i><HiUserCircle/></i> Meu Perfil</button>
                        </div>
                        <div className="px-3">
                          
                          <button className="btn btn-primary"><i><HiChatAlt/></i> Atendimento</button>
                        </div>
                        
                      </div>
                    </div>
                    </Container>
                  </div>
               
          </section>
          
        
        <Container className="">
        
          
        </Container>
        
        <Container className={`${styles.min_height} bg-light card`}>

          <section>
            <input/>
          </section>
        
  
          
        </Container>
  
        <Footer />
      </>
    );
  }
  
  export default ProfileProfessional;