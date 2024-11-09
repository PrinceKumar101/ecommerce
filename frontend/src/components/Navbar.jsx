import React from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

function Navbar() {
  const websiteName = "BoltBaba";
  return (
    <>
      <nav className="bg-inherit p-4 shadow-md">
        <div className="flex items-center justify-between container mx-5">
          <div className="text-xl font-bold">
            {websiteName}
          </div>
          <div className="ml-20">
            <ul className="flex space-x-8 ml-14">
              <li>
                <Link to="/" className="hover:text-cyan-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-500">
                  About
                </Link>
              </li>
              <li>
                <Link to="/signup" className=" hover:text-cyan-500">
                  SignUp
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-3 mr-8">
          <div className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="p-2 pl-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:shadow-lg w-64 bg-slate-100 rounded-md"
              />
              <IoIosSearch
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
            <IoIosHeartEmpty size={24} className="mt-1"/>
            <IoCartOutline size={30} />
          </div>   
        </div>
      </nav>
    </>
  );
}

export default Navbar;
