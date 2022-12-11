import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-[863px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://avatars.githubusercontent.com/u/72511886?v=4"
            className="max-w-sm rounded-full border-4 border-cyan-700 shadow-2xl lg:mr-10"
            alt=""
          />
          <div>
            <h1 className="text-3xl font-semibold mb-4">Hello</h1>
            <h1 className="text-xl font-medium mb-6">I'm</h1>
            <h1 className="text-5xl font-bold mb-5">Md. Shahriar Rahman</h1>
            <h1 className="text-3xl font-semibold text-blue-400">
              <Typewriter
                words={[
                  "FrontEnd Web Developer",
                  "MERN Stack Developer",
                  "Programmer",
                  "Problem Solver",
                ]}
                loop={50}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </h1>
            <p className="py-6 mb-6">
              Junior Web Developer with experience of building sites from
              scratch, full responsive web site with ReactJs as Frontend MongoDB
              as database, ExpressJs, NodeJs as Backend.
            </p>
            <a
              href="https://drive.google.com/file/d/1n0G8yXAuZLZvbOaiHhEHIzpdCkk9FPVj/view?usp=share_link"
              target="_blank"
              className="btn btn-success text-white"
              rel="noreferrer"
            >
              Resume
            </a>
            <Link to="/contact" className="btn btn-outline ml-4 text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
