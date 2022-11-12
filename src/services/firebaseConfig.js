import { initializeApp } from "firebase/app";
import {getFirestore, collection}  from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSCBuh_7m4_Nufe9s-KACnrcv_kDHxUj8",
  authDomain: "proyecto-cursos-2ed3c.firebaseapp.com",
  projectId: "proyecto-cursos-2ed3c",
  storageBucket: "proyecto-cursos-2ed3c.appspot.com",
  messagingSenderId: "384658315339",
  appId: "1:384658315339:web:3222b8b6db8ca075d6d5ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Inicializo DB y le paso la config de mi App
export const db = getFirestore(app);

export const colleccionProd=collection(db, 'cursos');