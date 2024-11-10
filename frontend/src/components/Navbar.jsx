import React from "react";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

function Navbar(){
  const websiteName = "BoltBaba";
  const navlink = [
    {
      name: "Home",
      link:"/"
    },
    {
      name:"Contact",
      link: "/contact"
    },
    {
      name:"About",
      link: "/about"
    },
    {
      name:"Signup",
      link: "/signup"
    }
  ];
  return(
    <>
      <nav className="bg-inherit p-2 shadow-md">
        <div className="flex items-center justify-between container mx-5" >
          <div className="text-xl font-bold">
            {websiteName}
          </div>
          <ul className="flex space-x-8 ml-14">
            {
              navlink.map((item,index)=>(
                <li key = {index}>
                  <NavLink
                  to={item.link}
                  className={({isActive})=>(
                    isActive?"text-cyan-600 border-2 border-cyan-600 px-2 py-0.5 rounded-md shadow-lg shadow-cyan-400 ":"")}
                  >{item.name}</NavLink>
                </li>
            )
            )
          }
        </ul>
      
        <div className="flex gap-3 mr-14">
            <div className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="p-1 pl-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:shadow-lg w-64 bg-slate-100 rounded-md"
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
  )
}
export default Navbar;