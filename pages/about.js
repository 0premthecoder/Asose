import Header from "./components/Header";
import React from "react";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from "./components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Pagination } from "swiper";
function About() {
    return (
        <>
            <Header />
            <section class="heading-link">
                <h3>about us</h3>
                <p> <Link href="/">home</Link> / about </p>
            </section>
            <section className="subjects">
                <h1 className="heading">We Have Best Skill Courses For You</h1>
                <div className="box-container">
                    <div className="box">
                    <Link href={'/blog/digital-media-and-designing'}>
                    <Image
                            src="/dmd.png"
                            alt="Picture of the author"
                            width={100}
                            height={100}
                        />
                    </Link>
                        
                         <Link href={'/blog/digital-media-and-designing'}>
                         <h3>Digital Media &amp; Design</h3>
                         </Link>
                        
                    </div>
                    <div className="box">
                    <Link href={'/blog/finance'}>
                    <Image
                            src="/finance.png"
                            alt="Picture of the author"
                            width={100}
                            height={100}
                        />
                    </Link>
                    <Link href={'/blog/finance'}>
                    <h3>Finance &amp; Accounting</h3>
                    </Link>
                       
                    </div>
                    <div className="box">
                        <Link href={'/blog/electro-mechanical-production'}>
                            <Image
                            src="/emp.png"
                            alt="Picture of the author"
                            width={100}
                            height={100}
                        />
                        </Link>
                        
                         <Link href={'/blog/electro-mechanical-production'}>
                            <h3>Electro Mechanical &amp; Production</h3>
                            </Link>
                        
                    </div>
                    <div className="box">
                    <Link href={'/blog/coding'}>
                    <Image
                            src="/Coding logo.png"
                            alt="Picture of the author"
                            width={100}
                            height={100}
                        />
                    </Link>
                    <Link href={'/blog/coding'}>
                    <h3>Coding</h3>
                    </Link>
                       
                       
                    </div>
                    <div className="box">
                    <Link href={'/blog/fashion'}>
                    <Image
                            src="/fashion.png"
                            alt="Picture of the author"
                            width={100}
                            height={100}
                        />
                    </Link>   
                        
                         <Link href={'/blog/fashion'}>
                         <h3>Fashion Designing</h3>
                         </Link>
                        
                    </div>
                    <div className="box">
                    <Link href={'/blog/robotics'}>
                    <Image
                            src="/robo.png"
                            alt="Picture of the author"
                            width={100}
                            height={100}
                        />
                    </Link>
                    <Link href={'/blog/robotics'}>
                    <h3>Robotics</h3>
                    </Link>
                        
                    </div>
                </div>
            </section>

           
            {/* about section ends */}

            {/* teachers section starts  */}

            <section className="teachers">

                <h1 className="heading">Expert Coders</h1>

                <Swiper className="swiper teachers-slider"  pagination={{
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
                                <img src="/teacher-2.png" alt="" />
                                <div className="share">
                                    <a href="#" className="fab fa-facebook-f"></a>
                                    <a href="#" className="fab fa-twitter"></a>
                                    <a href="#" className="fab fa-instagram"></a>


                                </div>
                            </div>
                            <div className="content">
                                <h3>Name </h3>
                                <span>Backend Developer</span>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide slide">
                            <div className="image">
                                <img src="/teacher-2.png" alt="" />
                                <div className="share">
                                    <a href="#" className="fab fa-facebook-f"></a>
                                    <a href="#" className="fab fa-twitter"></a>
                                    <a href="#" className="fab fa-instagram"></a>

                                </div>
                            </div>
                            <div className="content">
                                <h3>Name </h3>
                                <span>Fontend Developer</span>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide slide">
                            <div className="image">
                                <img src="/teacher-2.png" alt="" />
                                <div className="share">
                                    <a href="#" className="fab fa-facebook-f"></a>
                                    <a href="#" className="fab fa-twitter"></a>
                                    <a href="#" className="fab fa-instagram"></a>

                                </div>
                            </div>
                            <div className="content">
                                <h3>Teacher</h3>
                                <span>expert coder</span>
                            </div>
                        </SwiperSlide>


                    </div>

                </Swiper>

            </section>

            {/* teachers section ends */}

            {/* students reviews section starts  */}

            <section className="reviews">

                <h1 className="heading"> our students review </h1>

                <Swiper className="swiper reviews-slider" loop={true} grabCursor={true} spaceBetween={20} breakpoints={{
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
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi atque numquam harum libero nemo, eligendi laboriosam beatae quo iure corrupti, neque rerum possimus non nisi quia! Cumque, tempora sit.</p>
                            <img src="/pic-3.png" alt="" />
                            <h3>Student 1</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide slide">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi atque numquam harum libero nemo, eligendi laboriosam beatae quo iure corrupti, neque rerum possimus non nisi quia! Cumque, tempora sit.</p>
                            <img src="/2.jpg" alt="" />
                            <h3>Student 2</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                            </div>
                        </SwiperSlide>


                    </div>
                </Swiper>
            </section>
            <Footer />
        </>
    );
}
export default About;
