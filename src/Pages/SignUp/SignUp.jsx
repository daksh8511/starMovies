import React, { useEffect, useState } from "react";

import logo from "/assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [myName, setMyName] = useState("");
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const navigation = useNavigate();

  const [localBox, setLocalBox] = useState(() => {
    const store = localStorage.getItem("store");
    return store ? JSON.parse(store) : [];
  });

  const handleForm = (e) => {
    e.preventDefault();

    if(localBox.some((userdata)=>userdata.email === myEmail)){
      alert("User Already Registrered!")
    }else{
      setLocalBox([...localBox, {name : myName, email: myEmail, password : myPassword, movie: []}])
    }

    setMyEmail("");
    setMyName("");
    setMyPassword("");

    navigation('/signin')
  };

  useEffect(() => {
    localStorage.setItem("store", JSON.stringify(localBox));
  }, [localBox]);

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
              type="text"
              placeholder="Enter Your Name"
              value={myName}
              onChange={(e) => setMyName(e.target.value)}
              autoComplete="off"
              className="border p-2"
              required
            />
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
              Sign Up
            </button>
            <Link to={"/signin"} className="flex ms-auto mt-2">
              Already Have An Account? Sign In
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
