import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
export default function signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handelSubmit = async (e) => {
        e.preventDefault();
        const formBody = { name: name, email: email, password: password }
        let res = await fetch(process.env.SIGN_API_URL, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formBody),
        })
        let response = await res.json()
        console.log(response)
        setName("");
        setEmail("");
        setPassword("");
        toast.success('🦄 User Created Successfully!', {
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
    const handelChange = (e) => {
        if (e.target.name === "name") {
            setName(e.target.value);
        }
        else if (e.target.name === "email") {
            setEmail(e.target.value);
        }
        else if (e.target.name === "password") {
            setPassword(e.target.value);
        }
    }
    return (<>
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
        <h1>signup</h1>,
        <h5>Welcome</h5>
        <form onSubmit={handelSubmit} method='POST'>
            <div>
                <p><label htmlFor="email">Name</label></p>
                <input value={name} onChange={handelChange} type="string" name="name" required />
            </div>
            <div>
                <p><label htmlFor="email">Email</label></p>
                <input value={email} onChange={handelChange} type="email" name="email" required />
            </div>
            <div>
                <p><label htmlFor="password">Password</label></p>
                <input value={password} onChange={handelChange} type="password" name='password' required />
            </div>
            <button type="submit">Sign up Now</button>
        </form>
    </>
    )
}
