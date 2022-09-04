import Form from "react-bootstrap/Form";
import styles from "./index.module.css";

function InputSelect({label, value, setValue, type, typeForm}) {

    return (  
        <div className="col-md-3">
            <label  className="form-label">{label}</label>
            <select className="form-select form-select">
                <option disabled>Escolha</option>
                <option value="Solteiro">Solteiro</option>
                <option value="Casado">Casado</option>
                <option value="Separado">Separado</option>
                <option value="Divorciado">Divorciado</option>
                <option value="Viúvo">Viúvo</option>
            </select>
        </div> 


        
   
    )
}

export default InputSelect