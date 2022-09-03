import Form from "react-bootstrap/Form";
import styles from "./index.module.css";

function Input({label, value, setValue, type, typeForm}) {

    return (   
        <div className="col">
            <Form.Label className="col">{label}</Form.Label>
            <input
            type={type}
            onChange={e => setValue(e.target.value)}
            className={ `${typeForm} ${styles.bgInput}`  }
            value={value}/>
        </div>    
    )
}

export default Input