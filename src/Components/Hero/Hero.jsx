import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";

import Data from "../../../public/Data";
import { Link } from "react-router-dom";

const Hero = () => {
  const getData = Data;

  const firstData = getData.slice(0, 5);

  return (
    <div className="background-color mt-3 rounded-2xl p-5">
      <div className="hidden min-md:block">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {firstData.map((movies, i) => {
            return (
              <SwiperSlide>
                <div className="flex justify-around h-125">
                  <div className="w-2/4 m-auto">
                    <h2 className="text-5xl mb-3">{movies.title}</h2>
                    <p className="text-gray-400 mb-3">{movies.description}</p>
                    <Link
                      to={`moviepage/${movies.id}`}
                      className="border px-4 py-2 rounded hover:bg-[#7225b3] hover:border-0 duration-150"
                    >
                      See Details
                    </Link>
                  </div>
                  <div className="w-100 m-auto">
                    <img className="w-full" src={movies.poster} alt="" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* for responsive */}
      <div className="min-md:hidden">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {firstData.map((movies, i) => {
            return (
              <SwiperSlide>
                <div>
                  <div className="w-100 m-auto">
                    <img className="w-full" src={movies.poster} alt="" />
                  </div>
                  <div className="mt-7 flex items-center justify-around">
                    <h2 className="text-2xl mb-3 max-w-30">{movies.title}</h2>
                    <Link
                      to={`moviepage/${movies.id}`}
                      className="border px-4 py-2 rounded hover:bg-[#7225b3] hover:border-0 duration-150"
                    >
                      See Details
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
