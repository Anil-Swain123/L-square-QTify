import React, {useEffect} from "react";
import styles from "./Carousel.module.css";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import { useSwiper } from "swiper/react";

// Import Swiper styles
import 'swiper/css';

const Controls = ({data})=>{
    const swiper = useSwiper();
    useEffect(()=>{
        swiper.slideTo(0);
    }, [data]);
    return <></>;
}

export default function Carousel({data, renderComponent}) {
  return (
    <div classsName = {styles.wrapper}>
    <Swiper
      // install Swiper modules
      style = {{padding: "0px, 20px"}}
      initialSlide={0}
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={"auto"}
      allowTouchMove
    >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map((ele)=>(
            <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
         ))}
    </Swiper>
    </div>
  );
};