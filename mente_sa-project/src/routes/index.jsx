import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//VIEWS
import Dashboard from '../views/dashboard/'
import Landing from '../views/landing'

export default function Routers() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing/>}/> 
                
            </Routes>
        </BrowserRouter>
    )
}