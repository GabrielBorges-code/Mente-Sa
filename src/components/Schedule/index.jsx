import Container from "react-bootstrap/Container"
import styles from "./index.module.css"
import { HiOutlinePencilAlt, HiUserCircle, HiChatAlt } from "react-icons/hi"
import Input from "../Input"
import InputSelect from "../Input/inputSelect"
import { Form } from "react-bootstrap"
import { useState } from "react"
// import TabsCustom from "../Tabs"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { includes } from "lodash"

export default function Schedule (props) {
    const [validated, setValidated] = useState(false)
    const [buttonValue, setButtonValue] = useState()
    const [hours, setHours] = useState([])
    const [date, setDate] = useState(new Date())


    const timers = [
        '07:00',
        '08:00',
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
        '23:00',

     
    ]

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

      function changeDate(date) {
        setDate(date)
        console.log(date)

      }

      function changeButtonValue(e, value){
        e.preventDefault()
        if(!hours.includes(value)){
            hours.push(value)
            console.log(date, hours)

        }
        
      }



return (

        <Container className={`${styles.min_height} bg-light card d-flex`}>
            <div className="d-flex justify-content-center mt-5 flex-wrap">
                <div className="">
                    <Calendar onChange={changeDate} value={date} />
                </div>
                
                <Form className="d-flex flex-wrap m-2 w-25">
                {timers.map((type) => (
                    <div key={type} style={{height:"1rem"}} className=" g-3  ">

                        <button  onClick={(e) => changeButtonValue(e, type)} className="hours.includes(type)? btn btn-primary : btn-default">{type}</button>
                    </div>
                    ))}
                    <div className=" ">
                        <button type="submit" className="btn btn-danger ">Salvar</button>
                    </div>
                    </Form>
                </div>
            
                

            
        </Container>
)}