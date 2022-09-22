import { useEffect, useState, createContext, useReducer} from "react"
import {db, app}  from '../services/firebase'
import {GoogleAuthProvider, getAuth,  signInWithEmailAndPassword } from 'firebase/auth'
import {doc, setDoc, getDoc} from 'firebase/firestore'
import AuthReducer from "../reducers/AuthReducer"
import {toast} from "react-hot-toast";
import VerifyErrorCode from "../errors/firebaseErrors" 

const provider = new GoogleAuthProvider()

const INITIAL_STATE={
    currentUser:  null,
    role:sessionStorage.getItem("@AuthFirebase:role") || null,
}

export const AuthGoogleContext = createContext({INITIAL_STATE})

export const AuthGoogleProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [role, setRole] = useState()
    const [formCompleted, setFormCompleted] = useState()
    
    let basicInformations = []
    


    async function getRoleUser(uid){
        const docRef = doc(db, "Users", uid);
        const docSnap = await getDoc(docRef);
        const {professional, formCompleted} = docSnap.data()
        //basicInformations.push(professional)
        //basicInformations.push(formCompleted)
        setFormCompleted(formCompleted)
        const state = professional === 'true'
        console.log('getRoleUser', state)
        setRole(professional)
        return professional
        
    }
    
    

    
    useEffect(() => {
            const loadStoreAuth = () => {
                const sessionToken = sessionStorage.getItem("@AuthFirebase:token")
                const sessionUser = sessionStorage.getItem("@AuthFirebase:user")
                const sessionRoleUser = sessionStorage.getItem("@AuthFirebase:role")
                console.log('estou sendo carregado',  sessionRoleUser)

            if(sessionToken) {
                setUser(sessionUser)
                dispatch({type: "LOGIN", payload:sessionUser})
                dispatch({type: "LOGIN", RoleAttr:sessionRoleUser})
                
                setRole(sessionRoleUser)
            }
            loadStoreAuth()
            if((formCompleted!= null) && (role != null)){
                console.log('Role', role)
                console.log('Form', formCompleted)
                //sendUrl()
            }

            console.log('form', formCompleted, role)
        }

        // loadStoreAuth()
        
        
        
    },[state.role, role, state.currentUser, formCompleted])

    const logout = () => {
        const sessionToken = sessionStorage.removeItem("@AuthFirebase:token")
        const sessionUser = sessionStorage.removeItem("@AuthFirebase:user")
        const sessionRoleUser = sessionStorage.removeItem("@AuthFirebase:role")
        const sessionStatus = sessionStorage.removeItem("@Land:status")
    }


    const signInGoogle =  async (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then( async (userCredential) => {             
                const user = userCredential.user;
                const token = userCredential.user['stsTokenManager'].accessToken
                const roles = await getRoleUser(user.uid)
                dispatch({type: "LOGIN", RoleAttr:roles})
                
                //console.log('InsideLog', roles)
                //setUser(user)
                //setRole(roles)
                
                sessionStorage.setItem("@AuthFirebase:token", token)
                sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user))
                sessionStorage.setItem("@AuthFirebase:role", JSON.stringify(roles))
                //sessionStorage.setItem("@AuthFirebase:basic", JSON.stringify(basicInformations))
                
                
                
            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                
                
                let errorMessage = VerifyErrorCode(errorCode);
                    if (errorMessage == null) {
                        errorMessage = error.message;
                        toast.error(errorCode,':',errorMessage)
                    }
                    
                    console.log(errorMessage);
                    toast.error(errorMessage)
                
            });

    }
    return (
        <AuthGoogleContext.Provider
        value={{ signInGoogle, logout,
        currentUser: state.currentUser, 
        signed: !!user, 
        role1: role,
        formComplete: formCompleted,
        dispatch  
        }}>

            {children}

        </AuthGoogleContext.Provider>
    )

}