import React, { useState } from 'react'
import Header from "./components/Header";
import HomeHeader from "./components/HomeHeader";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/bundle";
// import Image from 'next/image'
import Footer from './components/Footer';
import styles from './../styles/Home.module.css'
// import { createClient } from "next-sanity";
import Link from 'next/link';
import { Pagination } from "swiper";

// Images

function Index() {
    const [showForm, SetshowForm] = useState(false);
    const passData = bool => {
        SetshowForm(bool);
        console.log(showForm)
    };

    return (
        // <React.Fragment>
        <>


            {/* account form section ends */}
            {/* header section ends */}
            {/* home section starts  */}
            <Header />
            <HomeHeader />
            {/* home section ends */}
            {/* subjects section starts  */}
            
            {/* subjects section ends */}
            {/* home courses slider section starts  */}
            <section className="home-courses .home-courses-slider" >
                <h1 className="heading"> Our Popular Skills </h1>
                <Swiper className="swiper home-courses-slider" pagination={{
                    clickable: true,
                }} modules={[Pagination]} loop={true} grabCursor={true} spaceBetween={20} breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                }}>
                    <div className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide slide">
                            <div className="image">
                                <img src="/Course1-1.png" alt="" />
                                <h3>Coding</h3>
                            </div>
                            <div className="content">
                                <h3>Coding</h3>
                                <p>
                                Coding is the process of writing instructions to a computer in a language that it can understand and execute...
                                </p>
                                <Link href="/blog/coding" className={styles.btn}>
                                    read more
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide slide">
                            <div className="image">
                                <img src="/emp2.png" alt="" />
                                <h3>Electro Mechanical &amp;Production</h3>
                            </div>
                            <div className="content">
                                <h3>Electro Mechanical &amp; Production</h3>
                                <p>
                                The process of creating products using electrical and mechanical components to assemble parts, materials, and systems...
                                </p>
                                <Link href="/blog/electro-mechanical-production" className={styles.btn}>
                                    read more
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide slide">
                            <div className="image">
                                <img src="/finance.png" alt="" />
                                <h3>Finance &amp; Accounting</h3>
                            </div>
                            <div className="content">
                                <h3>Finance &amp; Accounting</h3>
                                <p>
                                Finance and accounting involve the management of money and resources through budgeting, forecasting, and analyzing financial data...
                                </p>
                                <Link href="/blog/finance" className={styles.btn}>
                                    read more
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide slide">
                            <div className="image">
                                <img src="/robotics.png" alt="" />
                                <h3>Robotics</h3>
                            </div>
                            <div className="content">
                                <h3>Robotics</h3>
                                <p>
                                Robotics is the engineering science and technology of creating robots and systems for automation and performing complex tasks...
                                </p>
                                <Link href="/blog/robotics" className={styles.btn}>
                                    read more
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide slide">
                            <div className="image">
                                <img src="/fashion bg.png" alt="" />
                                <h3>Fashion Design And Aesthetics</h3>
                            </div>
                            <div className="content">
                                <h3>Fashion Design And Aesthetics</h3>
                                <p>
                                Creating unique garments and accessories that express personal style and reflect current trends...
                                </p>
                                <Link href="/blog/fashion" className={styles.btn}>
                                    read more
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide slide">
                            <div className="image">
                                <img src="/dmd1.png" alt="" />
                                <h3>Digital Media &amp; Design</h3>
                            </div>
                            <div className="content">
                                <h3>Digital Media &amp; Design</h3>
                                <p>
                                Digital Media & Designing is the art of creating digital content and visual designs to communicate ideas and messages through digital media...
                                </p>
                                <Link href="blog/digital-media-and-designing" className={styles.btn}>
                                    read more
                                </Link>
                            </div>
                        </SwiperSlide>
                        
                        
                    </div>
                </Swiper>
            </section>


            <Footer />
        </>
    )
}


export default Index



