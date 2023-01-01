import React, { useState } from 'react'
var jwt = require('jsonwebtoken');
import { ToastContainer, toast } from 'react-toastify';

export default function Todo() {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const handelChange = (e) => {
        if (e.target.name === "title") {
            setTitle(e.target.value);
        }
        else if (e.target.name === "desc") {
            setDesc(e.target.value);
        }
    }

    const handelSubmit=async (e)=>{
        e.preventDefault();
        let token = localStorage.getItem('token')
        var dec = jwt.decode(token)
        const formBody = {title: title, description: desc, user: dec.email}
        let res = await fetch('https://asose-prem0556.vercel.app/api/addtodo',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formBody),
        })
        let response = await res.json()
        if (response.success) {
            // localStorage.setItem('token', response.token)
            toast.success('Todo added', {
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
        // setDesc(dec.email)

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
       <h1>todo</h1>,
        <h5>Welcome</h5>
        <form onSubmit={handelSubmit} method='POST'>
            <div>
                <p><label htmlFor="email">Title</label></p>
                <input value={title} onChange={handelChange} type="string" name="title" required />
            </div>
            <div>
                <p><label htmlFor="email">Desc</label></p>
                <input value={desc} onChange={handelChange} type="string" name="desc" required />
            </div>
            <button type="submit">Submit</button>
        </form>
    </>
  )
}
