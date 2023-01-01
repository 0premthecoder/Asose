import React, { useState } from 'react'

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
    
  return (
    <>
        <input type="text" value={title} name='title' />
        <input type="text" value={desc} name='desc' />
    </>
  )
}
