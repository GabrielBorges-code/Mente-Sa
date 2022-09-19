import { useState } from "react";
import Form from "react-bootstrap/Form";
import styles from "./index.module.css";

function TextArea({label, value, setClassCol, setValue, type, typeForm, setSizeRow}) {
    
    return (   
        <div className={setClassCol}>
            <Form.Label className="col">{label}</Form.Label>
            <textarea
            type={type}
            rows={setSizeRow}
            onChange={e => setValue(e.target.value)}
            className={ `${typeForm} ${styles.bgTextArea}`}
            value={value}/>

            <div className='row'>
                    <pre>{JSON.stringify({label, type, value, setValue})}</pre>
            </div>
        </div> 
        
        
        
         
    )
}

export default TextArea