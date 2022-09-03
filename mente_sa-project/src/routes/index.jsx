import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Home from '../views/home';
import ProfessionalRegistration from '../views/professionalRegistration'

export default function Routers() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/> 
                <Route path='/registro-profissional' element={<ProfessionalRegistration/>}/> 
                <Route path="*" element={<Navigate to="/"/>}/>
                
                <Route path='/' element={<Landing/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>

        </BrowserRouter>
    )
}