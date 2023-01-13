import React from "react";
export default function HomeHeader() {
    return <section className="home">
        <div className="swiper home-slider">
            <div className="swiper-wrapper">
                <section
                    className="swiper-slide slide"
                    style={{ background: "url(./../home-slide-1.jpg) no-repeat" }}
                >
                    
                </section>
            </div>
            <div className="swiper-pagination" />
        </div>
    </section>;
}
