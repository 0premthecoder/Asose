import Header from "./components/Header";
import React from "react";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from "./components/Footer";
import Link from "next/link";
function About() {
    return (
        <>
            <Header />
            <section class="heading-link">
                <h3>about us</h3>
                <p> <Link href="/">home</Link> / about </p>
            </section>

            <section className="about" >

                <div className="image">
                    <img src="/about-img.jpg" alt="" />
                </div>

                <div className="content">
                    <h3 className="about-title">we have best skill courses for you</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam hic magnam fugit exercitationem neque, quae laboriosam natus. Ut maxime assumenda facere ea quasi accusamus dolores delectus tempora animi, expedita iste.</p>
                    <div className="icons-container">
                        <div className="icons">
                            <img src="/about-icon-1.png" alt="" />
                            <h3>6+</h3>
                            <span>skill courses</span>
                        </div>
                        <div className="icons">
                            <img src="/about-icon-2.png" alt="" />
                            <h3>300+</h3>
                            <span>students</span>
                        </div>
                        <div className="icons">
                            <img src="/about-icon-3.png" alt="" />
                            <h3>10+</h3>
                            <span>awards</span>
                        </div>
                    </div>
                </div>

            </section>
            {/* about section ends */}

            {/* teachers section starts  */}

            <section className="teachers">

                <h1 className="heading">Expert facilitators</h1>

                <Swiper className="swiper teachers-slider" loop={true} grabCursor={true} spaceBetween={20} breakpoints={{
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
                                <h3>Teacher</h3>
                                <span>expert coder</span>
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
                                <h3>H.R Sharma</h3>
                                <span>HOS of School</span>
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
                            <h3>shubham</h3>
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
                            <img src="/pic-3.png" alt="" />
                            <h3>Prem</h3>
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