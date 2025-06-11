import React, { useEffect, useRef, useState } from "react";

import logo from "/assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

import { FaUser } from "react-icons/fa";
import Profile from "../Profile";

const Navbar = ({ store, setStore }) => {
  const getUser = JSON.parse(localStorage.getItem("store"));
  const [showProfile, setShowProfile] = useState(false);

  const [menuActive, setMenuActive] = useState(false);
  const menuRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleUserLogout = () => {
    localStorage.setItem("store", JSON.stringify([]));
    setStore([]);
  };

  return (
    <nav className="background-color p-3 rounded-b-2xl">
      <div className="flex items-center justify-between">
        <Link to={'/'}><img src={logo} className="w-23" alt="" /></Link>


        <div className="flex gap-5">
          {getUser == null ? (
            <Link
              to={"/signup"}
              className="border min-md:flex px-6 py-2 rounded hover:bg-gray-600 hover:border-gray-600 cursor-pointer duration-100"
            >
              Join For Free
            </Link>
          ) : getUser.length == 0 ? (
            <Link
              to={"/signup"}
              className="border min-md:flex px-6 py-2 rounded hover:bg-gray-600 hover:border-gray-600 cursor-pointer duration-100"
            >
              Join For Free
            </Link>
          ) : getUser == undefined ? (
            <Link
              to={"/signup"}
              className="border min-md:flex px-6 py-2 rounded hover:bg-gray-600 hover:border-gray-600 cursor-pointer duration-100"
            >
              Join For Free
            </Link>
          ) : (
            <div className="group">
              <div
                onClick={() => setMenuActive(!menuActive)}
                className="border px-6 py-2 rounded hover:bg-gray-600 hover:border-gray-600 cursor-pointer duration-100 flex capitalize items-center gap-2"
              >
                <FaUser />
                <span>{getUser[0].name}</span>
              </div>

              <div
                ref={menuRef}
                className={`relative z-10 bg-gray-700 ${
                  menuActive ? "block" : "hidden"
                }`}
              >
                <ul className={`absolute w-full`}>
                <li
                    onClick={() => setShowProfile(true)}
                    className="border px-6 py-2 rounded hover:bg-gray-600 hover:border-gray-600 cursor-pointer duration-100 flex capitalize items-center gap-2"
                  >
                    Profile
                  </li>
                  <li
                    onClick={handleUserLogout}
                    className="border px-6 py-2 rounded hover:bg-gray-600 hover:border-gray-600 cursor-pointer duration-100 flex capitalize items-center gap-2"
                  >
                    Logout
                  </li>
                  
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {showProfile && <Profile onClose={() => setShowProfile(false)} />}
    </nav>
  );
};

export default Navbar;
