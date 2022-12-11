import React from "react";

const About = () => {
  return (
    <div className="flex justify-evenly  max-w-5xl mx-auto min-h-[863px] items-center">
      <div className="">
        <div className="card h-[500px] w-80  glass">
          <figure>
            <img
              src="https://avatars.githubusercontent.com/u/72511886?v=4"
              alt="car!"
            />
          </figure>
          <div className="card-body border-none">
            <h2 className="card-title">Md. Shahriar Rahman</h2>
            <p>
              Junior Web Developer with experience of building sites from
              scratch, full responsive react web site with mongoDB database,
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-bold mb-10">Skills</h2>
        <div>
          <h2 className="text-3xl mb-8">Frontend</h2>
          <div>
            <span className="bg-base-300 p-2 rounded-lg mr-3">Javascript</span>
            <span className="bg-base-300 p-2 rounded-lg mr-3">ReactJs</span>
            <span className="bg-base-300 p-2 rounded-lg mr-3">TailwindCSS</span>
            <span className="bg-base-300 p-2 rounded-lg mr-3">Bootstrap</span>
          </div>
        </div>

        <div>
          <h2 className="text-3xl mb-6 mt-6">Backend</h2>
          <div>
            <span className="bg-base-300 p-2 rounded-lg mr-3">ExpressJs</span>
            <span className="bg-base-300 p-2 rounded-lg mr-3">NodeJs</span>
          </div>
        </div>
        <div>
          <h2 className="text-3xl mb-6 mt-6">Database</h2>
          <div>
            <span className="bg-base-300 p-2 rounded-lg mr-3">MongoDB</span>
          </div>
        </div>

        <div>
          <h2 className="text-3xl mb-6 mt-6">Tools</h2>
          <div>
            <span className="bg-base-300 p-2 rounded-lg mr-3">Git</span>
            <span className="bg-base-300 p-2 rounded-lg mr-3">Github</span>
            <span className="bg-base-300 p-2 rounded-lg mr-3">Firebase</span>
            <span className="bg-base-300 p-2 rounded-lg mr-3">Netlify</span>
            <span className="bg-base-300 p-2 rounded-lg mr-3">Vercel</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
