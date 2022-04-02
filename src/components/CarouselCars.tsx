import React, { useEffect } from "react";
import "./CarouselCars.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import CarouselCarItems from "./CarouselCarItems";
import "swiper/css";
import "swiper/css/bundle";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { readCategory } from "../features/category/categorySlice";
type Props = {};

const CarouselCars = (props: Props) => {
  const {products, category} = useAppSelector((data: any) => data.category.value);
  const dispath = useAppDispatch();

  useEffect(() => {
    dispath(readCategory("62470531c2b69977c07a98fd"));
  }, []);
  return (
    <div className="carousel-cars container-main">
      <div className="carousel-title">
        <h4>
          Choose Your Electric Cars <br />
          Of The Porche Brand
        </h4>
      </div>
      <Swiper
        className="carousel-slide"
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
      >
        {products?.map((item: any, index: any) => {
          return (
            <SwiperSlide key={index}>
              <CarouselCarItems product={item} category={category}/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CarouselCars;
