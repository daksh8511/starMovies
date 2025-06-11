import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn";
import DetailsPage from "./Pages/DetailsPage/DetailsPage";

const App = () => {
  const location = useLocation();

  const [myStore, setStore] = useState(() => {
    const store = localStorage.getItem("store");
    return store ? JSON.parse(store) : [];
  });

  useEffect(() => {
    localStorage.setItem("store", JSON.stringify(myStore));
  }, [myStore]);


  return (
    <div className="relative">
      <div
        className={`container ${
          location.pathname == "/signup"
            ? "hidden"
            : location.pathname == "/signin"
            ? "hidden"
            : ""
        }`}
      >
        <Navbar store={myStore} setStore={setStore} />
      </div>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/moviepage/:id"
            element={<DetailsPage myStore={myStore} setStore={setStore} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
