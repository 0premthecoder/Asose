import React, { useState } from "react";
import AccountForm from "./AccountForm";
import Link from 'next/link'
function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [navactive, setNavactive] = useState('')
    const togglepage = (active) => {
        setIsOpen(active)
    }
    return <>
        <header className="header">
            <Link href="/" className="logo">
                {" "}
                ASOSE{" "}
            </Link>
            <nav className={`navbar ${navactive}`}>
                <div id="close-navbar" className="fas fa-times" onClick={() => setNavactive('')} />
                <Link href='/'>Home</Link>
                <Link href="/about">About</Link>
                <Link href="/courses">Courses</Link>
                <Link href="/contacts">Contact</Link>
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