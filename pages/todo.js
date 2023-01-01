import React, { useState } from 'react'
var jwt = require('jsonwebtoken');

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

    const handelSubmit=(e)=>{
        e.preventDefault();
        let token = localStorage.getItem('token')
        var dec = jwt.decode(token)
        setDesc(dec.email)

    }
    
  return (
    <>
       <h1>signup</h1>,
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
