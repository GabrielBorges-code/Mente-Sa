import React, { useContext } from "react"
import { AuthGoogleContext, AuthGoogleProvider } from "../../../contexts/authGoogle"
import { SiGoogle } from "react-icons/si";
import Footer from "../../../components/Footer";
import { useState } from "react";
import Input from "../../../components/Input";
import { db, auth } from "../../../services/firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {doc, setDoc} from 'firebase/firestore'


export default function Login() {
        const {signInGoogle, signInData} = useContext(AuthGoogleContext)
        
        const [error, setError] = useState(false)
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")

        async function handleAddUserRole(){
            
            await setDoc(doc(db, "Users", email),{
                name: "Kevin Fraga",
                role: "professional",
            })
        }
    
        async function handleLogin(e){
            e.preventDefault()
            console.log(email, password)

            
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                setError(true)
            });

            
            
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
                        <form onSubmit={handleLogin}>
                        <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                            <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                            <button onClick={()=>{signInGoogle()}} type="button" className="btn btn-danger btn-floating mx-1">
                            <i><SiGoogle/> Entrar com Google</i>
                            </button>

                            <button onClick={()=>{handleAddUserRole()}} type="button" className="btn btn-danger btn-floating mx-1">
                            <i><SiGoogle/> Test com Firestore</i>
                            </button>
                        </div>

                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-3 mb-0">Or</p>
                        </div>

                        {/* <!-- Email input --> */}
                        <div className="row">
                            <Input type={'text'} typeForm={'form-control'} setClassCol={'col-sm'} value={email} setValue={setEmail} label={'Email'}/>
                        </div>
                        <div className="row">
                            <Input type={'password'} typeForm={'form-control'} setClassCol={'col-sm'} value={password} setValue={setPassword} label={'Password'}/>
                        </div>
 
                        <div className="d-flex justify-content-between align-items-center">
                            {/* <!-- Checkbox --> */}
                            <div className="form-check mb-0">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                            <label className="form-check-label" >
                                Remember me
                            </label>
                            </div>
                            <a href="#!" className="text-body">Forgot password?</a>
                        </div>

                        <div className="text-center text-lg-start mt-4 pt-2">
                            <button  type="submit" className="btn btn-primary btn-lg"
                                style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}>Login</button>
                            {error && <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                className="link-danger">Register</a></p>}
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
