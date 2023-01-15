import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Link from 'next/link'

function courses() {
  return (
    <>
      <Header />
      <section className="heading-link">
                <h3>Courses</h3>
                <p> <Link href="/">home</Link> / courses </p>
            </section>
      <section className="courses">
        <h1 className="heading"> Our Skill Courses </h1>
        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src="/course-2-1.jpg" alt="" />
              <h3>Coding</h3>
            </div>
            <div className="content">
              <h3>choose what's best for you!</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
                odit!
              </p>
              <Link href="/blog/coding" className="btn">
                read more
              </Link>
              <div className="icons">
                <span>
                  {" "}
                  <i className="fas fa-clock" /> 2 hours{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="/course-2-2.jpg" alt="" />
              <h3>Electro Mechanical Production</h3>
            </div>
            <div className="content">
              <h3>choose what's best for you!</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
                odit!
              </p>
              <Link href="/blog/electro-mechanical-production" className="btn">
                read more
              </Link>
              <div className="icons">
                <span>
                  {" "}
                  <i className="fas fa-clock" /> 2 hours{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="/finance2.webp" alt="" />
              <h3>Finance &amp; Accounting</h3>
            </div>
            <div className="content">
              <h3>choose what's best for you!</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
                odit!
              </p>
              <Link href="/blog/finance" className="btn">
                read more
              </Link>
              <div className="icons">
                <span>
                  {" "}
                  <i className="fas fa-clock" /> 2 hours{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="/course-2-7.jpg" alt="" />
              <h3>Digital media &amp; designing</h3>
            </div>
            <div className="content">
              <h3>choose what's best for you!</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
                odit!
              </p>
              <Link href="/blog/digital-media-and-designing" className="btn">
                read more
              </Link>
              <div className="icons">
                <span>
                  {" "}
                  <i className="fas fa-clock" /> 2 hours{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="/fashion1.jpg" alt="" />
              <h3>Fashion designing</h3>
            </div>
            <div className="content">
              <h3>choose what's best for you!</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
                odit!
              </p>
              <Link href='/blog/fashion' className="btn">
                read more
              </Link>
              <div className="icons">
                <span>
                  {" "}
                  <i className="fas fa-clock" /> 2 hours{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="/robot skill.jpg" alt="" />
              <h3>Robotics</h3>
            </div>
            <div className="content">
              <h3>choose what's best for you!</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
                odit!
              </p>
              <Link href="/blog/robotics" className="btn">
                read more
              </Link>
              <div className="icons">
                <span>
                  {" "}
                  <i className="fas fa-clock" /> 2 hours{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*<div class="load-more"> <div class="btn">load more</div> </div>*/}
      </section>

      <Footer />
    </>
  )
}

export default courses
