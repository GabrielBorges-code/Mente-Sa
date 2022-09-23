import React, { useContext, useEffect} from "react"
import { AuthGoogleContext, AuthGoogleProvider } from "../contexts/authGoogle"
import {BrowserRouter, Routes, Route, Navigate, Outlet} from 'react-router-dom';

import Login from '../views/auth/login';

import Home from '../views/home';
import Landing from '../views/landing'
import Personal from '../views/professional/registration/personal'
import Professional from '../views/professional/registration/professional';
import Enterprise from '../views/professional/registration/enterprise';
import ProfileProfessional from '../views/professional/profile';
import Registration from '../views/auth/registration';
import ProfileUser from '../views/personal/profile';
import PersonalUser from '../views/personal/personal';
import ChooseProfessional from '../views/personal/chooseProfessional';
//import Scheduling from '../views/personal/scheduling';



import Forbidden from "../views/forbidden";
import { useState } from "react";

export default function Routers() {

    const {signInGoogle, currentUser, role1, signed} = useContext(AuthGoogleContext)
    let value = sessionStorage.getItem("@AuthFirebase:role")
    // //const [flag, setFlag] = useState(sessionStorage.getItem("@AuthFirebase:role"))
    // const RequireAuthProfessional = () => {
    //     if(role1){
    //         return <Outlet />
    //     }else{
    //         return <Navigate to="/forbidden"/>
    //     } 
    // }

    // const RequireAuthPersonal = () => {
    //     if(role1===false){
    //         return <Outlet />
    //     }else{
    //         return <Navigate to="/forbidden"/>
    //     }  
    // }

    useEffect(() => {
        if(role1 != null){
            console.log('user', currentUser)
            console.log('role', role1)
            // let xBol = role1==='true' 
            // console.log('test', xBol)            
        }
    })


    return (
        <BrowserRouter>
            <Routes>

                {/* PUBLIC ROUTE */}
                <Route path='/' element={<Landing/>}/>
                <Route path ='/registro' element={<Registration/>}/>
                <Route path ='/login' element={<Login/>}/>
                <Route path ='/forbidden' element={<Forbidden/>}/>
                

                
                {/* PACIENT PRIVATE ROUTE */}
                <Route path ='/registro/usuario/' element={<PersonalUser/>}/>
                <Route path ='/usuario/perfil' element={<ProfileUser/>}/>
                <Route path ='/usuario/escolha-profissional' element={<ChooseProfessional/>}/>
                {/* <Route path ='/usuario/agendamento' element={<Scheduling/>}/> */}

                {/* <Route path ='/usuario/perfil' element={<RequireAuthPersonal/>}>
                    <Route path='/usuario/perfil' element={<ProfileUser /> } />
                </Route>
                
                <Route path ='/registro/usuario/' element={<RequireAuthPersonal/>}>
                    <Route path ='/registro/usuario/' element={<PersonalUser/>}/>
                </Route>

                <Route path ='/registro/usuario/escolha-profissional' element={<RequireAuthPersonal/>}>
                    <Route path ='/registro/usuario/escolha-profissional' element={<ChooseProfessional/>}/>
                </Route>

                <Route path ='/registro/usuario/agendamento' element={<RequireAuthPersonal/>}>
                    <Route path ='/registro/usuario/agendamento' element={<Scheduling/>}/>
                </Route> */}
                
               
                {/* <Route path="*" element={<Navigate to="/"/>}/> */}
                
                {/* PROFESSIONAL PRIVATE ROUTE */}
                <Route path='/registro/profissional/' element={<Personal /> } />
                <Route path='/registro/profissional/sobre' element={<Professional /> } />
                <Route path ='/registro/profissional/empresa' element={<Enterprise/>}/>
                <Route path ='/profile' element={<ProfileProfessional/>}/>




                {/* <Route path ='/registro/profissional/' element={<RequireAuthProfessional/>}>
                    <Route path='/registro/profissional/' element={<Personal /> } />
                </Route>
                <Route path ='/registro/profissional/sobre' element={<RequireAuthProfessional/>}>
                    <Route path='/registro/profissional/sobre' element={<Professional /> } />
                </Route>
                <Route path ='/registro/profissional/empresa' element={<RequireAuthProfessional/>}>
                    <Route path ='/registro/profissional/empresa' element={<Enterprise/>}/>
                </Route>
                <Route path ='/profile' element={<RequireAuthProfessional/>}>
                    <Route path ='/profile' element={<ProfileProfessional/>}/>
                </Route> */}


                
            </Routes>

        </BrowserRouter>
    )
}