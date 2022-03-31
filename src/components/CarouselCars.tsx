import React from "react";
import "./CarouselCars.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import CarouselCarItems from "./CarouselCarItems";
import "swiper/css";
import "swiper/css/bundle";
type Props = {};

const CarouselCars = (props: Props) => {
  return (
    <div className="carousel-cars container-main">
      <div className="carousel-title">
        <h4>
          Choose Your Electric Cars <br />
          Of The Porcher Brand
        </h4>
      </div>
      <Swiper
        className="carousel-slide"
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <CarouselCarItems />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCarItems />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCarItems />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCarItems />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselCars;
