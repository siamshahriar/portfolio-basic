import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import image1 from "../../../Assets/Project3/1.png";
import image2 from "../../../Assets/Project3/2.png";
import image3 from "../../../Assets/Project3/3.png";
import image4 from "../../../Assets/Project3/4.png";
import image5 from "../../../Assets/Project3/5.png";
import image6 from "../../../Assets/Project3/6.png";

import { BsArrowRightCircle } from "react-icons/bs";

const Project3 = () => {
  return (
    <div className="min-h-[863px] lg:px-[200px]">
      <h2 className="text-3xl font-bold text-center pt-10 text-gray-300">
        BDIX VPN & VPS Service
      </h2>
      <p className="text-lg text-center pt-4">
        BDIX VPN & VPS Packages Details
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
      <p className="mt-10 text-2xl font-semibold text-center">
        Used Technologies
      </p>
      <p className="mt-4 text-lg font-semibold flex flex-wrap justify-center  gap-3 lg:gap-0">
        <span className="bg-gray-700 p-2 rounded-lg text-base mr-3">
          ReactJs
        </span>
        <span className="bg-gray-700 p-2 rounded-lg text-base mr-3">
          Bootstrap
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
            The Homepage contains all the VPN VPS packages with selectable
            cataogries. When user selects the catagory, that catagory's packages
            loads only.
          </span>
        </p>
        <p className="pb-3">
          <BsArrowRightCircle className="inline"></BsArrowRightCircle>{" "}
          <span>
            By clicking the See details button of each package, it takes to
            another directory where the same package loads with description.
          </span>
        </p>
        <p className="pb-3">
          <BsArrowRightCircle className="inline"></BsArrowRightCircle>{" "}
          <span>
            In the description page, there is PDF icon at the top position of
            the package, if user clicks the button, a downloadable file is
            generated with the data of that package and the download starts
            automatically.
          </span>
        </p>
        <p className="pb-3">
          <BsArrowRightCircle className="inline"></BsArrowRightCircle>{" "}
          <span>
            In the description page, there is a Get premium Access button, if
            user clicks it, it will redirect to the checkout page if he is
            logged in, and if he is not logged in, it will redirect to the login
            page, and after login , it will redirect to product checkout page
            which was the last page.
          </span>
        </p>
        <p className="pb-3">
          <BsArrowRightCircle className="inline"></BsArrowRightCircle>{" "}
          <span>
            The Checkout page contains the products short description, it's
            price and quantity including shipping charge and vat tax charges.
          </span>
        </p>
        <p className="pb-3">
          <BsArrowRightCircle className="inline"></BsArrowRightCircle>{" "}
          <span>
            In the FAQ section, there is a indtroductory blog about what is VPN
            and how it works.
          </span>
        </p>
        <p className="pb-3">
          <BsArrowRightCircle className="inline"></BsArrowRightCircle>{" "}
          <span>
            In the Blog section, four important questions and their answers are
            there.
          </span>
        </p>
        <p className="pb-3">
          <BsArrowRightCircle className="inline"></BsArrowRightCircle>{" "}
          <span>
            The error page basically demonstrate what will be 404 error look
            like if user redirect to any invalid url.
          </span>
        </p>
        <p className="pb-3">
          <BsArrowRightCircle className="inline"></BsArrowRightCircle>{" "}
          <span>
            In the navbar, if user is not logged in, it will show the Login and
            Registration button and a animated icon for profile picture, if the
            mouse hover over the picture, it will display a tooltip named "no
            name". And when user is logged in, it will show his/her name.
          </span>
        </p>
        <p className="pb-3">
          <BsArrowRightCircle className="inline"></BsArrowRightCircle>{" "}
          <span>
            The registration page contains three type of registration, the user
            can register using his/her name, email, picture, password by filling
            up the form, or they can just simply click on the Google or Github
            Icon and a pop up tab will appear and their registration will be
            completed.
          </span>
        </p>
        <p className="pb-3">
          <BsArrowRightCircle className="inline"></BsArrowRightCircle>{" "}
          <span>
            The Login page also contains these three type of login, one with
            filling up the form, others with Google and Github.
          </span>
        </p>
        <p className="pb-3">
          <BsArrowRightCircle className="inline"></BsArrowRightCircle>{" "}
          <span>
            If user logs in or get registered, in the navbar, there shows the
            user's profile picture if he give the link of profile picture at the
            time of registration or, if he has picture in his Google or Github
            Account.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Project3;
