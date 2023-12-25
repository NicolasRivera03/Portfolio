'use client';

import React from 'react';
import { BiLogoReact } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const SelectedWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className='w-full h-auto bg-slate-950 flex flex-col gap-32'>
      <div
        ref={ref}
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
        className='flex flex-col justify-center w-full h-auto px-4 md:px-10 max-w-screen-xl m-auto '
      >
        <p className='text-center text-white'>Mis</p>
        <h2 className='text-center font-bold text-white relative item-s text-transparent text-6xl bg-clip-text inline-block text-gradient tracking-tighter'>
          Proyectos
        </h2>
      </div>

      <div className='grid gap-4 md:grid-cols-2 p-10 px-24 items-center place-content-center'>
        <div className='text-white flex flex-col gap-2'>
          <h2
            style={{
              transform: isInView ? 'none' : 'translateX(-200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
            className='text-5xl font-semibold items-center '
          >
            N+ Televisa
          </h2>
          <p
            style={{
              transform: isInView ? 'none' : 'translateX(-200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
          >
            Contribuí al desarrollo de la Fase 1 de nmas Televisa, donde fui responsable de diseñar
            la arquitectura inicial de los componentes y desarrollar la interfaz de usuario (UI) en
            conjunto del equipo de desarrollo.
          </p>
          <div
            style={{
              transform: isInView ? 'none' : 'translateX(-200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
          >
            <span>React</span>
            <span>Styled-Components</span>
          </div>
        </div>
        <div
          style={{
            transform: isInView ? 'none' : 'translateX(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        >
          <img
            src='https://images.pexels.com/photos/18824575/pexels-photo-18824575/free-photo-of-resfriado-nieve-madera-amanecer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='Imagen de referencia'
          />
        </div>
      </div>

      <div className='grid gap-4 md:grid-cols-2 p-10 px-24 items-center place-content-center'>
        <div className='text-white flex flex-col gap-2'>
          <h2
            style={{
              transform: isInView ? 'none' : 'translateX(-200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
            className='text-5xl font-semibold items-center '
          >
            N+ Televisa
          </h2>
          <p
            style={{
              transform: isInView ? 'none' : 'translateX(-200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
          >
            Contribuí al desarrollo de la Fase 1 de nmas Televisa, donde fui responsable de diseñar
            la arquitectura inicial de los componentes y desarrollar la interfaz de usuario (UI) en
            conjunto del equipo de desarrollo.
          </p>
          <div
            style={{
              transform: isInView ? 'none' : 'translateX(-200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
          >
            <span>React</span>
            <span>Styled-Components</span>
          </div>
        </div>
        <div
          style={{
            transform: isInView ? 'none' : 'translateX(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        >
          <img
            src='https://images.pexels.com/photos/18824575/pexels-photo-18824575/free-photo-of-resfriado-nieve-madera-amanecer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='Imagen de referencia'
          />
        </div>
      </div>

      <div className='grid gap-4 md:grid-cols-2 p-10 px-24 items-center place-content-center'>
        <div className='text-white flex flex-col gap-2'>
          <h2
            style={{
              transform: isInView ? 'none' : 'translateX(-200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
            className='text-5xl font-semibold items-center '
          >
            N+ Televisa
          </h2>
          <p
            style={{
              transform: isInView ? 'none' : 'translateX(-200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
          >
            Contribuí al desarrollo de la Fase 1 de nmas Televisa, donde fui responsable de diseñar
            la arquitectura inicial de los componentes y desarrollar la interfaz de usuario (UI) en
            conjunto del equipo de desarrollo.
          </p>
          <div
            style={{
              transform: isInView ? 'none' : 'translateX(-200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
          >
            <span>React</span>
            <span>Styled-Components</span>
          </div>
        </div>
        <div
          style={{
            transform: isInView ? 'none' : 'translateX(200px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
          }}
        >
          <img
            src='https://images.pexels.com/photos/18824575/pexels-photo-18824575/free-photo-of-resfriado-nieve-madera-amanecer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='Imagen de referencia'
          />
        </div>
      </div>
    </div>
  );
};

export default SelectedWork;
