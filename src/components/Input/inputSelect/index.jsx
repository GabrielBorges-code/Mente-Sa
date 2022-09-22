import { useEffect } from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import styles from "./index.module.css";

function InputSelect({label, options, setValue, value}) {
    const[optionSelected, setOptionSelected] = useState()

    function handleChangeOption(event){
        setValue(event.target.value)
    }
    useEffect(() => {
        
    })
    

    return (  
        <div className="col-md-3 ">
            <label  className="form-label">{label}</label>

            <select value={value} onChange={e => setValue(e.target.value)} className={ `${styles.bgInputSelect} form-select`}>
                <option disabled >Escolha</option>
                {options.map(option => {
                    return <option key={option}  value={option.key}>{option}</option>
                })
                }
                
            </select>
        </div> 


        
   
    )
}

export default InputSelect