import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Home from '../views/home';
import Landing from '../views/landing'
import ProfessionalRegistration from '../views/professionalRegistration/personalData'

export default function Routers() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing/>}/> 
                <Route path ='/registro/profissional' element={<ProfessionalRegistration/>}/> 
                <Route path="*" element={<Navigate to="/"/>}/>
                
                
                
            </Routes>

        </BrowserRouter>
    )
}