import React, { useContext, useEffect} from "react"
import { AuthGoogleContext, AuthGoogleProvider } from "../../../contexts/authGoogle" 

export default function LogOutScreen() {
    const {signInGoogle, currentUser, role1, signed} = useContext(AuthGoogleContext)

    return (
        <div className="bg-dark text-white py-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-2 text-center">
                            <p><i className="fa fa-exclamation-triangle fa-5x"></i><br/>Status Code: 403</p>
                    </div>
                    <div className="col-md-10">
                            <h3>Obrigado por usar a nossa ferramenta</h3>
                            <button className='btn btn-success'> Ir para Home </button>
                            <button className='btn btn-danger'> Login </button>
                    </div>
                </div>
            </div>

            <div id="footer" className="text-center">
                Hak Cipta 2018, Garuda Cyber Technologies
            </div>
        </div>

    )
}


