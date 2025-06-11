import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import Data from "../../../public/Data";
import { Link } from "react-router-dom";

const FilteredMovies = () => {
  const [moviesType, setMovieType] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [activeType, setActiveType] = useState("Action");

  const allData = Data;

  const getGenere = allData.map((gen) => gen.genere).flat();
  const sortedGen = [...new Set(getGenere)];


  useEffect(() => {
    setMovieType(sortedGen);
  }, []);

  useEffect(() => {
    if (activeType === "All") {
      setFilteredMovies(allData);
    } else {
      const filtered = allData.filter((movie) => {
        return movie.genere.includes(activeType)
      });
      setFilteredMovies(filtered);
    }
  }, [activeType]);

  return (
    <Wrapper className="background-color mt-3 rounded-2xl p-5">

      <div className="flex items-center gap-5">
        <div className="max-md:w-full m-auto text-center">
          <ul className="block min-md:flex items-center gap-3 bg-gray-600 p-3 rounded min-md:rounded-full *:cursor-pointer">
            {moviesType.slice(0, 5).map((item, i) => {
              return (
                <li
                key={i}
                  onClick={() => setActiveType(item)}
                  className={`${
                    activeType === item ? "bg-white text-black" : ""
                  } capitalize px-6 py-2 rounded-full`}
                >
                  {item}
                </li>
              );
            })}
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
          {filteredMovies.map((movie) => {
              return(
                <SwiperSlide className="bg-gray-600 p-3 rounded-xl">
                    <Link to={`/moviepage/${movie.id}`}>
                <img src={movie.poster} alt="" />
                    </Link>
              </SwiperSlide>
              )
          })}
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default FilteredMovies;

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
