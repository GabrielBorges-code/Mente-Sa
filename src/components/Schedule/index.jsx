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
import { useEffect } from "react"
import {format} from 'date-fns'
import { useId } from "react"

import {doc, setDoc, addDoc, getDoc, collection, updateDoc} from 'firebase/firestore'
import { db, auth } from "../../services/firebase"; 
import { query, where, getDocs } from "firebase/firestore";



export default function Schedule (props) {
    const [users, setUsers] = useState(JSON.parse(sessionStorage.getItem("@AuthFirebase:user")))
    const [validated, setValidated] = useState(false)
    const [buttonValue, setButtonValue] = useState()
    const [hours, setHours] = useState([])
    const [date, setDate] = useState(new Date())
    const [dateFormat, setDateFormat] = useState() //format(new Date, 'yyyy-MM-dd')
    const [day, setDay]= useState(new Date())


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

    const docData = {
        uidProfessional: users.uid, 
        dateSchedule: format(date, 'yyyy-MM-dd'),
        
        
        hoursAvailable: {
            "08": true,
            "09": true,
            "10": true,
            "11": true,
        }
    }

    
      async function changeDate(date) {
        setDate(date)
        const q = query(collection(db, "Schedulers"), where("dateSchedule", "==", format(date,'yyyy-MM-dd')));
        
        const querySnapshot = await getDocs(q)
        if(querySnapshot){
            console.log(querySnapshot)
        }

        querySnapshot.forEach(async (doc) => {
            console.log(doc.id, ' => ', doc.data())
            const info = await updateDoc(collection(db, "Schedulers", doc.id), docData)
        })

        //const info = await addDoc(collection(db, "Schedulers"), docData)
          
        
        
        //setDateFormat(format(day, 'yyyy-MM-dd'))
        
        
        hours.push(day)
      }

      function changeButtonValue(e, value){
        e.preventDefault()
        
        if(!hours.includes(value)){
            hours.push(value) 
            
            console.log('dentro do change', day, hours)
        }
      }

useEffect(() => {
    console.log('day', format(day, 'yyyy-MM-dd'))
    


}, [hours, dateFormat])

return (

        <Container className={`${styles.min_height} bg-light card d-flex`}>
            <div className="d-flex justify-content-center mt-5 flex-wrap">
                <div className="">
                    <Calendar onChange={changeDate} onClickDay={((value, event)=>  setDay(value))} value={date} />
                </div>
                
                <Form className="d-flex flex-wrap m-2 w-25">
                {timers.map((type) => (
                    <div key={type} style={{height:"1rem"}} className=" g-3  ">

                        <button  onClick={(e) => changeButtonValue(e, type)}  className={`${hours.includes(type) ?  "btn btn-success": "btn btn-primary" }`}>{type}</button>
                    </div>
                    ))}
                    <div className=" ">
                        <button type="submit" className="btn btn-danger ">Salvar</button>
                    </div>
                    </Form>
                </div>
            
                

            
        </Container>
)}