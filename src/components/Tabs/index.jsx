import React from 'react'
import {Container, Row, Tabs, Tab, Form, Nav, NavDropdown } from 'react-bootstrap'
import styles from "./index.module.css"
import Input from '../Input'


export default function TabsCustom({value}) {
    const handleSelect = (eventKey) => {
        console.log(eventKey)
    };

    // const Atendimentos = {
    //     uid : {
    //         sessions:{
    //             '14/02/16': {
    //                 '08:00': {
    //                 uidProfessional: 'afopishdfoias',
    //                 hourScheduled: '08',
    //                 dateOfSession: '0280940',
    //                 value: '38',
    //                 timeOfSession:'50',
    //                 status: ['CONCLUDED', 'PENDING', 'CANCELED'],
    //                 anamnese: {
    //                 }
    //             },
    //             '14/02/16': {
    //                 uidProfessional: 'afopishdfoias',
    //                 hourScheduled: '08',
    //                 dateOfSession: '0280940',
    //                 value: '38',
    //                 timeOfSession:'50',
    //                 status: ['CONCLUDED', 'PENDING', 'CANCELED'],
    //                 anamnese: {
                        

    //                 }
    //             }
    //         },
    //         hoursNotAvailable:
    //         {
    //             'hoursLists':
    //             [{ 
    //                 monday: 
    //                 {
    //                     '08:00':true,
    //                     '09:00':false,
    //                     '10:00':false,
    //                     '11:00':false,
    //                     '12:00':false,
    //                     '13:00':true,
    //                     '14:00':true,
    //                     '15:00':true,
    //                     '16:00':false,
    //                     '17:00':false,
    //                     '18:00':false,
    //                     '19:00':false,
    //                 },
    //                 tuesday: 
    //                 {
    //                     '08:00':false,
    //                     '09:00':false,
    //                     '10:00':false,
    //                     '11:00':false,
    //                     '12:00':false,
    //                     '13:00':true,
    //                     '14:00':true,
    //                     '15:00':true,
    //                     '16:00':false,
    //                     '17:00':false,
    //                     '18:00':false,
    //                     '19:00':false,
    //                 },
    //                 wednesday: 
    //                 {
    //                     '08:00':false,
    //                     '09:00':false,
    //                     '10:00':false,
    //                     '11:00':false,
    //                     '12:00':false,
    //                     '13:00':true,
    //                     '14:00':true,
    //                     '15:00':true,
    //                     '16:00':false,
    //                     '17:00':false,
    //                     '18:00':false,
    //                     '19:00':false,
    //                 },
    //                 thursday: 
    //                 {
    //                     '08:00':UID,
    //                     '09:00':null,
    //                     '10:00':null,
    //                     '11:00':null,
    //                     '12:00':null,
    //                     '13:00':null,
    //                     '14:00':true,
    //                     '15:00':true,
    //                     '16:00':false,
    //                     '17:00':false,
    //                     '18:00':false,
    //                     '19:00':false,
    //                 },
    //                 friday: 
    //                 {
    //                     '08:00':false,
    //                     '09:00':false,
    //                     '10:00':false,
    //                     '11:00':false,
    //                     '12:00':false,
    //                     '13:00':true,
    //                     '14:00':true,
    //                     '15:00':true,
    //                     '16:00':false,
    //                     '17:00':false,
    //                     '18:00':false,
    //                     '19:00':false,
    //                 }
    //             }]
    //         }
    //     },
    // }

    // const userSession = {
    //     uid : {
    //         uidProfessional: 'afopishdfoias',
    //         hourScheduled: '08',
    //         dateOfSession: '0280940',
    //         value: '38',
    //         timeOfSession:'50',
    //         status: ['CONCLUDED', 'PENDING', 'CANCELED']

    //     }
    // }


    const hours = [
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
    ]
  return (
    
    <Container className='py-4'>
        <h5>Determine os horários para atendimento</h5>
        <Row>
        

            <Input type="date"/>
            <Form>
                {hours.map((type) => (
                    <div key={type} className="w-25 mb-3 w-25">
                        <button>{type}</button>
                    
                    </div>
                    ))}
                    </Form>
            
            
        </Row>

    </Container>
  )
}
