// auth.tsx
import React from "react";
import { authorization } from "../firebase/clientapp";
import {signInWithPopup, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import styles from '../styles/Home.module.css'
import Router from "next/router";
function Auth() {
    const signInwithGithub = async (e) => {
        e.preventDefault()
        const provider = new GithubAuthProvider();
        await signInWithPopup(authorization, provider)
            .then((response) => {
                console.log(response);
                Router.push('/Myaccount')
            }).catch((error) => {
                console.log(error);
            })
    }
    const signInwithGoogle = async (e) => {
        e.preventDefault()
        const provider = new GoogleAuthProvider();
        await signInWithPopup(authorization, provider)
            .then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
            Router.push('/Myaccount')
    }

    return (<>
        <div className={styles.marg} ><button className={styles.button86} onClick={signInwithGithub}>Github Login</button></div>
        <div><button className={styles.button86} onClick={signInwithGoogle}>Google Login</button></div>
    </>
    );
}

export default Auth;
