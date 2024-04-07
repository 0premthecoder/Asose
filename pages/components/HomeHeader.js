import React from "react";
import MainCarousel from "./Carousel/mainCarousel"
// import Image from "next/image";
export default function HomeHeader() {
    return <section className="home">

        <div className="swiper home-slider">
            <div className="content" style={{ "margin": "10rem", "position": "absolute", "zIndex": "100", "filter": "blur", "width":"52rem","backdropFilter":"blur(4px)","padding":"10px" }} >
                <h1 style={{
                    "fontSize": " 5rem",
                    "textTransform": "capitalize",
                    "color": "#444",
                    "color": "#fff",
                }}>Dr.B.R.Ambedkar School of Specialised Excellence</h1>
                <p style={{
                    "fontSize": "1.6rem",
                    "lineHeight": "2",
                    "color": "#777",
                    "color": "#eee",
                    "padding": "1rem 0",
                }}>HE-21 Century Skill,Dwarka Sector-5</p>
            {/*<a href="#" class="btn">Read more</a>*/}

        </div>
        <div className="swiper-wrapper">
            <MainCarousel />

        </div>
        <div className="swiper-pagination" />
    </div>
    </section >;
}
