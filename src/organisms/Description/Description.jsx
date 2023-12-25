"use client";

import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Description = () => {
  return (
    <div className="p-8  bg-slate-950 text-white flex flex-col gap-2 place-content-center">
      <div>
        <Image
          className="rounded-full"
          src={
            "https://media.licdn.com/dms/image/D4E03AQEawZwo5rX-AA/profile-displayphoto-shrink_800_800/0/1693602679557?e=1708560000&v=beta&t=HOhWFXUn00MLgnHmFkwUtG21Zby_AahiYLOUype54_I"
          }
          width={200}
          height={200}
          alt="Perfil Nicolás Rivera Mora"
        />
      </div>
      <h2 className="font-bold text-4xl tracking-tighter">Nicolás Mora</h2>
      <p>
        Desarrollador apasionado de React con enfoque en la creación de
        aplicaciones web de alto rendimiento y amigables para el usuario.
        Experiencia en el diseño y desarrollo de interfaces atractivas y
        adaptables. Comprometido con las mejores prácticas de desarrollo web y
        la optimización del rendimiento.
      </p>
      <div className="flex gap-2">
        <a
          href="https://www.linkedin.com/in/nicolas-rivera-mora/"
          target="_blank"
          className="hover:text-white text-slate-400 "
        >
          <span className="text-4xl">
            <FaLinkedin />
          </span>
        </a>
        <a
          href="https://github.com/NicolasRivera03"
          target="_blank"
          className="hover:text-white text-slate-400 "
        >
          <span className="text-4xl">
            <FaSquareGithub />
          </span>
        </a>
        <a
          href="https://www.instagram.com/nico_rivera_/?hl=es-la"
          target="_blank"
          className="hover:text-white text-slate-400 "
        >
          <span className="text-4xl">
            <FaInstagramSquare />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Description;
