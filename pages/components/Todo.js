import React, { useState } from 'react'
import styles from '../../styles/Todo.module.css'
import { useEffect } from 'react'
var jwt = require('jsonwebtoken');

import client from "../../sanity/client";
import TodoItem from './TodoItem';


export default function Todo({result}) {
    const convertToNextClassName = (className) => className.split(' ').map(c => styles[c]).join(' ')// change class name
    const [show, setShow] = useState('')// showing Menubar for delete and update todo
    const [active, setActive] = useState('')// showing button

    // variables for todos
    const [todo, setTodo] = useState('')
    const [user, setUser] = useState()
    const [todoList, setTodoList] = useState()

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
        setTodoList(fetchedTodos);
    };

    

    useEffect(() => {
        // Perform localStorage action
        const token = localStorage.getItem('token')
        let dec = jwt.decode(token)
        setUser(dec.email)
        fetchTodos()
    }, [])




    const handleChange = (e) => {
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

    const handleTodo = async (e) => {
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

        fetchTodos()
    }

    const handleDelete = async (todo) => {
        const formBody = {_id: todo._id}
        console.log(formBody)
        let res = await fetch("/api/todo", {
            method: 'DELETE', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formBody),
        })
        
        fetchTodos()
    }

    const handleUpdate = async (todo) => {
        let iscomplete = true
        const formBody = {id: todo._id, iscomplete: iscomplete}
        let res = await fetch("/api/todo", {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formBody),
        })
        
        fetchTodos()
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.taskInput}>
                <i className="fa fa-check" onClick={handleTodo} aria-hidden="true"></i>
                <input type="text" name='todo' onChange={handleChange} value={todo} placeholder="Add a new task" />
            </div>
            <div className={styles.controls}>
                <div className={styles.filters}>
                    <span className={styles.active} id="all">All</span>
                </div>
            </div>
            <ul className={styles.taskBox}>
                {todoList && todoList.map((todo) =>{ 
                    return( <TodoItem todo={todo} handleUpdate={handleUpdate} key={todo._id} handleDelete={handleDelete}/>)})
                }
            </ul>
        </div>

    )
}
