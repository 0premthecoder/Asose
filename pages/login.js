import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
var jwt = require('jsonwebtoken');

import 'react-toastify/dist/ReactToastify.css';

export default function login() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    console.log("response")

    const handelSubmit = async (e) => {
        e.preventDefault();
        const formBody = { email: email, password: password }
        let res = await fetch('http://localhost:3000/api/login', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formBody),
        })
        let response = await res.json()
        if (response.success) {
            localStorage.setItem('token', response.token)
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
            // var dec = jwt.decode(response.token)
            console.log(dec)

        }
    }
    const handelChange = (e) => {
        if (e.target.name === "email") {
            setEmail(e.target.value);
        }
        else if (e.target.name === "password") {
            setPassword(e.target.value);
        }
    }
    

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
            <h1>sign-in</h1>,
            <h5>Welcome</h5>
            <form onSubmit={handelSubmit} method='POST'>
                <div>
                    <p><label htmlFor="email">Email</label></p>
                    <input value={email} onChange={handelChange} type="email" name="email" required />
                </div>
                <div>
                    <p><label htmlFor="password">Password</label></p>
                    <input value={password} onChange={handelChange} type="password" name='password' required />
                </div>
                <button type="submit">Login Now</button>
            </form>
        </>
    )
}
