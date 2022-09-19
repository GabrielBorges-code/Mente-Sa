import { useState } from "react";
import Form from "react-bootstrap/Form";
import styles from "./index.module.css";

function Input({label, value, setClassCol, setValue, type, typeForm}) {
    
    return (   
        <div className={setClassCol}>
            <Form.Label className="col">{label}</Form.Label>
            <input
            type={type}
            
            onChange={e => setValue(e.target.value)}
            className={ `${typeForm} ${styles.bgInput}`}
            value={value}/>

            <div className='row'>
                    <pre>{JSON.stringify({label, type, value, setValue})}</pre>
            </div>
        </div> 
        
        
        
         
    )
}

export default Input