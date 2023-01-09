import React from 'react'
import Styles from '../../styles/Todo.module.css'
export default function Todo() {
    return (
        <div className={Styles.wrapper}>
            <div className={Styles.taskInput}>
                <i class="fa fa-server" aria-hidden="true"></i>
                <input type="text" placeholder="Add a new task" />
            </div>
            <div className={Styles.controls}>
                <div className={Styles.filters}>
                    <span className={Styles.active} id="all">All</span>
                    <span id="pending">Pending</span>
                    <span id="completed">Completed</span>
                </div>
                <button className={Styles.clearBtn}>Clear All</button>
            </div>
            <ul className={Styles.taskBox}>
                    <li className={Styles.task}>
                        <label for="${id}">
                            <input onclick="updateStatus(this)" type="checkbox" id="${id}" />
                            <p className="${completed}">Hello Wallo</p>
                        </label>
                        <div className={Styles.settings}>
                        <i class="fa fa-wrench" aria-hidden="true"></i>

                            <ul className={Styles.taskMenu}>
                                <li onclick='editTask(${id}, "${todo.name}")'><i class="uil uil-pen"></i>Edit</li>
                                <li onclick='deleteTask(${id}, "${filter}")'><i class="uil uil-trash"></i>Delete</li>
                            </ul>
                        </div>
                    </li>
                </ul>
        </div>

    )
}
