import { createContext } from "react"

import {app}  from '../services/firebase'
import {GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { useEffect, useState } from "react"

//EFETUAR O LOGIN
//VERIFICAR O FIRESTORE E SE EXISTE UM USUÁRIO CADASTRADO
//SE EXISTIR FAÇA ALGO
//SENÃO... CADASTRAR.

const provider = new GoogleAuthProvider()

export const AuthGoogleContext = createContext({})

export const AuthGoogleProvider = ({children}) => {
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [mail, setMail] = useState(null)
    const [pass, setPass] = useState(null)
//douglas, gabriel fernando maria mariana dgfmm230922...

    useEffect(() => {
        
        const loadStoreAuth = () => {
            const sessionToken = sessionStorage.getItem("@AuthFirebase:token")
            const sessionUser = sessionStorage.getItem("@AuthFirebase:user")
            if(sessionToken && sessionUser) {
                setUser(sessionUser)
            }
        }
    },[mail])


    const signInGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken
            const user = result.user
            setUser(user)
            sessionStorage.setItem("@AuthFirebase:token", token)
            sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user))

        }). catch((error) => {
            const errorCode = error.code
            const errorMessage = error.errorMessage
            const email = error.email
            const credential = GoogleAuthProvider.credentialFromError(error)
        })
    }

    const createWithEmailPasswordGoogle = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken
            const users = result.user
            setUser(users)
            console.log(user)
            return users
            // sessionStorage.setItem("@AuthFirebase:token", token)
            // sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user))

        }). catch((error) => {
            const errorCode = error.code
            const errorMessage = error.errorMessage
            const email = error.email
            const credential = GoogleAuthProvider.credentialFromError(error)
        })
    }


    return (
        <AuthGoogleContext.Provider
        value={{ signInGoogle, createWithEmailPasswordGoogle, signed: !!user }}>
            {children}
        </AuthGoogleContext.Provider>
    )

}