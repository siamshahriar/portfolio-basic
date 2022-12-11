import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import image1 from "../../Assets/ProjectsThumb/mobile.png";
import image2 from "../../Assets/ProjectsThumb/business.png";
import image3 from "../../Assets/ProjectsThumb/bdix.png";

const Projects = () => {
  return (
    <div>
      <section className="min-h-[863px]">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-center text-white capitalize lg:text-4xl ">
            Projects
          </h1>

          <div className="grid grid-cols-1 gap-3 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-3">
            {/* first  */}
            <div className="card bg-base-200 shadow-xl">
              <figure>
                <img src={image1} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Mobile Buy & Sell Service
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>A place to buy and sell used phones, tablets</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">ReactJs</div>
                  <div className="badge badge-outline">TailwindCSS</div>
                  <div className="badge badge-outline">MongoDB</div>
                  <div className="badge badge-outline">ExpressJs</div>
                </div>
              </div>
              <div className="p-4 flex justify-center gap-3">
                <a
                  href="https://mobile-buy-sell.web.app/"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  target="_blank"
                >
                  Live-Site
                </a>
                <a
                  href="https://github.com/siamshahriar/mobile-buy-sell-system-client"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  target="_blank"
                >
                  Client<FaGithub className="ml-1"></FaGithub>
                </a>
                <a
                  href="https://github.com/siamshahriar/mobile-buy-sell-system-server"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  target="_blank"
                >
                  Server<FaGithub className="ml-1"></FaGithub>
                </a>
              </div>
              <div className="flex justify-center pb-4">
                <Link to="/project1" className="btn btn-secondary w-1/2">
                  View Details
                </Link>
              </div>
            </div>
            {/* second  */}
            <div className="card bg-base-200 shadow-xl">
              <figure>
                <img src={image2} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Business Consultant Reviews
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Review sharing website about services</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">ReactJs</div>
                  <div className="badge badge-outline">TailwindCSS</div>
                  <div className="badge badge-outline">MongoDB</div>
                  <div className="badge badge-outline">ExpressJs</div>
                </div>
              </div>
              <div className="p-4 flex justify-center gap-3">
                <a
                  href="https://business-conslt-service.web.app/"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  target="_blank"
                >
                  Live-Site
                </a>
                <a
                  href="https://github.com/siamshahriar/business-cons-service-client"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  target="_blank"
                >
                  Client<FaGithub className="ml-1"></FaGithub>
                </a>
                <a
                  href="https://github.com/siamshahriar/business-cons-service-server"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  target="_blank"
                >
                  Server<FaGithub className="ml-1"></FaGithub>
                </a>
              </div>
              <div className="flex justify-center pb-4">
                <Link to="/project2" className="btn btn-secondary w-1/2">
                  View Details
                </Link>
              </div>
            </div>
            {/* third  */}
            <div className="card bg-base-200 shadow-xl">
              <figure>
                <img src={image3} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  BDIX VPN & VPS Service
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>BDIX VPN & VPS Packages Details</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">ReactJs</div>
                  <div className="badge badge-outline">TailwindCSS</div>
                  <div className="badge badge-outline">NodeJs</div>
                  <div className="badge badge-outline">ExpressJs</div>
                </div>
              </div>
              <div className="p-4 flex justify-center gap-3">
                <a
                  href="https://bdix-vpns.web.app/"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  target="_blank"
                >
                  Live-Site
                </a>
                <a
                  href="https://github.com/siamshahriar/Bdix-vpn-client"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  target="_blank"
                >
                  Client<FaGithub className="ml-1"></FaGithub>
                </a>
                <a
                  href="https://github.com/siamshahriar/bdix-vpn-server"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  target="_blank"
                >
                  Server<FaGithub className="ml-1"></FaGithub>
                </a>
              </div>
              <div className="flex justify-center pb-4">
                <Link to="/project1" className="btn btn-secondary w-1/2">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
