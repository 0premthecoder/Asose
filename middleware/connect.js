// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUxcVIH1VlP0fXFvYVo1RbypJz0173Fao",
  authDomain: "asosewebsite.firebaseapp.com",
  projectId: "asosewebsite",
  storageBucket: "asosewebsite.appspot.com",
  messagingSenderId: "977548250136",
  appId: "1:977548250136:web:25dd08c8ae8d4717e3c76d",
  measurementId: "G-5TR4WGS8TT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);