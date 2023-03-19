import React from "react";
import logo from "../assets/naxa.png";
import { RiArrowDropDownFill } from "react-icons/ri";
import { HashLink } from "react-router-hash-link";

export const NavBar = () => {
  return (
    <nav className=" flex flex-row items-center w-full px-10 sm:px-24 py-6">
      <div className="flex w-full  md:flex-row justify-between items-center text-[18px] ">
        {/* <Link href="/"> */}
        <img className="p-2" src={logo} alt="loho" width={120}></img>
        <ul className="p-2  flex-col  sm:flex-row space-x-8 hidden lg:flex cursor-pointer">
          <li className="flex flex-row items-center">
            <HashLink smooth to="/#services">
              Services
            </HashLink>
          </li>
          <li className="flex flex-row items-center">
            Portfolio <RiArrowDropDownFill />
          </li>
          <li className="flex flex-row items-center">
            Company <RiArrowDropDownFill />
          </li>
          <li className="flex flex-row items-center">
            Events & Media <RiArrowDropDownFill />
          </li>
          <li className="flex flex-row items-center">
            Blogs <RiArrowDropDownFill />
          </li>
        </ul>
        {/* </Link> */}

        <span className="hidden lg:block bg-[#ffdc1c] py-2 px-4 font-bold">
          Let's talk
        </span>
      </div>
      <svg
        xmlns="<http://www.w3.org/2000/svg>"
        id="menu-button"
        className="h-6 w-6 cursor-pointer md:hidden block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </nav>
  );
};
