// auth.tsx
import React from "react";
import { authorization } from "../firebase/clientapp";
import {signInWithPopup, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import styles from '../styles/Home.module.css'
import GoogleButton from 'react-google-button'
import GithubButton from 'react-github-login-button'


import Router from "next/router";
function Auth() {
    const signInwithGithub = async (e) => {
        e.preventDefault()
        const provider = new GithubAuthProvider();
        await signInWithPopup(authorization, provider)
            .then((response) => {
                localStorage.setItem('name',response.user.displayName)
                localStorage.setItem('pic',response.user.photoURL)
                localStorage.setItem('mail',response.user.email)
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
                // console.log(response.user.photoURL);
                localStorage.setItem('name',response.user.displayName)
                localStorage.setItem('pic',response.user.photoURL)
                localStorage.setItem('mail',response.user.email)
                Router.push('/Myaccount')
            }).catch((error) => {
                console.log(error);
            })
    }

    return (<>
        <div ><GoogleButton style={{width:"211px"}} onClick={signInwithGoogle}/>
        <GithubButton style={{marginTop: "14px", width:"211px"}} onClick={signInwithGithub}/></div>

    </>
    );
}

export default Auth;
