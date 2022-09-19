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
    let roleProfessional


    async function getRoleUser(uid){
        const docRef = doc(db, "Users", uid);
        const docSnap = await getDoc(docRef);
        const {professional} = docSnap.data()
        roleProfessional = professional
        
        console.log('teste', roleProfessional)
        return professional
    }
    function loadStore(){
                const sessionToken = sessionStorage.getItem("@AuthFirebase:token")
                const sessionUser = sessionStorage.getItem("@AuthFirebase:user")
                const sessionRoleUser = sessionStorage.getItem("@AuthFirebase:role")

            if(sessionToken && sessionUser) {
                setUser(sessionUser)
                setRole(sessionRoleUser)
            }
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
        }

        // loadStoreAuth()
        
        console.log('useef', state.role, state.currentUser)
        
    },[state.role, role, state.currentUser])

    const logout = () => {
        const sessionToken = sessionStorage.removeItem("@AuthFirebase:token")
        const sessionUser = sessionStorage.removeItem("@AuthFirebase:user")
        const sessionRoleUser = sessionStorage.removeItem("@AuthFirebase:role")
    }


    const signInGoogle =  async (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then( async (userCredential) => {             
                const user = userCredential.user;
                const token = userCredential.user['stsTokenManager'].accessToken
                const roles = await getRoleUser(user.uid)
                dispatch({type: "LOGIN", RoleAttr:roles})
                
                console.log('log', state.role)
                setUser(user)
                setRole(roles)
                
                sessionStorage.setItem("@AuthFirebase:token", token)
                sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user))
                sessionStorage.setItem("@AuthFirebase:role", JSON.stringify(roles))
                
                
                
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
        value={{ signInGoogle, 
        currentUser: state.currentUser, 
        signed: !!user, 
        role1: state.role, 
        dispatch  
        }}>

            {children}

        </AuthGoogleContext.Provider>
    )

}