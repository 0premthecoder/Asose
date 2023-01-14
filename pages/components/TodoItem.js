import React, { useState } from 'react'
import styles from '../../styles/Todo.module.css'
import { useEffect } from 'react'


export default function TodoItem(props) {
    const [todo, setTodo] = useState(props.todo)
    
        useEffect(() => {
            setTodo(props.todo)
        }, [props.todo])
    
        return (
            <li className={styles.task} >
                    <label htmlFor={todo._id}>
                        {todo.isCompleted ? <input onClick={()=>props.handleUpdate(todo)} type="checkbox" id={todo._id} checked/> : <input onClick={()=>props.handleUpdate(todo)} type="checkbox" id={todo._id}/>}
                        
                        <p style={todo.isCompleted ? {"text-decoration": "line-through"} : {"color" : "red"}}>{todo.text}</p>
                    </label>
                    <div className={styles.settings}>
                        <i className="fa fa-times" onClick={(e) => {e.preventDefault();props.handleDelete(todo);}} aria-hidden="true"></i>
                    </div>
                </li>
        )
}

