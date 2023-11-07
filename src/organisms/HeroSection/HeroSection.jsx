"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./use-follow-pointer";

const HeroSection = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="box sm:px-2 py-2 h-screen w-full md:h-screen md:px-40 md:py-10 grid place-content-center gap-2 relative bg-slate-950"
      >
        <div className="grid place-content-center -mb-16">
          <Image
            src="/Memongi.png"
            width={230}
            height={230}
            alt="Memongi Nicolás Rivera Mora"
          />
        </div>
        <h1 className="text-center font-extrabold relative max-[700px]:text-7xl inline-block tracking-tighter text-transparent text-8xl bg-clip-text bg-gradient-to-b dark:from-[#7ef29d] dark:to-[#0f68a9] from-[#7ef29d] to-[#0f68a9]">
          <span>Hola!</span>
          <span>, soy Nico</span>
        </h1>
        <p className="text-center bg-gray-900s  text-slate-50 tracking-tight font-medium text-2xl">
          Desarrollador Frontend y Diseñador Web
        </p>
        <div className="flex gap-4 items-center justify-center pt-2">
          <motion.a
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            href="mailto:riveramoranicolas@gmail.com"
            className="p-4 z-10 bg-slate-900 text-white rounded-full  font-semibold"
          >
            Contactame
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            href="https://resume.io/r/0my4lDyLi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="z-10 p-4 outline outline-white text-white outline-2 rounded-full font-semibold">
              Mi CV
            </button>
          </motion.a>
        </div>

        <div className="text-2xl absolute bottom-10 md:bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"></div>
      </motion.div>
      <motion.div
        ref={ref}
        className="fixed bg-transparent z-0 outline-dashed outline-white w-24 h-24 rounded-full "
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 2,
          stiffness: 30,
          restDelta: 0.001,
        }}
      />
    </>
  );
};

export default HeroSection;
