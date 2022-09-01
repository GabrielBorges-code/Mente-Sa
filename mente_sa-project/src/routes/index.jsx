import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from '../components/Header';
import Copyright from '../components/Footer';

//VIEWS
import Dashboard from '../views/Dashboard';
import Professional from '../views/Professionals';

export default function Routers() {
    return (

        <BrowserRouter>
            <Header />
            
            <Routes>
                <Route path='/' element={<Dashboard/>}/> 
                <Route path='/professionals' element={<Professional/>}/> 
                <Route path='/patients' element={<Professional/>}/> 
                <Route path='/sessions' element={<Professional/>}/> 
                <Route path='/integrations' element={<Professional/>}/> 
                
            </Routes>

            <Copyright sx={{ pt: 4 }} />
        </BrowserRouter>
    )
}