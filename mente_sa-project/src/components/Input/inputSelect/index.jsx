import Form from "react-bootstrap/Form";
import styles from "./index.module.css";

function InputSelect({label, options}) {


    return (  
        <div className="col-md-3 ">
            <label  className="form-label">{label}</label>

            <select className={ `${styles.bgInputSelect} form-select`}>
                <option disabled >Escolha</option>
                {options.map(option => {
                    return <option key={option} value={option}>{option}</option>
                })
                }
                
            </select>
        </div> 


        
   
    )
}

export default InputSelect