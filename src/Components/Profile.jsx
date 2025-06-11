import React from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa6";

const Profile = ({ onClose }) => {
  const getDataFromLocalStorage = JSON.parse(localStorage.getItem("store"));

  return (
    <Wrapper className="fixed w-[98%] top-5 h-full  left-[50%] -translate-x-[50%] z-15 p-4 rounded">
      <button
        onClick={onClose}
        className="bg-black px-6 py-2 rounded flex ms-auto cursor-pointer"
      >
        Close
      </button>

      <div className="text-black mt-5">
        <h2 className="capitalize text-3xl font-bold">
          Name: {getDataFromLocalStorage[0].name}
        </h2>
        <h2 className="text-2xl font-bold mt-2">
          Email: {getDataFromLocalStorage[0].email}
        </h2>
        <div>
          {getDataFromLocalStorage[0].movie.length === 0 ? (
            <div className="mt-4 text-center">
              <h2 className="font-bold">No More Movies In List</h2>
              <button
                onClick={onClose}
                className="border p-2 rounded-full mt-2 cursor-pointer hover:bg-black hover:text-white"
              >
                <FaPlus />
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 min-md:grid-cols-3 min-lg:grid-cols-5 gap-3 w-full h-50 min-md:h-150 min-lg:200">
              {getDataFromLocalStorage[0].movie.map((data, i) => {
                return <img className="w-full p-6" src={data} alt="" />;
              })}
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  backdrop-filter: blur(13px) saturate(167%);
  -webkit-backdrop-filter: blur(13px) saturate(167%);
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
`;
