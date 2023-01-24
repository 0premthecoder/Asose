
import { useState } from 'react'
import styles from '../styles/SignUpForm.module.css'
import { add } from './fireadddata';
import { authorization } from '../firebase/clientapp';
import Router from 'next/router';

export default function SignUpForm (){ 
  
  const [name, SetName] = useState('');
  const [stdId, SetStdID] = useState('');
  
  function handleTextareaChange(e) {
    SetName(e.target.value);
  }
  function handleStdIdChange(e) {
    SetStdID(e.target.value);
  }
  function addUser(e){
    e.preventDefault();
    const user = authorization.currentUser;
    add(name,stdId,user.email)
    Router.push("/")
  }

  return(
  <div className={styles.container}>
    <div className={styles.form_area}>
      <h4 className={styles.title}>Fill your details</h4>
      <form action="">
        <div className={styles.form_group}>
          <label htmlFor="name" className={styles.sub_title}>
            Name
          </label>
          <input
            type="text"
            className={styles.form_style}
            onChange={handleTextareaChange}
            id="name"
            placeholder="Enter your full name"
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="Student" className={styles.sub_title}>
            Student ID
          </label>
          <input
            type="number"
            className={styles.form_style}
            onChange={handleStdIdChange}
            id="id"
            placeholder="Enter your Student ID"
          />
        </div>
        <div>
          <button className={styles.btn} onClick={addUser}>Done!</button>
          <p>
            Students{" "}
            <a href="student.html" className={styles.link}>
              Login Here!
            </a>
          </p>
          <a href="student.html" className={styles.link}></a>
        </div>
        <a href="student.html" className={styles.link}></a>
      </form>
    </div>
    <a href="student.html" className={styles.link}></a>
  </div>
)}

// export const Student = () => (
//   <div>
//     <div className={styles.form_area}>
//       <h4 className={styles.title}>Fill your details</h4>
//       <form action="">
//         <div className={styles.form_group}>
//           <label htmlFor="name" className={styles.sub_title}>
//             Name
//           </label>
//           <input
//             type="text"
//             className={styles.form_style}
//             id="name"
//             placeholder="Enter your full name"
//           />
//         </div>
//         <div className={styles.form_group}>
//           <label htmlFor="Student ID" className={styles.sub_title}>
//             Student ID
//           </label>
//           <input
//             type="text"
//             className={styles.form_style}
//             id="id"
//             placeholder="Enter your student ID"
//           />
//         </div>
//         <div>
//           <button className={styles.btn}>Done!</button>
//           <p>
//             Teachers{" "}
//             <a href="teacher.html" className={styles.link}>
//               Login Here!
//             </a>
//           </p>
//           <a href="teacher.html" className={styles.link}></a>
//         </div>
//         <a href="teacher.html" className={styles.link}></a>
//       </form>
//     </div>
//     <a href="teacher.html" className={styles.link}></a>
//   </div>
// )
