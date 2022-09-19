import React, { useContext, useEffect} from "react"
import { AuthGoogleContext, AuthGoogleProvider } from "../../contexts/authGoogle"//"../contexts/authGoogle"

export default function Forbidden() {
    const {signInGoogle, currentUser, role1, signed} = useContext(AuthGoogleContext)

    return (
        <div className="bg-dark text-white py-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-2 text-center">
                            <p><i className="fa fa-exclamation-triangle fa-5x"></i><br/>Status Code: 403</p>
                    </div>
                    <div className="col-md-10">
                            <h3>OPPSSS!!!! Sorry...</h3>
                            <p>Sorry, your access is refused due to security reasons of our server and also our sensitive data.<br/>Please go back to the previous page to continue browsing.</p>
                            
                            <button className='btn btn-success'> Voltar </button>
                            

                            <button className='btn btn-danger'> LogOut </button>
                    </div>
                </div>
            </div>

            <div id="footer" className="text-center">
                Hak Cipta 2018, Garuda Cyber Technologies
            </div>
        </div>

    )
}


