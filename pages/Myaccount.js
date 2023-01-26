import React, { useState } from 'react'
import DashboardHeader from './components/DashboardHeader'
import styles from './../styles/Dashboard.module.css'

import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Todo from './components/Todo';

import Router from "next/router";
import Footer from './components/Footer';
import { getUserByEmail } from './fireadddata';
import SignUpForm from './SignUpForm';
import Head from 'next/head';

function Myaccount() {
  const [active, setActive] = useState('o')
  const [name, setName] = useState('user')
  const [picture, setPicture] = useState('')
  const [showPopup, setShowPopup] = useState('0')

  async function show() {
    if (localStorage.getItem('name')) {
      setName(localStorage.getItem('name'))
      setPicture(localStorage.getItem('pic'))
      const users = await getUserByEmail(localStorage.getItem('mail'))
      console.log(users.length)
      if (users.length === 0) {
        setShowPopup('1')
      }
      toast.success('User Logined Successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    else {
      Router.push('/')
    }
  }

  useEffect(() => {
    // Perform localStorage action
    show()
  }, [])

  async function signout() {
    localStorage.clear()
    Router.push("/")
  }

  const popup = (p) => {
    setShowPopup(p)
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
      {showPopup === '1' ? <SignUpForm popup={popup} /> : <div className={styles.main}>
        <img id='logo' src={picture} alt="logo" className={styles.homeImage} />
        <h1>
          &lt;Welcome&#47;&gt;
        </h1>
        <h2 style={{ "color": '#0eb582' }}>{name}</h2>
        <button onClick={signout}>signout</button>
        <div className={styles.grid} style={{ "cursor": 'pointer' }}>
          <h4 className={active === 'o' ? styles.active : ''} onClick={() => setActive('o')}>Overview</h4>
          <h4 className={active === 't' ? styles.active : ''} onClick={() => setActive('t')}>Todos</h4>
          <h4 className={active === 'a' ? styles.active : ''} onClick={() => setActive('a')}>Announcement</h4>
        </div>
        {active === 'o' ? <h3>Under devlopment</h3> : ''}
        {active === 't' ? <Todo /> : ''}
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
      <Footer />
    </>
  )
}

export default Myaccount
