import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../../../public/Data";

import imdb from "/assets/imdb.png";

const DetailsPage = ({ myStore, setStore }) => {
  const { id } = useParams();

  const filterData = Data.filter((movie) => movie.id == id);

  const name = filterData[0].director[0];
  const repalceDirectorName = name.replace(" ", "+");

  const handleWatchalater = (link) => {

    const updatedUser = {
      ...myStore[0],
      movie: [...(myStore[0].movie || []), link],
    };
  
    setStore([updatedUser]);
  };

  useEffect(() => {
    localStorage.setItem('store', JSON.stringify(myStore))
  }, [myStore])

  return (
    <div className="mt-3 background-color p-5 rounded-2xl">
      <div className="grid grid-cols-1 min-md:grid-cols-2 gap-6 items-center">
        <div>
          <iframe
            className="rounded-2xl"
            src={filterData[0].trailer}
            width="100%"
            height="360"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div className="mt-5">
          <h2 className="font-bold text-5xl mb-2">
            {filterData[0].title}{" "}
            <span className="capitalize text-xl">({filterData[0].type})</span>
          </h2>
          <span className="font-light">{filterData[0].description}</span>
          <h2 className="my-1 mt-3 font-bold">
            Director :{" "}
            <a
              className="font-light hover:font-bold"
              href={`https://www.google.com/search?q=${repalceDirectorName}`}
              target="_blank"
            >
              {filterData[0].director}
            </a>
          </h2>
          <h2 className="font-bold">
            Genere :{" "}
            <span className="font-light hover:font-bold">
              {filterData[0].genere.toString()}
            </span>
          </h2>

          <h2 className="font-bold">
            Release Date :{" "}
            <span className="font-light">{filterData[0].release_date}</span>
          </h2>

          <div className="flex items-center gap-2 my-2">
            <img className="w-10" src={imdb} alt="" />
            <h2>IMDb</h2>
            <h2>{filterData[0].imdb} / 10</h2>
          </div>

          <button
            onClick={() => handleWatchalater(filterData[0].poster)}
            className="mt-3 background-button-color px-5 py-2 cursor-pointer hover:bg-[#51217a]"
          >
            Watch Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
