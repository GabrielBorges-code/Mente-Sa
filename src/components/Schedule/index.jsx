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
import { format } from 'date-fns'
import { useId } from "react"

import { doc, setDoc, addDoc, getDoc, collection, updateDoc } from 'firebase/firestore'
import { db, auth } from "../../services/firebase";
import { query, where, getDocs } from "firebase/firestore";



export default function Schedule(props) {
    const [users, setUsers] = useState(JSON.parse(sessionStorage.getItem("@AuthFirebase:user")))
    const [validated, setValidated] = useState(false)
    const [buttonValue, setButtonValue] = useState()
    const [hours, setHours] = useState({})
    const [newArrayObj, setNewArrayObj] = useState({})
    const [date, setDate] = useState(new Date())
    const [dateFormat, setDateFormat] = useState() //format(new Date, 'yyyy-MM-dd')
    const [day, setDay] = useState(new Date())
    let objectKeys = []


    const timers = [
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',


    ]

    const docData = {
        uidProfessional: users.uid,
        dateSchedule: format(day, 'yyyy-MM-dd'),
    }

    let hoursAvailable = {} // "08": true,
    let newArrayObject = {} 


    async function saveDate(e) {
        e.preventDefault()
        let flag=null
        let fileId = null
        console.log(day)
        console.log('testeSaveDate', newArrayObject)

        const q = query(collection(db, "Schedulers"), where("uidProfessional", "==", users.uid));
        //const q = query(collection(db, "Schedulers"), where("uidProfessional", "==", "users.uid"), where("dateSchedule", "==", date));
        
        const querySnapshot = await getDocs(q)

        if (querySnapshot.empty === true) {
            console.log("tamnho zero");
            const info = await addDoc(collection(db, "Schedulers"), newArrayObject)
            
        } else {
            querySnapshot.forEach(async (file) => {
                const dateSchedule = file.data().dateSchedule
                const dFormated = format(day, 'yyyy-MM-dd')
                console.log('dateSchedule', dateSchedule, 'dFormated', dFormated)
                const test = [dateSchedule].includes(dFormated)
                

                

                if (test) {
                    console.log("O dado retornou => ", test)
                    console.log(file.id)

                    flag = true
                    fileId =file.id
                    //const info = await updateDoc(doc(db, "Schedulers", file.id), newArrayObject)

                } 
                if(test === false) {
                    
                    console.log("O dado retornou => ", test)
                    
                    // const newSchedulerRef = doc(collection(db, "Schedulers"))
                    // const infoS = await setDoc(newSchedulerRef, newArrayObject)
                    
                }
            })
            
        }
        if(flag===true){
            console.log('lets update => ', fileId)
            const info = await updateDoc(doc(db, "Schedulers", fileId), newArrayObject)
            
        }else{
            console.log('lets create')
            const newSchedulerRef = doc(collection(db, "Schedulers"))
            const infoS = await setDoc(newSchedulerRef, newArrayObject)
        }


        
    }




    async function changeDate() {
        setDate(day)
        const q = query(collection(db, "Schedulers"), where("uidProfessional", "==", users.uid));
        //const q = query(collection(db, "Schedulers"), where("uidProfessional", "==", "users.uid"), where("dateSchedule", "==", date));
        //const q2 = query(collection(db, "Schedulers"), where('dateSchedule', '==', date))

        const querySnapshot = await getDocs(q)

        if (querySnapshot.empty === true) {
            console.log("tamnho zero");
            const info = await addDoc(collection(db, "Schedulers"), docData)
        } else {
            querySnapshot.forEach(async (file) => {
                const dateSchedule = file.data().dateSchedule
                const dFormated = format(date, 'yyyy-MM-dd')
                console.log('dateSchedule', dateSchedule, 'dFormated', dFormated)
                const test = [dateSchedule].includes(dFormated)

                if (test) {
                    console.log("O dado retornou => ", test);
                    console.log(file.id)

                    const info = await updateDoc(doc(db, "Schedulers", file.id), docData)

                } else {
                    console.log("O dado retornou => ", test);
                    const newSchedulerRef = doc(collection(db, "Schedulers"));
                    const infoS = await setDoc(newSchedulerRef, docData);
                    //const info = await setDoc(doc(collection((db, "Schedulers"), docData)))
                }
            })
        }
    }

    function changeButtonValue(e, value) {
        e.preventDefault()
        
        //hoursAvailable.push({'oi': true})

        hoursAvailable[value] = true
        console.log(hoursAvailable)
        newArrayObject = { ...docData, "hoursAvailable": { ...hoursAvailable } }
        console.log('estou no new ', newArrayObject)
        //setNewArrayObj(newArrayObject)


    }

    useEffect(() => {
        // console.log('day', format(day, 'yyyy-MM-dd'))
        // console.log('estou no docData', Object.keys(docData))

        // Object.keys(docData).forEach(key => {
        //     let value = docData[key]
        //     console.log(`${key}: ${value}`)
        //     objectKeys.push(value)
        // })
        // console.log("objkeys",objectKeys)
        console.log('sou o newArray', newArrayObj)




    }, [day, hours, dateFormat, newArrayObj])

    return (

        <Container className={`${styles.min_height} bg-light card d-flex`}>
            <div className="d-flex justify-content-center mt-5 flex-wrap">
                <div className="">
                    <Calendar onChange={((value, event) => setDate(value))} onClickDay={((value, event) => setDay(value))} value={date} />
                </div>

                <Form onSubmit={saveDate} className="d-flex flex-wrap m-2 w-25">
                    {timers.map((type) => (
                        <div key={type} style={{ height: "1rem" }} className=" g-3  ">

                            <button onClick={(e) => changeButtonValue(e, type)} className="btn btn-primary" >{type}:00</button>
                        </div>
                    ))}
                    <div className=" ">
                        <button type="submit" className="btn btn-danger ">Salvar</button>
                    </div>
                </Form>
            </div>




        </Container>
    )
}