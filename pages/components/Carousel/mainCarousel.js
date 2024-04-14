import React from "react";
import { MainCrouselData } from "../../../firebase/mainCarouselData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const MainCarousel = () => {
  const items = MainCrouselData.map((item) => (
    <img style={{height:"60rem",width:"100%"}}
      className="cursor-pointer"
      role="presentation"
      src={item.image}
      alt=""
    />
  ));

  return (
    <AliceCarousel
      items={items}
      
      disableButtonsControls
      autoPlay
      autoPlayInterval={5000}
      infinite
    />
  );
};

export default MainCarousel;