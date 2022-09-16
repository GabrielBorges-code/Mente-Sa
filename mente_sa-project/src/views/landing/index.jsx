import * as React from 'react'
import { Link } from "react-router-dom";
import styles from './styles.css'
import Logo from '../../assets/logo.svg'



//icons
import {AiOutlineVideoCamera,AiOutlineCalendar} from 'react-icons/ai'

export default function Landing() {
    
    return (
        <>
        <div className='divAll'>
            <div className='container-md  '>
                <div className='row  align-items d-md-flex justify-content-md-center logo-div'>
                    <img className='img-fluid logo' src={Logo} alt="" />
                    <div className=' d-grid gap-2 d-md-flex justify-content-md-center'>
                    <Link to="/registro/usuario/"><button className='btn btn-lg btn-primary default'><i><AiOutlineCalendar/> </i> Agendar Sessão</button></Link>
                    <Link to="/registro/profissional/"><button className='btn btn-lg btn-primary dark '> <i><AiOutlineVideoCamera/> </i> Ofertar Sessão</button></Link> </div>  
                </div>
            </div>
            </div>
        </>
    )
}