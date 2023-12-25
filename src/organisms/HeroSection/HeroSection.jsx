"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useFollowPointer } from "./use-follow-pointer";

const HeroSection = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="box p-4 md:px-40 md:py-10 grid place-content-center gap-2 relative bg-slate-950"
      >
        <motion.div
          className="grid place-content-center -mb-16"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <Image
            src="/Memongi.png"
            width={230}
            height={230}
            alt="Memongi Nicolás Rivera Mora"
          />
        </motion.div>
        <h1
          style={{
            transform: isInView ? "none" : "translateY(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="text-6xl text-center font-extrabold relative max-[700px]:text-6xl inline-block tracking-tighter text-transparent  bg-clip-text bg-gradient-to-b dark:from-[#7ef29d] dark:to-[#0f68a9] from-[#7ef29d] to-[#0f68a9]"
        >
          <span>¡Hola!</span>
          <span>, soy Nico</span>
        </h1>
        <p
          style={{
            transform: isInView ? "none" : "translateY(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="text-center bg-gray-900s  text-slate-50 tracking-tight font-bold text-2xl"
        >
          Desarrollador Frontend y Diseñador Web
        </p>
        <div
          style={{
            transform: isInView ? "none" : "translateY(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="flex gap-4 items-center justify-center pt-2"
        >
          <motion.a
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            href="mailto:riveramoranicolas@gmail.com"
            className="p-4 z-10 bg-white text-slate-950 rounded-full  font-semibold"
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
              Mis proyectos
            </button>
          </motion.a>
        </div>

        <div className="text-2xl absolute bottom-10 md:bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"></div>
      </motion.div>
      <motion.div
        ref={ref}
        className="hidden md:flex fixed bg-transparent z-0 outline-dashed outline-white w-24 h-24 rounded-full "
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 150,
          restDelta: 0.001,
        }}
      />
    </>
  );
};

export default HeroSection;
