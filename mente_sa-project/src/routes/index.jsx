import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Landing from '../views/landing';

import PersonalProfessional from '../views/professionalRegistration/personal';
import Professional from '../views/professionalRegistration/professional';
import Enterprise from '../views/professionalRegistration/enterprise';

import PersonalUser from '../views/personalRegistration/personal';
import ChooseProfessional from '../views/personalRegistration/chooseProfessional';
import Scheduling from '../views/personalRegistration/scheduling';

export default function Routers() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing/>}/> 
                <Route path ='/registro/profissional/' element={<PersonalProfessional/>}/>
                <Route path ='/registro/profissional/sobre' element={<Professional/>}/>
                <Route path ='/registro/profissional/empresa' element={<Enterprise/>}/>

                <Route path ='/registro/usuario/' element={<PersonalUser/>}/>
                <Route path ='/registro/usuario/escolha-profissional' element={<ChooseProfessional/>}/>
                <Route path ='/registro/usuario/agendamento' element={<Scheduling/>}/>
               
                <Route path="*" element={<Navigate to="/"/>}/>
                
            </Routes>

        </BrowserRouter>
    )
}