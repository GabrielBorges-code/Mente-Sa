import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Home from '../views/home';
import Landing from '../views/landing'
import Personal from '../views/professional/registration/personal'
import Professional from '../views/professional/registration/professional';
import Enterprise from '../views/professional/registration/enterprise';
import ProfileProfessional from '../views/professional/profile';


export default function Routers() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing/>}/> 
                <Route path ='/registro/profissional/' element={<Personal/>}/>
                <Route path ='/registro/profissional/sobre' element={<Professional/>}/>
                <Route path ='/registro/profissional/empresa' element={<Enterprise/>}/>
                <Route path ='/profile' element={<ProfileProfessional/>}/>
               
                <Route path="*" element={<Navigate to="/"/>}/>
                
                
                
            </Routes>

        </BrowserRouter>
    )
}