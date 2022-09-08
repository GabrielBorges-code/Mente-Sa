
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container"

import Input from "../../../components/Input"
import InputSelect from "../../../components/Input/inputSelect"

import Footer from "../../../components/Footer"
import Header from "../../../components/Header"

import styles from "./index.module.css"
import { useNavigate } from "react-router-dom"
import { HiOutlinePencilAlt, HiUserCircle, HiChatAlt } from "react-icons/hi"

import Image from "../../../assets/logo-mente-sa.png"
import { useState } from "react"

function ProfileProfessional() {
    let navigate = useNavigate()
    const [currentView, setCurrentView] = useState('home')
    
    
    function save(){ //PREPARE TO SAVE
      navigate('/registro/profissional/empresa')
    }

    
    
    return (
      <>
        
        {/* steper 2 */}
        
        <section className="h-100 gradient-custom-2">
            
                  <div className="">
                    <div className="text-white d-flex flex-row justify-content-center " style={{backgroundColor: "#5086C1", height: "200px"}} >
                      <div className="ms-4 mt-5 d-flex flex-column  " style={{width: "150px", zIndex: 1}}>
                        <img src={Image}
                          alt="Generic placeholder image" className="img-fluid img-thumbnail mt-5  mb-3"
                          style={{width: "150px", zIndex: 1}}/>
                          
                      </div>
                      <div className="ms-4" style={{marginTop: "100px"}}>
                            <p className="  fs-5 fw-bold  text-center">Dra Amanda Piovanni</p>
                            <p className="text-wrap text-center lh-1 ">Psicologo Comportamental</p>
                            <p className="text-wrap text-center lh-1 ">CRP 06/156944</p>
                      </div>
                    </div>
                    
                    <Container>
                    <div className="p-4 text-black" >
                      <div className="d-flex justify-content-end text-center py-1">
                        <div>
                          
                          <button onClick={() => setCurrentView('home')} className="btn btn-primary rounded-pill"><i><HiUserCircle/></i> Meu Perfil</button>
                        </div>
                        <div className="px-3">
                          
                          <button onClick={() => setCurrentView('session')} className="btn btn-primary rounded-pill"><i><HiChatAlt/></i> Atendimento</button>
                        </div>
                        
                      </div>
                    </div>
                    </Container>
                  </div>
               
          </section>
          
        
       
        { currentView ==='home' ?
        <Container className={`${styles.min_height} bg-light card`}>

          <h1>Home</h1>
   
        </Container>
        :
        <Container className={`${styles.min_height} bg-light card`}>

          <h1>sessão</h1>
   
        </Container>
        }
  
        <Footer />
      </>
    );
  }
  
  export default ProfileProfessional;