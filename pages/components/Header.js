import React, { useState } from "react";
import AccountForm from "./AccountForm";
import Link from 'next/link'
import image from 'next/image'
// import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router'
function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [navactive, setNavactive] = useState('')
    const router = useRouter()
    const togglepage = (active) => {
        if (!localStorage.getItem('token')) {
            setIsOpen(active)
        } else {
            router.push('/Myaccount')
            setIsOpen(false)
        }
    }
    return <>
        <header className="header">
              <div className="image">
  <img src="logo.png" alt="" style={{ height: 25 }} />
</div>
            <Link href="/" className="logo">
                {" "}
                ASOSE{" "}
            </Link>
            <nav className={`navbar ${navactive}`}>
                <div id="close-navbar" className="fas fa-times" onClick={() => setNavactive('')} />
                <Link href='/'>Home</Link>
                <Link href="/about">About</Link>
                <Link href="/courses">Courses</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/blog/allpost">Blogs</Link>
            </nav>
            <div className="icons">
                <div id="account-btn" onClick={() => togglepage(true)} className="fas fa-user" />
                <div id="menu-btn" onClick={() => setNavactive('active')} className="fas fa-bars" />
            </div>
        </header>
        {isOpen ? <AccountForm togglepage={togglepage} /> : null}
    </>;

}
export default Header;
