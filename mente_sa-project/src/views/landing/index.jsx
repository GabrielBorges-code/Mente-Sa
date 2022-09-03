import * as React from 'react'
import styles from './styles.css'
import Logo from '../../assets/logo.svg'
//icons
import {BsFillCameraVideoFill, BsFillCalendar2EventFill} from 'react-icons/bs'

export default function Landing() {
    
    return (
        <>
            <div className='container-md'>
                <div>
                <div className='row align-items d-md-flex justify-content-md-center logo-div'>
                    <img className='img-fluid logo' src={Logo} alt="" />

                    <div className='d-grid gap-2 d-md-flex justify-content-md-center'>
                    <button className='btn btn-lg btn-primary default'><span><BsFillCalendar2EventFill/> </span>Agendar Sessão</button>
                    <button className='btn btn-lg btn-primary dark '> <span><BsFillCameraVideoFill/></span> Ofertar Sessão </button></div>
                    
                </div>
                </div>
                
            </div>
        </>
       
            
            
        
        
    )
}