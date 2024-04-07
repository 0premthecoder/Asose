import React from "react";
import MainCarousel from "./Carousel/mainCarousel"
// import Image from "next/image";
export default function HomeHeader() {
    return <section className="home">
        <div className="swiper home-slider">
            <div className="swiper-wrapper">
                <MainCarousel/>
            </div>
            <div className="swiper-pagination" />
        </div>
    </section>;
}
