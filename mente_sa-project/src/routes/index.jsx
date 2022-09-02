import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import Home from '../views/home'
import Landing from '../views/landing'

export default function Routers() {
    return (

        <BrowserRouter>
            <Routes>
                
                <Route path='/' element={<Landing/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </BrowserRouter>
    )
}