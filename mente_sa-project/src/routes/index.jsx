import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Home from '../views/home';
import Landing from '../views/landing'
import Personal from '../views/professionalRegistration/personal'
import Professional from '../views/professionalRegistration/professional';


export default function Routers() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing/>}/> 
                <Route path ='/registro/professional/about' element={<Personal/>}/>
                <Route path ='/registro/professional/' element={<Professional/>}/>
               
                <Route path="*" element={<Navigate to="/"/>}/>
                
                
                
            </Routes>

        </BrowserRouter>
    )
}