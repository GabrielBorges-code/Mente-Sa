import { useState } from "react";
import Form from "react-bootstrap/Form";
import styles from "./index.module.css";

function TextArea({label, name, value, setClassCol, setValue, type, typeForm, setSizeRow}) {
    
    return (   
        <div className={setClassCol}>
            <Form.Label className="col">{label}</Form.Label>
            <textarea
            type={type}
            rows={setSizeRow}
            onChange={e => setValue(e.target.value)}
            className={ `${typeForm} ${styles.bgTextArea}`}
            value={value}
            name={name}/>

        </div>           
    )
}

export default TextArea