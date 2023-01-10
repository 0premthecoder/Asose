import React, { useState } from 'react'
import styles from '../../styles/Todo.module.css'
export default function Todo() {
    const convertToNextClassName = (className) => className.split(' ').map(c => styles[c]).join(' ')// change class name
    const [show, setShow] = useState('')// showing Menubar for delete and update todo
    const [active, setActive] = useState('')// showing button

    // variables for todos
    const [todo, setTodo] = useState('')
    const [pending, setPending] = useState(true)
    const [user, setUser] = useState()

    useEffect(() => {
        // Perform localStorage action
        const token = localStorage.getItem('token')
        let dec = jwt.decode(token)
        setUser(dec.email)
        
      }, [])

    const handelChange = (e) => {
        if (e.target.name === "todo") {
            setTodo(e.target.value);
        }
        
    }

    const handelSubmit= async (e)=>{
        e.preventDefault();
        const formBody = { user: user, todo: todo }

        let res = await fetch(process.env.NEXT_PUBLIC_ADDTODO_API_URL, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formBody),
        })
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.taskInput}>
                <i class="fa fa-check" aria-hidden="true"></i>

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
                    "pointer-events": "auto"
                }}>Clear All</button>
            </div>
            <ul className={styles.taskBox}>
                <li className={styles.task}>
                    <label for="${id}">
                        <input onclick="updateStatus(this)" type="checkbox" id="${id}" />
                        <p className="${completed}">Hello Wallo</p>
                    </label>
                    <div className={styles.settings}>
                        <i className="fa fa-wrench" onClick={show === 'show' ? () => setShow('') : () => setShow('show')} aria-hidden="true"></i>
                        <ul className={convertToNextClassName(`taskMenu`)} style={show === 'show' ? { "transform": "scale(1)" } : {}}>
                            <li onclick='editTask(${id}, "${todo.name}")'><i class="uil uil-pen"></i>Edit</li>
                            <li onclick='deleteTask(${id}, "${filter}")'><i class="uil uil-trash"></i>Delete</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>

    )
}