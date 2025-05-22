import React, { useEffect, useState } from "react";

import logo from "/assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");

  const data = JSON.parse(localStorage.getItem("store"));

  const navigation = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    if (!data || data.length === 0) {
      alert("User No Available");
      return;
    }

    if (myEmail.trim() === "" || myPassword.trim() === "") {
      alert("Please fill in the blanks");
      return;
    }

    const user = data.find((users) => users.email === myEmail);

    if (!user) {
      alert("User Not Found!");
      return;
    }

    if (user.password !== myPassword) {
      alert("Incorrect Password!");
    } else {
      alert("Login Successfully");
      navigation("/");
    }
  };

  return (
    <div className="h-screen">
      <div className="grid grid-cols-1 min-md:grid-cols-2">
        <div className="mt-30 hidden min-md:block">
          <img src={logo} alt="" className="m-auto" />
        </div>
        <div className="background-color h-screen">
          <form
            action=""
            onSubmit={handleForm}
            className="grid grid-cols-1 gap-2 p-4 mt-30"
          >
            <input
              type="email"
              placeholder="Enter Your Email"
              value={myEmail}
              onChange={(e) => setMyEmail(e.target.value)}
              autoComplete="off"
              className="border p-2"
              required
            />
            <input
              type="password"
              placeholder="Enter Your Password"
              value={myPassword}
              autoComplete="off"
              onChange={(e) => setMyPassword(e.target.value)}
              className="border p-2"
              required
            />
            <button type="submit" className="cursor-pointer border mt-4 p-2">
              Sign In
            </button>
            <Link to={"/signup"} className="flex ms-auto mt-2">
              Register Now ? Sign Up
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
