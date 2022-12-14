import React, { useEffect } from "react";
import { FaSchool, FaGraduationCap } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="py-10 bg-base-100 sm:py-16 lg:py-24 min-h-[860px] text-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Education
          </h2>
        </div>

        <ul className="max-w-md mx-auto mt-16 space-y-12 lg:mt-[130px]">
          <li
            data-aos="fade-up"
            data-aos-duration="1500"
            className="relative flex items-start"
          >
            <div
              className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
              aria-hidden="true"
            ></div>

            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow text-black">
              <FaGraduationCap className="h-6 w-6"></FaGraduationCap>
            </div>
            <div className="ml-6">
              <h3 className="text-lg font-semibold text-white">
                Daffodil International University
              </h3>
              <p className="mt-4 text-base text-gray-400">
                BSc in Computer Science & Engineering
              </p>
              <p className="mt-4 text-base text-gray-400">2019 - Present</p>
            </div>
          </li>

          <li
            data-aos="fade-up"
            data-aos-duration="1500"
            className="relative flex items-start"
          >
            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow text-black">
              <FaSchool className="h-6 w-6 "></FaSchool>
            </div>
            <div className="ml-6">
              <h3 className="text-lg font-semibold text-white">
                Govt. Science School Tejgaon
              </h3>
              <p className="mt-4 text-base text-gray-400">
                Higher Secondary School
              </p>
              <p className="mt-4 text-base text-gray-400">2015 - 2017</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
