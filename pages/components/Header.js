import React, { useState } from "react";
import AccountForm from "./AccountForm";
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [navactive, setNavactive] = useState('')
    const togglepage = (active) => {
        if (!localStorage.getItem('token')) {
            setIsOpen(active)
        } else {
            toast.info('🦄 Already Logged in!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setIsOpen(false)
        }
    }
    return <>
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
        <header className="header">
            <Link href="/" className="logo">
                {" "}
                ASOSE{" "}
            </Link>
            <nav className={`navbar ${navactive}`}>
                <div id="close-navbar" className="fas fa-times" onClick={() => setNavactive('')} />
                <Link href='/Myaccount'>Home</Link>
                <Link href="/about">About</Link>
                <Link href="/courses">Courses</Link>
                <Link href="/contact">Contact</Link>
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