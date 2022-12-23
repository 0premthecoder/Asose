import React, { useState } from 'react'
import Header from "./components/Header";
import HomeHeader from "./components/HomeHeader";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/bundle";
import Image from 'next/image'
import Footer from './components/Footer';
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
            <Header/>
            <HomeHeader />
            {/* home section ends */}
            {/* subjects section starts  */}
            <section className="subjects">
                <h1 className="heading">our popular subjects</h1>
                <div className="box-container">
                    <div className="box">
                        <Image
                            src="/dmd.png"
                            alt="Picture of the author"
                            width={100}
                            height={100}
                        />
                        <h3>Digital Media &amp; Design</h3>
                    </div>
                    <div className="box">
                        <Image
                            src="/finance.png"
                            alt="Picture of the author"
                            width={100}
                            height={100}
                        />
                        <h3>Finance &amp; Accounting</h3>
                    </div>
                    <div className="box">
                        <Image
                            src="/emp.png"
                            alt="Picture of the author"
                            width={100}
                            height={100}
                        />
                        <h3>Electro magnatic &amp; Production</h3>
                    </div>
                    <div className="box">
                        <Image
                            src="/Coding logo.png"
                            alt="Picture of the author"
                            width={100}
                            height={100}
                        />
                        <h3>Coding</h3>
                    </div>
                    <div className="box">
                        <Image
                            src="/fashion.png"
                            alt="Picture of the author"
                            width={100}
                            height={100}
                        />
                        <h3>Fashion Designing</h3>
                    </div>
                    <div className="box">
                        <Image
                            src="/robo.png"
                            alt="Picture of the author"
                            width={100}
                            height={100}
                        />
                        <h3>Robotics</h3>
                    </div>
                </div>
            </section>
            {/* subjects section ends */}
            {/* home courses slider section starts  */}
            <section className="home-courses .home-courses-slider" >
                <h1 className="heading"> Our Popular Skills </h1>
                <Swiper className="swiper home-courses-slider" loop={true} grabCursor={true} spaceBetween={20} breakpoints={{
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
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
                                    ratione?
                                </p>
                                <a href="coding.html" className="btn">
                                    read more
                                </a>
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
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
                                    ratione?
                                </p>
                                <a href="robotics.html" className="btn">
                                    read more
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide slide">
                            <div className="image">
                                <img src="/fashion bg.png" alt="" />
                                <h3>Fashion Designing</h3>
                            </div>
                            <div className="content">
                                <h3>Fashion Designing</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
                                    ratione?
                                </p>
                                <a href="fashion.html" className="btn">
                                    read more
                                </a>
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
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
                                    ratione?
                                </p>
                                <a href="dmd.html" className="btn">
                                    read more
                                </a>
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
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
                                    ratione?
                                </p>
                                <a href="Finance.html" className="btn">
                                    read more
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide slide">
                            <div className="image">
                                <img src="/emp2.png" alt="" />
                                <h3>Electro Machanical Production</h3>
                            </div>
                            <div className="content">
                                <h3>Electro Magnatic &amp; Production</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
                                    ratione?
                                </p>
                                <a href="emp.html" className="btn">
                                    read more
                                </a>
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




