import { useState } from "react";
import Form from "react-bootstrap/Form";
import styles from "./index.module.css";

function Input({label, value, setClassCol, setValue, type, typeForm,required}) {
    
    return (  
    
         <div className={setClassCol}>
            <Form.Label className="col" >{required?<div><i>{label}</i><i style={{color:"red"}}>*</i></div>:label}</Form.Label>
            <input
            type={type}
            required= {required ||''}
            onChange={e => setValue(e.target.value)}
            className={ `${typeForm} ${styles.bgInput}`}
            value={value}/>

            <Form.Control.Feedback type="invalid">
                Campo {label} obrigatório.
            </Form.Control.Feedback>
        </div>  
    )
}

export default Input
