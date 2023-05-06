import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral p-8 text-center w-full text-white flex items-center justify-between flex-wrap">
      <Link to="/">
        <h1 className="text-3xl font-semibold text-primary flex items-center gap-2">
          <span>MovieHub</span>
        </h1>
      </Link>

      <p>&copy; 2023 All Rights Reserved</p>
      <p>
        Developed by{" "}
        <a
          href="https://checkiamsiam.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Kevin Gandhi
        </a>
      </p>
    </footer>
  );
};

export default Footer;