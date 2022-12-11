import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import image1 from "../../../Assets/Project1/1.png";
import image2 from "../../../Assets/Project1/2.png";
import image3 from "../../../Assets/Project1/3.png";
import image4 from "../../../Assets/Project1/4.png";
import image5 from "../../../Assets/Project1/5.png";
import image6 from "../../../Assets/Project1/6.png";

const Project1 = () => {
  return (
    <div className="min-h-[863px] lg:px-[200px]">
      <p>Snapshots</p>
      <div className="flex justify-center">
        <Swiper
          className="h-[498px]"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img
              className="h-[500px] object-cover w-full"
              src={image1}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[500px] object-cover w-full"
              src={image2}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[500px] object-cover w-full"
              src={image3}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[500px] object-cover w-full"
              src={image4}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[500px] object-cover w-full"
              src={image5}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[500px] object-cover w-full"
              src={image6}
              alt=""
            />
          </SwiperSlide>
          ...
        </Swiper>
      </div>

      <h2>Mobile Buy & Sell Service</h2>
      <p>A place to buy and sell used phones, tablets</p>
    </div>
  );
};

export default Project1;
