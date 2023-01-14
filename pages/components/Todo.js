import React, { useState } from 'react'
import styles from '../../styles/Todo.module.css'
import { useEffect } from 'react'
var jwt = require('jsonwebtoken');

import client from "../../sanity/client";


export default function Todo({result}) {
    const convertToNextClassName = (className) => className.split(' ').map(c => styles[c]).join(' ')// change class name
    const [show, setShow] = useState('')// showing Menubar for delete and update todo
    const [active, setActive] = useState('')// showing button

    // variables for todos
    const [todo, setTodo] = useState('')
    // const [pending, setPending] = useState(true)
    const [user, setUser] = useState()
    // const [todos, setTodos] = useState()

    const fetchTodos = async () => {
        let fetchedTodos;
        //make sure the user is loaded
        const token = localStorage.getItem('token')
        let dec = jwt.decode(token)
        //pass userEmail as a query parameter
        fetchedTodos = await client.fetch(
            `*[_type=="todo" && userEmail==$userEmail]`,
            {
                userEmail: dec.email,
            });
        //insert our response in the todoList state
        //   setTodoList(fetchedTodos);
        console.log(fetchedTodos)

    };

    

    useEffect(() => {
        // Perform localStorage action
        const token = localStorage.getItem('token')
        let dec = jwt.decode(token)
        setUser(dec.email)
        fetchTodos()
        

    }, [])




    const handelChange = (e) => {
        if (e.target.name === "todo") {
            setTodo(e.target.value);
        }

    }

    // const handelSubmit= async (e)=>{
    //     e.preventDefault();
    //     const formBody = { user: user, todo: todo }

    //     await fetch(process.env.NEXT_PUBLIC_ADDTODO_API_URL, {
    //         method: 'POST', // or 'PUT'
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(formBody),
    //     })

    //     const formBodyFetch = { user: dec.email}
    //         console.log(formBodyFetch)
    //         let res = await fetch(process.env.NEXT_PUBLIC_FETCHTODO_API_URL, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(formBodyFetch),

    //         })
    //         // console.log(res)
    //         let data = await res.json()
    //         // console.log(data)
    //         setTodos(data)
    // }

    const handeltodo = async (e) => {
        e.preventDefault();
        const formBody = { user: user, text: todo }
        console.log(formBody)
        let res = await fetch("/api/todo", {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formBody),
        })
        console.log(res)
        fetchTodos()
    }

    const handeldelete = () => {
        const formBody = { user: user, todo: todo }
        console.log(formBody)
        let res = fetch("/api/todo", {
            method: 'DELETE', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formBody),
        })
        console.log(res);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.taskInput}>
                <i className="fa fa-check" onClick={handeltodo} aria-hidden="true"></i>

                <input type="text" name='todo' onChange={handelChange} value={todo} placeholder="Add a new task" />
            </div>
            <div className={styles.controls}>
                <div className={styles.filters}>
                    <span className={styles.active} id="all">All</span>
                    <span id="pending">Pending</span>
                    <span id="completed">Completed</span>
                </div>
                <button className={styles.clearBtn} style={{
                    "opacity": "0.9",
                    "pointerEvents": "auto"
                }}>Clear All</button>
            </div>
            <ul className={styles.taskBox}>
                <li className={styles.task}>
                    <label htmlFor="${id}">
                        <input onClick="updateStatus(this)" type="checkbox" id="${id}" />
                        <p className="${completed}">"hhh"</p>
                    </label>
                    <div className={styles.settings}>
                        <i className="fa fa-times" onClick={handeltodo} aria-hidden="true"></i>
                    </div>
                </li>
            </ul>
        </div>

    )
}
