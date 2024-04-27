import firebase from "firebase/app"
import "firebase/firestore"
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCszx_3ef2rhX3F4LpIRxc9TzZ5oUF3-i8",
    authDomain: "mindhaven-web.firebaseapp.com",
    projectId: "mindhaven-web",
    storageBucket: "mindhaven-web.appspot.com",
    messagingSenderId: "591919610642",
    appId: "1:591919610642:web:ea4e88f0549b6b71a911cb"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }