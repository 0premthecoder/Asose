import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";


const clientCredentials = {
  apiKey: "AIzaSyAUxcVIH1VlP0fXFvYVo1RbypJz0173Fao",
  authDomain: "asosewebsite.firebaseapp.com",
  projectId: "asosewebsite",
  storageBucket: "asosewebsite.appspot.com",
  messagingSenderId: "977548250136",
  appId: "1:977548250136:web:25dd08c8ae8d4717e3c76d",
  measurementId: "G-5TR4WGS8TT"
};


const firebase = initializeApp(clientCredentials);
const db = getFirestore(firebase);
export const authorization = getAuth(firebase);
