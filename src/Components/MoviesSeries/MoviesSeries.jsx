import React, { useState } from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import Data from "../../../public/Data";
import { Link } from "react-router-dom";

const MoviesSeries = () => {
  const allData = Data;

  const [changeType, setType] = useState("movie");

  const movies = allData.filter((item) => item.type == changeType);

  const [activeTab, setActiveTab] = useState("movies");

  const handleChange = () => {
    if (activeTab == "movies") {
      setActiveTab("webseries");
      setType("web series");
    } else {
      setActiveTab("movies");
      setType("movie");
    }
  };

  return (
    <Wrapper className="background-color mt-3 rounded-2xl p-5">
      <div className="flex items-center gap-5">
        <div>
          <ul className="flex items-center gap-3 bg-gray-600 p-3 rounded-full *:cursor-pointer">
            <li
              className={`${
                activeTab === "movies" ? "bg-white text-black" : ""
              } px-5 py-2 rounded-full cursor-pointer`}
              onClick={handleChange}
            >
              Movies
            </li>
            <li
              className={`${
                activeTab === "webseries" ? "bg-white text-black" : ""
              } px-5 py-2 rounded-full cursor-pointer`}
              onClick={handleChange}
            >
              Web Series
            </li>
          </ul>
        </div>
        <div className="justify-center items-center hidden min-md:flex">
          <div className="swiper-button-prev bg-gray-600 p-6 rounded-full !text-white"></div>
          <div className="swiper-button-next bg-gray-600 p-6 rounded-full !text-white"></div>
        </div>
      </div>
      <div className="mt-5 border-b pb-5 border-gray-600">
        <Swiper
          spaceBetween={30}
          modules={[Pagination, Navigation]}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          breakpoints={{
            425: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {movies.map((item, i) => {
            return (
              <SwiperSlide className="bg-gray-600 p-4 rounded-xl">
                <Link to={`/moviepage/${item.id}`}>
                  <img className="w-50 m-auto" src={item.poster} alt="" />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default MoviesSeries;

const Wrapper = styled.div`
  position: relative;

  @media screen and (min-width: 768px) {
    .swiper-button-prev {
      left: 84% !important;
    }
  }

  @media screen and (min-width: 1024px) {
    .swiper-button-prev {
      left: 89% !important;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    top: 9%;
    right: 25px;
  }

  .swiper-button-prev {
    left: 89%;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 18px;
  }
`;
