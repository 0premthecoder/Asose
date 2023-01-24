import React from 'react'
import styles from '../../styles/Dashboard.module.css'

export default function Announcement() {
  return (
     <div className={styles.grid}>
          <div className={styles.card}>
              <h3>Announcement</h3>
              <p>Coming soon..</p>
            </div>
            <div className={styles.card}>
              <h3 >Announcement</h3>
              <p>Coming soon..</p>
            </div>
        </div> 
  )
}
