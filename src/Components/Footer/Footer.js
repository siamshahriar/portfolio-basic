import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaFacebook, FaLinkedin, FaFacebookMessenger } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <div className="flex">
        <a
          href="https://www.linkedin.com/in/siam-shahriar/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin></FaLinkedin>
        </a>
        <a
          href="https://github.com/siamshahriar"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub></BsGithub>
        </a>{" "}
        <span>Md. Shahriar Rahman</span>
        <a
          href="https://www.facebook.com/mdshahriarrahman.siam/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook></FaFacebook>
        </a>
        <a
          href="https://m.me/mdshahriarrahman.siam/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookMessenger></FaFacebookMessenger>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
