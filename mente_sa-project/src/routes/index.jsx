import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Views from '../views/home'

export default function Routers() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Views/>}/> 
                {/* <Route path="*" element={<Navigate to="/"/>}/> */}
                
            </Routes>
        </BrowserRouter>
    )
}