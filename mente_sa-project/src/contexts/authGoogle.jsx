import { createContext } from "react"

import {db, app}  from '../services/firebase'
import {GoogleAuthProvider, getAuth,  signInWithEmailAndPassword } from 'firebase/auth'
import { useEffect, useState } from "react"
import {doc, setDoc, getDoc} from 'firebase/firestore'

//EFETUAR O LOGIN
//VERIFICAR O FIRESTORE E SE EXISTE UM USUÁRIO CADASTRADO
//SE EXISTIR FAÇA ALGO
//SENÃO... CADASTRAR.

const provider = new GoogleAuthProvider()

export const AuthGoogleContext = createContext({})

export const AuthGoogleProvider = ({children}) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [role, setRole] = useState(null)


    async function getRoleUser(uid){
        const docRef = doc(db, "Users", uid);
        const docSnap = await getDoc(docRef);
        const {professional} = docSnap.data()
        return professional
    }

    useEffect(() => {
            const loadStoreAuth = () => {
            const sessionToken = sessionStorage.getItem("@AuthFirebase:token")
            const sessionUser = sessionStorage.getItem("@AuthFirebase:user")
            if(sessionToken && sessionUser) {
                setUser(sessionUser)
            }
        }
        
        
    },[])


    const signInGoogle =  (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then( async (userCredential) => {             
                const user = userCredential.user;
                const token = userCredential.user['stsTokenManager'].accessToken
                const roles = await getRoleUser(user.uid)
                setRole(roles)
                console.log('ctx', roles)

                sessionStorage.setItem("@AuthFirebase:token", token)
                sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user))
                return true
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });

    }

     const signInWithEmailPasswordGoogle = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result)
                const token = credential.accessToken
                const user = result.user;
                setUser(user)
                console.log(user)
                sessionStorage.setItem("@AuthFirebase:token", token)
                sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user))
                
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.errorMessage
                const email = error.email
                const credential = GoogleAuthProvider.credentialFromError(error)
            });
    }


    return (
        <AuthGoogleContext.Provider
        value={{ signInGoogle, signInWithEmailPasswordGoogle, signed: !!user, professional: role }}>
            {children}
        </AuthGoogleContext.Provider>
    )

}