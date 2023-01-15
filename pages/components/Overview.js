import React from 'react'
import styles from '../../styles/Dashboard.module.css'

export default function Overview() {
  return (
     <div className={styles.grid}>
          <div className={styles.card}>
              <h3>Your Todos</h3>
              <p>Find in-depth information about it.</p>
            </div>
            <div className={styles.card}>
              <h3 >Announcement</h3>
              <p>Coming soon..</p>
            </div>
        </div> 
  )
}
