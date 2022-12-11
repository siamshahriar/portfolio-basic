import React from "react";
import { FaSchool, FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24 min-h-[860px]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            How do we create success
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>

        <ul className="max-w-md mx-auto mt-16 space-y-12">
          <li className="relative flex items-start">
            <div
              className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
              aria-hidden="true"
            ></div>

            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
              <FaGraduationCap className="h-6 w-6"></FaGraduationCap>
            </div>
            <div className="ml-6">
              <h3 className="text-lg font-semibold text-black">
                Daffodil International University
              </h3>
              <p className="mt-4 text-base text-gray-600">
                BSc in Computer Science & Engineering
              </p>
              <p className="mt-4 text-base text-gray-600">2019 - Present</p>
            </div>
          </li>

          <li className="relative flex items-start">
            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
              <FaSchool className="h-6 w-6"></FaSchool>
            </div>
            <div className="ml-6">
              <h3 className="text-lg font-semibold text-black">
                Govt. Science School Tejgaon
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Higher Secondary School
              </p>
              <p className="mt-4 text-base text-gray-600">2015 - 2017</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
