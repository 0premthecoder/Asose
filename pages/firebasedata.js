import React from 'react'
import { collection, addDoc, query, where} from "firebase/firestore"; 

import db from "../firebase/clientapp";

export function getData() {
  let users = []
  const q = query(collection(db, 'users'), where("email","!=",null));
  unsubscribe = onSnapshot(q, (querySnapshot) => {
    users = users = querySnapshot.docs.map((d) => d.data());
  });
  console.log(users);
}
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
    <div>firebasedata
    <input type="button" value={"ks"} onClick={addData} /></div>
  )
}
