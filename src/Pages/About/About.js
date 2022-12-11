import React from "react";


const About = () => {
  return (
    <div className="flex justify-evenly flex-col lg:flex-row lg:gap-16  max-w-5xl mx-auto min-h-[863px] items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="">
          <img
            className="rounded-full h-[300px] border-cyan-700 border-4 "
            src="https://avatars.githubusercontent.com/u/72511886?v=4"
            alt=""
          />
        </div>
        <p className="text-xl mt-4 font-semibold">I am Md. Shahriar Rahman</p>
        <p className="text-base font-thin text-center mt-3">
          I am an enthusiastic tech geek. I am currently pursuing B.Sc. in CSE
          in Daffodil International University with a target to enrich my
          development skills and to have strong analytical skills. I know myself
          as a self motivated, self problem solver, taking responsibility at
          every step, and a highly disciplined person who can learn a lot during
          any time of the week facing any critical conditions.
        </p>
      </div>
      <div>
        <h2 className="text-4xl font-bold mb-10 text-gray-300">Skills</h2>
        <div>
          <h2 className="text-3xl mb-8 ">Frontend</h2>
          <div className="flex flex-col lg:flex-row ">
            <span className="bg-gray-700 p-2 rounded-lg mr-3">Javascript</span>
            <span className="bg-gray-700 p-2 rounded-lg mr-3">ReactJs</span>
            <span className="bg-gray-700 p-2 rounded-lg mr-3">TailwindCSS</span>
            <span className="bg-gray-700 p-2 rounded-lg mr-3">Bootstrap</span>
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
          <h2 className="text-3xl mb-6 mt-6">Tools</h2>
          <div>
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
