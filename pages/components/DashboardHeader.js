import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../../styles/Dashboard.module.css'
export default function DashboardHeader() {
    const [name, setName] = useState('lo')
    // if(localStorage.getItem('token') != null){
    //     setName('Something')
    // }
    return (<>
        <nav className={styles.mainnav}>
                <span className={styles.navtitle} >Asose Sector-5 Dwarka</span>
            <ul>
                <Link href={'/'}><li><i className="fa fa-user-secret" aria-hidden="true"></i>
                </li></Link>
                <Link href={'/blog'}><li><i className="fa fa-book" aria-hidden="true"></i></li></Link>
                <Link href={'/contact'}><li><i className="fa fa-user-times" aria-hidden="true"></i></li></Link>
            </ul>
        </nav>
    </>
    )
}
