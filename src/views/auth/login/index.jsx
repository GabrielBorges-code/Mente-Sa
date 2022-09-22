import React, { useContext } from "react"
import { AuthGoogleContext,} from "../../../contexts/authGoogle"
import Footer from "../../../components/Footer";
import { useState } from "react";
import Input from "../../../components/Input";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {toast} from "react-hot-toast";


export default function Login() {
        let navigate = useNavigate()
        const [users, setUsers] = useState(JSON.parse(sessionStorage.getItem("@AuthFirebase:user")))
        const {signInGoogle, role1, signed, formComplete} = useContext(AuthGoogleContext)
        const [error, setError] = useState(false)
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        
        
        
        
        //handle login and 
        async function handleLogin(e){
            e.preventDefault()
            const logIn = await signInGoogle(email, password)
        }

        function sendUrl(){
            
            if(role1 === 'true'){
                if(formComplete){
                    console.log('role1 => ', role1)
                    navigate('/profile')
                }else{
                    navigate('/registro/profissional/')
                }
                
            }else{
                if(formComplete){
                    console.log('else -> if formComplete', typeof(role1), formComplete);
                    navigate('/usuario/perfil')
                }else{
                    console.log('else -> if formComplete', typeof(role1), formComplete);
                    navigate('/registro/usuario/')

                }
                
                
            }
        }

        useEffect(() => {
            console.log('igm', role1)
            if(role1!= null){
                console.log('Role inside ', role1)
                console.log('Form inside', formComplete)
                sendUrl()
            }
        }, [ formComplete])

        return (
            <>
            <section className="">
                <div className="py-5 my-5 container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        className="img-fluid" alt="Sample image"/>
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={handleLogin}>
                        <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                            <p className="lead fw-normal mb-0 me-3">Não sou cadastrado</p>
                            <button onClick={()=>{signInGoogle()}} type="button" className="btn btn-primary btn-floating mx-1">
                            <i> Cadastrar</i>
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
                            <a href="#!" className="text-body">Esqueceu a senha?</a>
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
