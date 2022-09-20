import Container from "react-bootstrap/Container"
import styles from "./index.module.css"
import { HiOutlinePencilAlt, HiUserCircle, HiChatAlt } from "react-icons/hi"
import Input from "../Input"
import InputSelect from "../Input/inputSelect"
import { Form } from "react-bootstrap"
import { useState } from "react"

export default function Schedule (props) {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
    
        if (form.checkValidity() === false) {
          event.stopPropagation();
         return setValidated(true);
        }
        setValidated(true);
        handleSaveorEdit()
      };

return (

        <Container className={`${styles.min_height} bg-light card`}>
            
            
      <Form className="row g-3" noValidate validated={validated} onSubmit={handleSubmit}>
        
        <h3>Horários</h3> 
            
                <div className="col-auto">
                <label for="inputPassword2" class="visually-hidden">Password</label>
                
                    <Input type={'text'}  typeForm={'form-control'}  required={true}/>
                </div>
                
                <div className="col-auto">
                
                <button type="submit"  className='btn form-control  btn-primary mb-3'>Adicionar</button>
                </div>
                
                

            
            
            
            
                        
          

          
        </Form>
            
        </Container>
)}