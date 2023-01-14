// auth.tsx
import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { authorization } from "../firebase/clientapp";
import { getAuth, signInWithPopup, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";



function auth() {
    const signInwithGithub = () => {
        const provider = new GithubAuthProvider();
        signInWithPopup(authorization, provider)
            .then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
    }
    const signInwithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authorization, provider)
            .then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
    }

    return (<><div><button onClick={signInwithGithub}>Click me for github</button></div>
    <button onClick={signInwithGoogle}>Click me for google</button></>
    );
}

export default auth;
