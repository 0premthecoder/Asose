import React, { useState } from 'react'
import DashboardHeader from './components/DashboardHeader'
import styles from './../styles/Dashboard.module.css'
import Overview from './components/Overview'
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Todo from './components/Todo';
import Announcement from './components/Announcement'
import { signOut } from 'firebase/auth';
import { authorization } from '../firebase/clientapp';
import Router from "next/router";
import Footer from './components/Footer';
import {getData} from './firebasedata';
import { get, getUserByEmail } from './fireadddata';
import SignUpForm from './SignUpForm';
import Head from 'next/head';

function Myaccount() {
  const [active, setActive] = useState('o')
  const [name, setName] = useState('user')
  const [picture, setPicture] = useState('')
  const [showPopup, setShowPopup] = useState('0')


  async function show(){
    const user = authorization.currentUser;
    if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;
        // const email = user.email;
        const pic = user.photoURL;
        // const emailVerified = user.emailVerified;
        const users = await getUserByEmail(user.email)
        console.log(users)
        if (users.length === 0){
          setShowPopup('1')
        }
        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        // const uid = user.uid;
        // console.log(`UserName: ${displayName}`)
        // console.log(`Useremail: ${email}`)
        // console.log(`Userpic: ${pic}`)
        // console.log(`verified: ${emailVerified}`)
        setPicture(pic)
        setName(displayName)
        // if ((await users).includes(user.email)){
        //   setShowPopup('1')
        // }
        // setEmail(email)
    }
    else{
        setName("Please Login")
        // setEmail("Login Please")
        Router.push('/')
    }
    
}

  useEffect(() => {
    // Perform localStorage action
    show()
    toast.success('🦄 User Logined Successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
  });
  }, [])

  async function signout(){
    signOut(authorization).then(() => {
        setName("Sign Out Succesfully")
        setEmail("Sign Out Succesfully")
        setPicture(" ")
      }).catch((error) => {
        console.log(error)
      });
      Router.push('/')
  }

  

  return (
    <>
    <Head>
        <title>Dashboard - Asose Sector 5 Dwarka</title>
      </Head>
    <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

      <DashboardHeader />
      {showPopup === '1' ? <SignUpForm/> : <div className={styles.main}>
        <img id='logo' src={picture} alt="logo" className={styles.homeImage} />
        <h1>
          &lt;Welcome&#47;&gt;
        </h1>
        <h2 style={{ "color": '#0eb582' }}>{name}</h2>
        <button onClick={signout}>signout</button>
        <div className={styles.grid}>
          <h4 className={active === 'o' ? styles.active : ''} onClick={() => setActive('o')}>Overview</h4>
          <h4 className={active === 't' ? styles.active : ''} onClick={() => setActive('t')}>Todos</h4>
          <h4 className={active === 'a' ? styles.active : ''} onClick={() => setActive('a')}>Announcement</h4>
        </div>
        {active === 'o' ? <Overview /> : ''}
        {active === 't' ? <Todo/> : ''}
        
        {active === 'a' ? <h3>Under Devlopment</h3> : ''}
      </div>}
      {/* <div className={styles.main}>
        <img id='logo' src={picture} alt="logo" className={styles.homeImage} />
        <h1>
          &lt;Welcome&#47;&gt;
        </h1>
        <h2 style={{ "color": '#0eb582' }}>{name}</h2>
        <button onClick={signout}>signout</button>
        <div className={styles.grid} style={{"cursor": 'pointer'}}>
          <h4 className={active === 'o' ? styles.active : ''} onClick={() => setActive('o')}>Overview</h4>
          <h4 className={active === 't' ? styles.active : ''} onClick={() => setActive('t')}>Todos</h4>
          <h4 className={active === 'a' ? styles.active : ''} onClick={() => setActive('a')}>Announcement</h4>
        </div>
        {active === 'o' ? <Overview /> : ''}
        {active === 't' ? <Todo/> : ''}
        {active === 'a' ? <h3>Under Devlopment</h3> : ''}
      </div>

      {/* <footer className={styles.footer}>
        <a
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by &#9998;&nbsp;<span style={{ fontWeight: 'bolder' }}>Coding Team</span>
        </a>
      </footer> */}
      <Footer/>
    </>
  )
}

export default Myaccount
