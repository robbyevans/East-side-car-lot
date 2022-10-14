import React from "react";
import { Link } from "react-router-dom";
import { fragement } from 'react';
import { AiOutlineMenu } from "react-icons/ai"

const NavBar = () => {
  return (
    <>
      <nav className="w-full bg-teal-300 flex items-center justify-center  fixed top-0 left-0 right-0">
        <div className="w-full max-w-7xl h-full p-4  text-xl font-semibold capitalize flex items-center justify-between ">
          <AiOutlineMenu size={30}/>

          <ul className="flex items-center">
            <li className="px-3">
              <Link to="/">Home</Link>
            </li>
            <li className="px-3">
              <Link to="/about">About</Link>
            </li>
            <li className="px-3">
              <Link to="/login">Login</Link>
            </li>
            <li className="px-3">
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;