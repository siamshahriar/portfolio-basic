import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-[863px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://avatars.githubusercontent.com/u/72511886?v=4"
            className="max-w-sm rounded-2xl shadow-2xl lg:mr-10"
            alt=""
          />
          <div>
            <h1 className="text-3xl font-semibold mb-4">Hello</h1>
            <h1 className="text-xl font-medium mb-6">I'm</h1>
            <h1 className="text-5xl font-bold mb-5">Md. Shahriar Rahman</h1>
            <h1 className="text-3xl font-semibold">FrontEnd Web Developer</h1>
            <p className="py-6 mb-6">
              Junior Web Developer with experience of building sites from
              scratch, full responsive react web site with mongoDB database.
            </p>
            <a
              href="https://drive.google.com/file/d/1n0G8yXAuZLZvbOaiHhEHIzpdCkk9FPVj/view?usp=share_link"
              target="_blank"
              className="btn btn-primary text-white"
              rel="noreferrer"
            >
              Resume
            </a>
            <Link to="/contact" className="btn btn-secondary ml-4 text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
