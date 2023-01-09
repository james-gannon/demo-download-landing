import React from "react";
import styles from "../styles/Global";
import assets from "../assets/assets";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between px-5 py-4 bg-black text-white">
      <a class="logo" href="#home" className="flex">
        <img src={assets.expowhite} alt="company logo" className="h-6 px-4" />
        Company Name
      </a>
      <nav id="header" className="nav justify-end z-1000">
        <ul className="flex ">
          <li className="rounded-lg transition-all duration-200 shadow-outline-white hover:bg-white hover:text-black">
            <Link to="#about" class="nav-link active px-2 py-1">
              About
            </Link>
          </li>
          <li className="rounded-lg transition-all duration-200 shadow-outline-white hover:bg-white hover:text-black">
            <Link to="#features" class="nav-link px-2 py-1">
              Features
            </Link>
          </li>
          <li className="rounded-lg transition-all duration-200 shadow-outline-white hover:bg-white hover:text-black">
            <a class="nav-link px-2 py-1" href="#product">
              Product
            </a>
          </li>
          <li className="rounded-lg transition-all duration-200 shadow-outline-white hover:bg-white hover:text-black">
            <a class="nav-link px-2 py-1" href="#demo">
              Demo
            </a>
          </li>
          <li className="rounded-lg transition-all duration-200 shadow-outline-white hover:bg-white hover:text-black">
            <a class="nav-link px-2 py-1" href="#download">
              Download
            </a>
          </li>
          <li className="rounded-lg transition-all duration-200 shadow-outline-white hover:bg-white hover:text-black">
            <a class="nav-link px-2 py-1" href="#contact">
              Contact
            </a>
          </li>
        </ul>

        <div class="hamburger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
