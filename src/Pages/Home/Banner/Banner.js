import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-[863px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://avatars.githubusercontent.com/u/72511886?v=4"
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-3xl font-semibold">Hello</h1>
            <h1 className="text-xl font-medium">I'm</h1>
            <h1 className="text-5xl font-bold">Md. Shahriar Rahman</h1>
            <h1 className="text-3xl font-semibold">FrontEnd Web Developer</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <a
              href="https://drive.google.com/file/d/1n0G8yXAuZLZvbOaiHhEHIzpdCkk9FPVj/view?usp=share_link"
              target="_blank"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Resume
            </a>
            <button className="btn btn-primary">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
