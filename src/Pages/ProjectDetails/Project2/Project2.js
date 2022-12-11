import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import image1 from "../../../Assets/Project2/1.png";
import image2 from "../../../Assets/Project2/2.png";
import image3 from "../../../Assets/Project2/3.png";
import image4 from "../../../Assets/Project2/4.png";
import image5 from "../../../Assets/Project2/5.png";
import image6 from "../../../Assets/Project2/6.png";

import { BsArrowRightCircle } from "react-icons/bs";

const Project2 = () => {
  return (
    <div className="min-h-[863px] lg:px-[200px]">
      <h2 className="text-3xl font-bold text-center pt-10 text-gray-300">
        Business Consultant Reviews
      </h2>
      <p className="text-lg text-center pt-4">
        Review sharing website about services
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
            In The Home page, there is header, footer and home content
          </span>
        </p>
        <p className="pb-3">
          <BsArrowRightCircle className="inline"></BsArrowRightCircle>{" "}
          <span>
            In header, an icon with the website is shown at the left side, in
            the right side there is Login button and and a fav user icon is
            shown by the default if the user is not logged in.
          </span>
        </p>
        <p className="pb-3">
          <BsArrowRightCircle className="inline"></BsArrowRightCircle>{" "}
          <span>
            In the Login page, there is also option for sign in with google
            which requires no sign up.
          </span>
        </p>
        <p className="pb-3">
          <BsArrowRightCircle className="inline"></BsArrowRightCircle>{" "}
          <span>
            If the User logs in, two new direction is shown in the header along
            with Home and blog which is shown by default.
          </span>
        </p>
        <p className="pb-3">
          <BsArrowRightCircle className="inline"></BsArrowRightCircle>{" "}
          <span>
            The home page contains a banner, 3 services and see all button,
            social analytics section, Heroes section.
          </span>
        </p>
        <p className="pb-3">
          <BsArrowRightCircle className="inline"></BsArrowRightCircle>{" "}
          <span>
            If the user clicks see all button, all the service will be shown in
            the new directory, if he clicks see details button, it will redirect
            to a new page containing details about that service and many persons
            review of that specific category service.
          </span>
        </p>
        <p className="pb-3">
          <BsArrowRightCircle className="inline"></BsArrowRightCircle>{" "}
          <span>
            In that service details page , user can add his own review about
            that service which will be visible for every users. When he will
            click add review, a modal will popup containing a form which user
            will fill to add service. The service will be added in the database
            and it will show immidiately in the reviews section. It will show by
            descending order. All the new reviews will be shown first.
          </span>
        </p>
        <p className="pb-3">
          <BsArrowRightCircle className="inline"></BsArrowRightCircle>{" "}
          <span>
            In the My Reviews page, User's own reviews of many services which he
            posted earlier will be shown where he can edit the reviews and
            delete that also. When he will click update, a form will popup and
            he can update that in realtime. The changed will be shown
            immidiately in the updated review.
          </span>
        </p>
        <p className="pb-3">
          <BsArrowRightCircle className="inline"></BsArrowRightCircle>{" "}
          <span>
            In the Add Service page, user can add service by setting up
            category, image, Name of that service. And that service will be
            shown in the all services page.
          </span>
        </p>
        <p className="pb-3">
          <BsArrowRightCircle className="inline"></BsArrowRightCircle>{" "}
          <span>
            When the user is not logged in , if he tries to access a private
            route, he will be redirected to the login page and after login, he
            will be redirected to last private route page which he wanted to
            access.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Project2;
