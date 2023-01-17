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
                <p> <Link href="/">Home</Link> / courses </p>
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
              Coding is the process of using a programming language to create software applications, websites, and other types of computer programs...
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
              This process typically involves the use of automated machines, robotic systems, and other computer-controlled equipment to produce goods in an efficient and cost-effective manner...
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
              Finance is the broader of the two disciplines, and it involves strategies and activities related to managing money, such as investments, budgeting, and forecasting...
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
              It is the process of using digital tools to create visually engaging, interactive, and user-friendly experiences that are tailored to a specific audience...
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
              Art of creating garments and accessories that are aesthetically pleasing and comfortable to wear. It use of fabrics, colours, patterns, and silhouettes to create a unique look...
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
              Robotics is the branch of engineering that deals with the design, construction, operation, and use of robots. Robots are machines that can be programmed...
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
