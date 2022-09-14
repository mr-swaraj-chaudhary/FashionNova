import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyCoeodaN4-A3B_Mm4vl6zRFEPThNo2d6X4",
    authDomain: "fashion-nova-2c885.firebaseapp.com",
    projectId: "fashion-nova-2c885",
    storageBucket: "fashion-nova-2c885.appspot.com",
    messagingSenderId: "413976035774",
    appId: "1:413976035774:web:1cb8c677fb2631a2b579ef"
};

const app = initializeApp(firebaseConfig)
export default app