import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-10 lg:gap-16   min-h-[863px] items-center">
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        className="flex flex-col justify-center items-center lg:items-end"
      >
        <div className="">
          <img
            className="rounded-full mt-10 lg:mt-0 h-[200px] lg:h-[300px] border-cyan-700 border-4 "
            src="https://avatars.githubusercontent.com/u/72511886?v=4"
            alt=""
          />
        </div>
        <p className="text-2xl mt-4 font-semibold">Md. Shahriar Rahman</p>
        <p className="text-base font-thin text-center lg:text-right mt-3 max-w-md">
          I am an enthusiastic tech geek. I am currently pursuing B.Sc. in CSE
          in Daffodil International University with a target to enrich my
          development skills and to have strong analytical skills. I know myself
          as a self motivated, self problem solver, taking responsibility at
          every step, and a highly disciplined person who can learn a lot during
          any time of the week facing any critical conditions.
        </p>
      </div>
      <div
        className=" text-center lg:text-left"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <h2 className="text-4xl font-bold mb-10 text-gray-300 ">Skills</h2>
        <div className="">
          <h2 className="text-3xl mb-6 ">Frontend</h2>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-0">
            <span className="bg-gray-700 p-2 rounded-lg mr-3 ">Javascript</span>
            <span className="bg-gray-700 p-2 rounded-lg mr-3 ">ReactJs</span>
            <span className="bg-gray-700 p-2 rounded-lg mr-3 ">
              TailwindCSS
            </span>
            <span className="bg-gray-700 p-2 rounded-lg mr-3  ">
              Bootstraps
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-3xl mb-6 mt-6">Backend</h2>
          <div>
            <span className="bg-gray-700 p-2 rounded-lg mr-3">ExpressJs</span>
            <span className="bg-gray-700 p-2 rounded-lg mr-3">NodeJs</span>
          </div>
        </div>
        <div>
          <h2 className="text-3xl mb-6 mt-6">Database</h2>
          <div>
            <span className="bg-gray-700 p-2 rounded-lg mr-3">MongoDB</span>
          </div>
        </div>

        <div>
          <h2 className="text-3xl mb-4 mt-6">Tools</h2>
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-0">
            <span className="bg-gray-700 p-2 rounded-lg mr-3">Git</span>
            <span className="bg-gray-700 p-2 rounded-lg mr-3">Github</span>
            <span className="bg-gray-700 p-2 rounded-lg mr-3">Firebase</span>
            <span className="bg-gray-700 p-2 rounded-lg mr-3">Netlify</span>
            <span className="bg-gray-700 p-2 rounded-lg mr-3">Vercel</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
