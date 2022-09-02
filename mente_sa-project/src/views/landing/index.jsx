import * as React from 'react'
import styles from './styles.css'
import Logo from '../../assets/logo.svg'

export default function Landing() {
    
    return (
        <>
            <div className='container-md'>
                <div>
                <div className='row align-items logo-div'>
                    <img className='logo' src={Logo} alt="" />
                </div>
                <div>
                    <div><button type='button' class='btn btn-primary default'> teste</button></div>
                    <div><button type='button' class='btn  btn-primary dark '> teste</button></div>
                </div>
                </div>
            </div>
        </>
       
            
            
        
        
    )
}