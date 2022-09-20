
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container"

import Input from "../../../components/Input"
import InputSelect from "../../../components/Input/inputSelect"

import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import Schedule from "../../../components/Schedule";

import Session from "../session"

import styles from "./index.module.css"
import { useNavigate } from "react-router-dom"
import { HiOutlinePencilAlt, HiUserCircle, HiChatAlt } from "react-icons/hi"

import Image from "../../../assets/logo-mente-sa.png"
import { useState } from "react"

function ProfileProfessional() {
    let navigate = useNavigate()
    //controll screen
    const [currentView, setCurrentView] = useState('home')

    const [name, setName] = useState(null) //Personal
    const [regionalCouncilNumber, setRegionalCouncilNumber] = useState('') //enterprise
    const [specializationName, setSpecializationName] = useState('') //enterprise
    
    function save(){ //PREPARE TO SAVE
      navigate('/registro/profissional/empresa')
    }
    function handleEditProfile(){
      navigate('/registro/profissional')

    }

    function renderButton(){
      if(currentView === 'home'){
        return ( 
            <Container className={`${styles.min_height} bg-light card`}>
              <div className="d-flex justify-content-end">
                  <button onClick={handleEditProfile} className="mt-2 btn btn-primary"><i><HiOutlinePencilAlt/></i>Editar Perfil</button>
              </div>
            </Container> 
      )
      }else if( currentView === 'session'){
        return (
            <Container className={`${styles.min_height} bg-light card`}>
              <div >
                <Session />
              </div>
            </Container>
          )
      }else {
        return (
            <Schedule />

        )
      }
      
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
                          
                          <button onClick={() => setCurrentView('home')} className={currentView == 'home' ? 'btn btn-secondary rounded-pill clicked': 'btn btn-primary rounded-pill'}><i><HiUserCircle/></i> Meu Perfil</button>
                        </div>
                        <div className="px-3">
                          
                          <button onClick={() => setCurrentView('session')} className={currentView == 'session' ? 'btn btn-secondary rounded-pill clicked': 'btn btn-primary rounded-pill'}><i><HiChatAlt/></i> Atendimento</button>
                        </div>
                        <div className="px-3">
                          
                          <button onClick={() => setCurrentView('schedule')} className={currentView == 'schedule' ? 'btn btn-secondary rounded-pill clicked': 'btn btn-primary rounded-pill'}><i><HiChatAlt/></i> Agenda</button>
                        </div>
                        
                      </div>
                    </div>
                    </Container>
                  </div>
               
        </section>
          
        
         { renderButton()}
        {/* { currentView ==='home' ?
              <Container className={`${styles.min_height} bg-light card`}>
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
              <Container className={`${styles.min_height} bg-light card`}>

                <h1>Session</h1>
        
              </Container>
        } */}
  
        <Footer />
      </>
    );
  }
  
  export default ProfileProfessional;