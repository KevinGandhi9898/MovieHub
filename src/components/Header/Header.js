import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-full px-2 md:px-12 lg:px-20 bg-neutral text-white py-3 shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/">
            <h1 className="text-3xl font-semibold text-primary flex items-center gap-2">
              <span>MovieHub</span>
            </h1>
          </Link>
          <br /><br />
          <NavLink to="/" className="hidden sm:block hover:text-secondary duration-300">
            Movies
          </NavLink>
          <NavLink to="/" className="hidden sm:block hover:text-secondary duration-300">
            Series
          </NavLink>
          <NavLink to="/" className="hidden sm:block hover:text-secondary duration-300">
            Shows
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          <NavLink to="/" className="hidden sm:block hover:text-secondary duration-300">
            About Us
          </NavLink>
          <NavLink to="/" className="hover:text-secondary duration-300">
            Sign In
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;