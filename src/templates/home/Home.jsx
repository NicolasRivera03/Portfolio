"use client";

import Description from "@/organisms/Description/Description";
import HeroSection from "@/organisms/HeroSection/HeroSection";
import SelectedWork from "@/organisms/SelectedWork/SelectedWork";
import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
// import required modules
import { Mousewheel, Pagination } from "swiper/modules";

export const HomePage = () => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <HeroSection />
        </SwiperSlide>
        <SwiperSlide>
          <Description />
        </SwiperSlide>
        <SwiperSlide>
          <SelectedWork />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
