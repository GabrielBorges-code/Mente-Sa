import { useEffect, useState, createContext, useReducer} from "react"
import {db, app}  from '../services/firebase'
import {GoogleAuthProvider, getAuth,  signInWithEmailAndPassword } from 'firebase/auth'
import {doc, setDoc, getDoc} from 'firebase/firestore'
import AuthReducer from "../reducers/AuthReducer"

const provider = new GoogleAuthProvider()

const INITIAL_STATE={
    currentUser:null,
    role:null,
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
                console.log('estou sendo carregado')

            if(sessionToken && sessionUser) {
                setUser(sessionUser)
                dispatch({type: "LOGIN", currentUser:user})
                setRole(sessionRoleUser)
            }
        }

        // loadStoreAuth()
        
        console.log('useef', state.role, role)
        
    },[state.role, role])


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
                sessionStorage.setItem("@AuthFirebase:role", JSON.stringify(role))
                
                
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
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