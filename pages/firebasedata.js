import React from 'react'
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../firebase/clientapp";

export default function firebasedata() {
    async function addData() {
        try {
            const docRef = await addDoc(collection(db, "users"), {
              first: "Ada",
              last: "Lovelace",
              born: 1815
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
    
  return (
    // gonna use
    <div>firebasedata</div>
  )
}
