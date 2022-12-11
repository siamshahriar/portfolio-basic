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

import { BsArrowRightCircle } from "react-icons/bs";

const Project1 = () => {
  return (
    <div className="min-h-[863px] lg:px-[200px]">
      <h2 className="text-3xl font-bold text-center pt-10 text-gray-300">
        Mobile Buy & Sell Service
      </h2>
      <p className="text-lg text-center pt-4">
        A place to buy and sell used phones, tablets
      </p>
      <p className="text-2xl text-center pt-8 pb-6 font-bold text-gray-300">
        Snapshots
      </p>
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
      <p className="mt-8 text-lg font-semibold">
        Used Technologies:{" "}
        <span className="bg-gray-700 p-2 rounded-lg text-base mr-3">
          ReactJs
        </span>
        <span className="bg-gray-700 p-2 rounded-lg text-base mr-3">
          TailwindCSS
        </span>
        <span className="bg-gray-700 p-2 rounded-lg text-base mr-3">
          MongoDB
        </span>
        <span className="bg-gray-700 p-2 rounded-lg text-base mr-3">
          ExpressJs
        </span>
        <span className="bg-gray-700 p-2 rounded-lg text-base mr-3">
          NodeJs
        </span>
        <span className="bg-gray-700 p-2 rounded-lg text-base mr-3">
          Firebase
        </span>
      </p>
      <p className="mt-12 text-2xl font-semibold text-center">Features </p>
      <div className="mt-6 mb-8">
        {" "}
        <p className="pb-3">
          <BsArrowRightCircle className="inline"></BsArrowRightCircle>{" "}
          <span>
            In the HomePage, there is a banner, Advertise Item where the
            Advertised item are shown, Category section and a Footer
          </span>
        </p>
        <p className="pb-3">
          <BsArrowRightCircle className="inline"></BsArrowRightCircle>{" "}
          <span>
            In the Category Section, sepeicifc category items are shown with
            full details and verification icon of the seller
          </span>
        </p>
        <p className="pb-3">
          <BsArrowRightCircle className="inline"></BsArrowRightCircle>{" "}
          <span>
            Each Items have details information and booking and Report to admin
            option
          </span>
        </p>
        <p className="pb-3">
          <BsArrowRightCircle className="inline"></BsArrowRightCircle>{" "}
          <span>
            There are 3 type of user who can use this site, as seller, as buyer,
            as admin
          </span>
        </p>
        <p className="pb-3">
          <BsArrowRightCircle className="inline"></BsArrowRightCircle>{" "}
          <span>
            Dashboard will be shown these 3 type of users according to their
            roles
          </span>
        </p>
        <p className="pb-3">
          <BsArrowRightCircle className="inline"></BsArrowRightCircle>{" "}
          <span>
            Buyer Can Book Product, then go the Dashboard, see his booked
            products and can make Payment and that product will be hidden from
            the site
          </span>
        </p>
        <p className="pb-3">
          <BsArrowRightCircle className="inline"></BsArrowRightCircle>{" "}
          <span>
            Seller can add a product, delete it, advertise it in dashboard.
          </span>
        </p>
        <p className="pb-3">
          <BsArrowRightCircle className="inline"></BsArrowRightCircle>{" "}
          <span>
            Admin can see the list of the sellers and buyers and reported items
            and can delete them, and verify the sellers.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Project1;
