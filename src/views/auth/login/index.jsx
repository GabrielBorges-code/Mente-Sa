import { firebase, auth } from '../../../services/firebase'


export default function Login() {
    const handleClickButtonLogin = async() => {

        const provider = new firebase.auth.GoogleAuthProvider()
        const result = await auth.signInWithPopup(provider)
        console.log(result)

    }


        return (
            <>
            <aside>
                <h1>Teste</h1>
            </aside>
            <main>
                <button onClick={handleClickButtonLogin}>teste Login</button>
            </main>

            </>
        )
}
 