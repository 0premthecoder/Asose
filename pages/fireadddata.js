import { collection, addDoc, query, where, getDocs} from "firebase/firestore"; 
import { firebase } from '../firebase/clientapp'
import React from 'react'
import { getFirestore } from "firebase/firestore";

const db = getFirestore(firebase);

export async function getUserByEmail(email) {
  const collectionRef = collection(db,"users")
  const q = query( collectionRef,where("email", "==",email));
  const querySnapshot = await getDocs(q)
  if (querySnapshot) {
    const snapshot = querySnapshot.docs;
    return snapshot
  } else {
    return null
  }
}

export const add = async(Name, StdId, Email)=>{
  try {
    const docRef = await addDoc(collection(db, "users"), {
      category: "Student",
      email: Email,
      name: Name,
      score: 0,
      student_id: StdId
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default function fireadddata() {
  const addData = async()=>{
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
    <button onClick={addData}>fireadddata</button>
  )
}