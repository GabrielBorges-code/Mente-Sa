
import { useState, useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import styles from './styles.css'
import Logo from '../../assets/logo.svg'



//icons
import {AiOutlineVideoCamera,AiOutlineCalendar} from 'react-icons/ai'



export default function Landing() {
    let navigate = useNavigate()
    const [professional, setProfessional ] = useState(null)

    
    function setSession(){
        sessionStorage.setItem("@Land:status", professional)
        if(professional===null){return}
        
        navigate('/registro')
            

        
    }

    
    useEffect(() => {
        
        setSession()
    }, [professional])
    
    

    

    
    return (
        <>
        <div className='divAll'>
            <div className='container-md  '>
                <div className='row  align-items d-md-flex justify-content-md-center logo-div'>
                    <img className='img-fluid logo' src={Logo} alt="" />
                    <div className=' d-grid gap-5 d-md-flex justify-content-md-center'>
                    <div className="row d-flex justify-content-center"> 
                    <button onClick={() => setProfessional(false)} className='btn btn-lg btn-primary default'><i><AiOutlineCalendar/> </i> Agendar Sessão</button>
                    </div>
                    <div className="row d-flex justify-content-center"> 
                    <button onClick={() => setProfessional(true)} className='btn btn-lg btn-primary dark '> <i><AiOutlineVideoCamera/> </i> Ofertar Sessão</button>
                    </div>     
                    {/* <Link to="/registro/usuario/"><button className='btn btn-lg btn-primary default'><i><AiOutlineCalendar/> </i> Agendar Sessão</button></Link> */}
                    {/* <Link to="/registro/profissional/"><button className='btn btn-lg btn-primary dark '> <i><AiOutlineVideoCamera/> </i> Ofertar Sessão</button></Link> */}
                    </div>  
                </div>
            </div>
            </div>
        </>
    )
}