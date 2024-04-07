import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const clientCredentials = {
  apiKey: "AIzaSyAUxcVIH1VlP0fXFvYVo1RbypJz0173Fao",
  authDomain: "asosewebsite.firebaseapp.com",
  projectId: "asosewebsite",
  storageBucket: "asosewebsite.appspot.com",
  messagingSenderId: "977548250136",
  appId: "1:977548250136:web:25dd08c8ae8d4717e3c76d",
  measurementId: "G-5TR4WGS8TT"
};


export default firebase = initializeApp(clientCredentials);
export const db = getFirestore(firebase);
export const authorization = getAuth(firebase);

if (firebase.name && typeof window !== 'undefined') {
  const analytics = getAnalytics(firebase);
}