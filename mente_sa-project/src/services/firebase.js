import firebase from 'firebase/app'
import "firebase/auth"
// import {getAnalytics} from 'firebase/analytics'

const firebaseConfig = {
    apiKey: "AIzaSyD6Lpe5uS-6nBC9rne3ovFDmzhmONIEEVI",
    authDomain: "mente-sa-4d262.firebaseapp.com",
    projectId: "mente-sa-4d262",
    storageBucket: "mente-sa-4d262.appspot.com",
    messagingSenderId: "513237194524",
    appId: "1:513237194524:web:4bc704533c0f0d986f0cd9",
    measurementId: "G-BKV1P9XVMV"
}

const app = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()

export {firebase, auth, app }