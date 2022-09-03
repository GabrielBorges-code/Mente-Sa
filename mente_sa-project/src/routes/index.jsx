import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Landing from '../views/landing';
import Enterprise from '../views/register/enterprise';
import Personal from '../views/register/personal';
import Professional from '../views/register/professional';


export default function Routers() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing/>}/> 
                <Route path ='/registro/profissional/' element={<Personal/>}/>
                <Route path ='/registro/profissional/sobre' element={<Professional/>}/>
                <Route path ='/registro/profissional/empresa' element={<Enterprise/>}/>
               
                <Route path="*" element={<Navigate to="/"/>}/>
                
                
                
            </Routes>

        </BrowserRouter>
    )
}