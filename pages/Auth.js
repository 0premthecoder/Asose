// auth.tsx
import React from "react";
import { authorization } from "../firebase/clientapp";
import {signInWithPopup, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import styles from '../styles/Home.module.css'
function Auth() {
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

    return (<><div>
        <button className={styles.btndark} onClick={signInwithGithub}>Github Login</button></div>
    <button onClick={signInwithGoogle} className={styles.btn}>Google Login</button>
    </>
    );
}

export default Auth;
