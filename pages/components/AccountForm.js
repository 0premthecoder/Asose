import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AccountForm(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handelSubmitSignup = async (e) => {
        e.preventDefault();
        const formBody = { name: name, email: email, password: password }
        console.log(formBody)
        let res = await fetch(process.env.NEXT_PUBLIC_SIGN_API_URL, {
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
    const [active, setActive] = useState(true)


    // login
    const handelSubmitLogin = async (e) => {
        e.preventDefault();
        const formBody = { email: email, password: password }
        let res = await fetch(process.env.NEXT_PUBLIC_LOGIN_API_URL, {
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
            // console.log(dec)

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

        <div className={`active account-form`}>
            <div id="close-form" className="fas fa-times" onClick={() => props.togglepage(false)} />
            <div className="buttons">
                <span className={`btn ${active ? 'active' : ' '} login-btn`} onClick={() => setActive(true)}>login</span>
                <span className={`btn ${active ? ' ' : 'active'} register-btn`} onClick={() => setActive(false)}>register</span>
            </div>
            <form className={`login-form ${active ? 'active' : ' '}`} onSubmit={handelSubmitLogin} method='POST'>
                <h3>login now</h3>
                <input type="email" name="email" value={email} onChange={handelChange} placeholder="Enter your email" className="box" />
                <input
                    type="password"
                    placeholder="Enter your password"
                    className="box" 
                    name="password" value={password}
                    onChange={handelChange}
                    />
                {/* <div className="flex"> */}
                    {/* <input type="checkbox" name="" id="remember-me" /> */}
                    {/* <label htmlFor="remember-me">remember me</label> */}
                    {/* <a href="#">forgot password?</a> */}
                {/* </div> */}
                <input type="submit" defaultValue="login now" className="btn" />
            </form>

            <form className={`register-form ${active ? ' ' : 'active'}`} onSubmit={handelSubmitSignup} method='POST'>
                <h3>register now</h3>
                <input type="Name" name="name" value={name} onChange={handelChange} placeholder="Enter your name" className="box" typeof="string"/>
                <input type="Email" name="email" value={email} onChange={handelChange} placeholder="Enter your email" className="box" typeof="email"/>
                <input
                    type="Password"
                    placeholder="Enter your password"
                    className="box"
                    name="password"
                    value={password} onChange={handelChange} typeof="string"
                />
                <input type="submit" defaultValue="register now" className="btn" />
            </form>
        </div></>)
}