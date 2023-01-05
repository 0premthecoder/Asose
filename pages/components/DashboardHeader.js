import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../../styles/Dashboard.module.css'
import { useRouter } from 'next/router'

export default function DashboardHeader() {
    const router = useRouter()
    const logout=()=>{
        localStorage.removeItem('token')
        router.push('/')
    }
    return (<>
        <nav className={styles.mainnav}>
                <span className={styles.navtitle} >Asose Sector-5 Dwarka</span>
            <ul>
                <Link href={'/'}><li><i className="fa fa-user-secret" aria-hidden="true"></i>
                </li></Link>
                <Link href={'/blog'}><li><i className="fa fa-book" aria-hidden="true"></i></li></Link>
                <li onClick={()=> logout()}><i className="fa fa-user-times" aria-hidden="true"></i></li>
            </ul>
        </nav>
    </>
    )
}
