import React, { useContext } from "react"
import { AuthGoogleContext, AuthGoogleProvider } from "../../../contexts/authGoogle"
import { SiGoogle } from "react-icons/si";
import Footer from "../../../components/Footer";
import { useState } from "react";
import {Link, Navigate, useNavigate} from 'react-router-dom'
import Input from "../../../components/Input";
import { db, auth } from "../../../services/firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,  } from "firebase/auth";
import {doc, setDoc} from 'firebase/firestore'
import {toast} from "react-hot-toast";





export default function Registration() {

        const navigate = useNavigate()
        const {signInGoogle} = useContext(AuthGoogleContext)
        
        const [error, setError] = useState(false)
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const [repeatPassword, setRepeatPassword] = useState("")

        async function handleAddUserRole(){
            
            return; 
        }

        async function registerRole(uid) {
            const status = sessionStorage.getItem("@Land:status")
            console.log(email, status)
            const info = await setDoc(doc(db, "Users", uid),{
                email: email,
                professional: status,
                
            })
        }
    
        async function handleRegistration(e){
            e.preventDefault()
            if(password != repeatPassword){
                setError('As senhas não estão iguais')
                console.log('oiadfs')
                toast.error('As senhas não estão iguais')
            }else{

                // const register = await createWithEmailPasswordGoogle(email, password)
                
                createUserWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    const user = userCredential.user;
                    registerRole(user.uid)
                    toast.success('Usuário registrado com sucesso')
                    navigate ('/login')
                    
                     
                })
                .catch((error) => {
                    setError(true)
                    toast.error(error.message)
            });

            }            
        }  

        return (
            <>
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        className="img-fluid" alt="Sample image"/>
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={handleRegistration}>
                        <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                            <p className="lead fw-normal mb-0 me-3">Já sou usuário </p>
                            <button onClick={()=>{signInGoogle()}} type="button" className="btn btn-danger btn-floating mx-1">
                            <i>Login</i>
                            </button>

                            
                        </div>

                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-3 mb-0">Ou</p>
                        </div>

                        {/* <!-- Email input --> */}
                        <div className="row">
                            <Input type={'text'} typeForm={'form-control'} setClassCol={'col-sm'} value={email} setValue={setEmail} label={'Email'}/>
                        </div>
                        
                        <div className="row">
                            <Input type={'password'} typeForm={'form-control'} setClassCol={'col-sm'} value={password} setValue={setPassword} label={'Senha'}/>
                        </div>
                        <div className="row">
                            <Input type={'password'} typeForm={'form-control'} setClassCol={'col-sm'} value={repeatPassword} setValue={setRepeatPassword} label={'Repetir Senha'}/>
                        </div>
 
                        <div className="d-flex justify-content-between align-items-center">
                            {/* <!-- Checkbox --> */}
                            <div className="form-check mb-0">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                            <label className="form-check-label" >
                                Eu aceito o termo de uso 
                            </label>
                            <a href="#!" className="text-body">termo de uso</a>
                            </div>
                            <a href="#!" className="text-body">Forgot password?</a>
                        </div>

                        <div className="text-center text-lg-start mt-4 pt-2">
                            <button  type="submit" className="btn btn-primary btn-lg"
                                style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}>Cadastrar</button>
                            {error && <p className="small fw-bold mt-2 pt-1 mb-0">{error} </p>}
                        </div>

                        </form>
                    </div>
                    </div>
                </div>
                <div>
                    <Footer/>
                    
                </div>
                </section>

            </>
        )
}
