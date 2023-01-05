import React from 'react'
import DashboardHeader from './components/DashboardHeader'
import Link from 'next/link'
import styles from './../styles/Dashboard.module.css'
function Myaccount() {
  return (
    <>
    <DashboardHeader/>
    <div className={styles.main}>
        <img id='logo' src="/home.jpg" alt="hunting coder" className={styles.homeImage} width={300} height={200}/>
        <h1 >
          &lt;PremTheCoder&#47;&gt;
        </h1>

        {/* <h2>Popular Blogs</h2> */}
        <div className={styles.grid}>
          <div className={styles.card}>
              <h1 >Your Todos</h1>
              <p>Find in-depth information about it.</p>
            </div>
            <div className={styles.card}>
              <h1 >Announcement</h1>
              <p>Coming soon..</p>
            </div>
        </div>
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