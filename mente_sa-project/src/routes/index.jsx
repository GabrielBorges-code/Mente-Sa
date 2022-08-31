import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//VIEWS
import Dashboard from '../views/dashboard/'

export default function Routers() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard/>}/> 
                
            </Routes>
        </BrowserRouter>
    )
}