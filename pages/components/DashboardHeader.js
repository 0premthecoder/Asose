import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../../styles/Dashboard.module.css'
import { useRouter } from 'next/router'

export default function DashboardHeader() {
    const [navactive, setNavactive] = useState('')
    return (<>
        {/* <nav className={styles.mainnav}>
                <span className={styles.navtitle} >Asose Sector-5 Dwarka</span>
            <ul>
                <Link href={'/'}><li><i className="fa fa-user-secret" aria-hidden="true"></i>
                </li></Link>
                <Link href={'/blog'}><li><i className="fa fa-book" aria-hidden="true"></i></li></Link>
                <li onClick={()=> logout()}><i className="fa fa-user-times" aria-hidden="true"></i></li>
            </ul>
        </nav> */}

        <header className="header" style={{"opacity": "80%"}}>
            <Link href="/" className="logo">
                {" "}
                ASOSE{" "}
            </Link>
            <nav className={`navbar ${navactive}`} >
                <div id="close-navbar" className="fas fa-times" onClick={() => setNavactive('')} />
                <Link href='/Myaccount'><i className="fa fa-user-secret" aria-hidden="true"></i></Link>
                <Link href="/"><i className="fa fa-book" aria-hidden="true"></i></Link>
                <Link href="/magzine"><i className="fa fa-user-times" aria-hidden="true"></i></Link>
                {/* <Link href="/contact">Contact</Link> */}
            </nav>
            <div className="icons">
                <div id="menu-btn" onClick={() => setNavactive('active')} className="fas fa-bars" />
            </div>
        </header>
    </>
    )
}
