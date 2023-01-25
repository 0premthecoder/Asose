import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Link from 'next/link'
import styles from './../styles/Home.module.css'
import Head from 'next/head'
export default function contact() {
    const [quest, setQuest] = useState(' ')
  return (
    <>
    <Head>
        <title>Contact -Asose Sector 5 Dwarka</title>
      </Head>
    <Header />
  <div className="account-form">
    <div id="close-form" className="fas fa-times" />
    <div className="buttons">
      <span className="btn active login-btn">login</span>
      <span className="btn register-btn">register</span>
    </div>
    <form className="login-form active" action="">
      <h3>login now</h3>
      <input type="email" placeholder="Enter your email" className="box" />
      <input
        type="password"
        placeholder="Enter your password"
        className="box"
      />
      <div className="flex">
        <input type="checkbox" name="" id="remember-me" />
        <label htmlFor="remember-me">remember me</label>
        <a href="#">forgot password?</a>
      </div>
      <input type="submit" defaultValue="login now" className="btn" />
    </form>
    <form className="register-form" action="">
      <h3>register now</h3>
      <input type="Name" placeholder="Enter your name" className="box" />
      <input type="Email" placeholder="Enter your email" className="box" />
      <input
        type="Password"
        placeholder="Enter your password"
        className="box"
      />
      <input type="submit" defaultValue="register now" className="btn" />
    </form>
  </div>
  {/* account form section ends */}
  {/* header section ends */}
  <section className="heading-link">
    <h3>contact us</h3>
    <p>
      {" "}
      <Link href="/">home</Link> / contact{" "}
    </p>
  </section>
  {/* contact section starts  */}
  <section className="contact">
    <h1 className="heading"> get in touch </h1>
    <div className="icons-container">
      <div className="icons">
        <i className="fas fa-clock" />
        <h3>opening hours :</h3>
        <p>00:07am to 00:06pm</p>
      </div>
      <div className="icons">
        <i className="fas fa-phone" />
        <h3>phone :</h3>
        <p>+91000000</p>
        <p>+91000000</p>
      </div>
      <div className="icons">
        <i className="fas fa-envelope" />
        <h3> email : </h3>
        <p>sectionc90@gmail.com</p>
        <p>sectionc90@gmail.com</p>
      </div>
      <div className="icons">
        <i className="fas fa-map" />
        <h3>address :</h3>
        <p> Delhi, india - 110075</p>
      </div>
    </div>
    <div className="row">
      <div className="image">
        <img src="/contact-img.png" alt="" />
      </div>
      <form action="">
        <h3>send us a message</h3>
        <input type="text" placeholder="name" className="box" />
        <input type="email" placeholder="email" className="box" />
        <input type="number" placeholder="phone" className="box" />
        <textarea
          name=""
          className="box"
          placeholder="message"
          id=""
          cols={30}
          rows={10}
          defaultValue={""}
        />
        <input type="submit" defaultValue="send message" className={styles.btn} />
      </form>
    </div>
  </section>
  {/* contact section ends */}
  {/* faq section starts  */}
  <section className="faq">
    <h1 className="heading">frequently asked questions</h1>
    <div className="accordion-container">
      <div className={`accordion ${quest === '1' ? 'active' : ' ' }`}>
        <div className="accordion-heading">
          <h3>how to contact for help?</h3>
          <i className="fas fa-angle-down" onClick={ ()=> quest === '1' ? setQuest(' ') : setQuest('1')} />
        </div>
        <p className="accordion-content">
          You can Contact us via visiting our school or visiting contact us page of our website.
        </p>
      </div>
      <div className={`accordion ${quest === '2' ? 'active' : ' ' }`}>
        <div className="accordion-heading">
          <h3>what is the best skill cource in 2022?</h3>
          <i className="fas fa-angle-down" onClick={ ()=> quest === '2' ? setQuest(' ') : setQuest('2')} />
        </div>
        <p className="accordion-content">
          We will give you tester course of all skills then you can choose from them
           what skill is best for you if you have any problem after it we also conduct 
           a seminar for students and parents for helping them in their decision.
        </p>
      </div>
      {/* <div className="accordion">
        <div className="accordion-heading">
          <h3>how much fees for web development?</h3>
          <i className="fas fa-angle-down" />
        </div>
        <p className="accordion-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
          consequatur molestias deserunt facere laborum doloremque fuga, quae
          aut. Recusandae officia quis temporibus! Magnam mollitia nostrum
          voluptatibus deserunt quidem. Natus, quo.
        </p>
      </div>
      <div className="accordion">
        <div className="accordion-heading">
          <h3>questions</h3>
          <i className="fas fa-angle-down" />
        </div>
        <p className="accordion-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
          consequatur molestias deserunt facere laborum doloremque fuga, quae
          aut. Recusandae officia quis temporibus! Magnam mollitia nostrum
          voluptatibus deserunt quidem. Natus, quo.
        </p>
      </div>
      <div className="accordion">
        <div className="accordion-heading">
          <h3>questions</h3>
          <i className="fas fa-angle-down" />
        </div>
        <p className="accordion-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
          consequatur molestias deserunt facere laborum doloremque fuga, quae
          aut. Recusandae officia quis temporibus! Magnam mollitia nostrum
          voluptatibus deserunt quidem. Natus, quo.
        </p>
      </div>
      <div className="accordion">
        <div className="accordion-heading">
          <h3>questions</h3>
          <i className="fas fa-angle-down" />
        </div>
        <p className="accordion-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
          consequatur molestias deserunt facere laborum doloremque fuga, quae
          aut. Recusandae officia quis temporibus! Magnam mollitia nostrum
          voluptatibus deserunt quidem. Natus, quo.
        </p>
      </div> */}
    </div>
  </section>

  <Footer />
</>

  )
}
