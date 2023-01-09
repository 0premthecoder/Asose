import React, { useState } from 'react'
import DashboardHeader from './components/DashboardHeader'
import styles from './../styles/Dashboard.module.css'
import Overview from './components/Overview'
var jwt = require('jsonwebtoken');
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Todo from './components/Todo';


function Myaccount() {
  const [active, setActive] = useState('o')
  const [name, setName] = useState('user')
  useEffect(() => {
    // Perform localStorage action
    const token = localStorage.getItem('token')
    let dec = jwt.decode(token)
    
    setName(dec.name)
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

  return (
    <>
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
      <div className={styles.main}>
        <img id='logo' src="/home.jpg" alt="logo" className={styles.homeImage} width={300} height={200} />
        <h1>
          &lt;Welcome&#47;&gt;
        </h1>
        <h2 style={{ "color": '#0eb582' }}>{name}</h2>

        <div className={styles.grid}>
          <h4 className={active === 'o' ? styles.active : ''} onClick={() => setActive('o')}>Overview</h4>
          <h4 className={active === 't' ? styles.active : ''} onClick={() => setActive('t')}>Todos</h4>
          <h4 className={active === 'a' ? styles.active : ''} onClick={() => setActive('a')}>Announcement</h4>
        </div>
        {active === 'o' ? <Overview /> : ''}
        {active === 't' ? <Todo/> : ''}
        {active === 'a' ? <h3>Under Devlopment</h3> : ''}
      </div>

      <footer className={styles.footer}>
        <a
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by &#9998;&nbsp;<span style={{ fontWeight: 'bolder' }}>Coding Team</span>
        </a>
      </footer>
    </>
  )
}

export default Myaccount
