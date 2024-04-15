import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import React, { useEffect, useRef } from "react";
import Typewriter from 'typewriter-effect';
import { AiOutlineGithub } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLinkAlt } from "react-icons/bi";
import { SaleemMalik } from "../assets";
import "./Hero.css";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className="flex">
        <div
          className={`head1 absolute  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>
          <div className="head2">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi there, I'm <p className='name text-[#915EFF]'>Saleem Malik </p>
            </h1>
            <h2 className="text-3xl text-green-400">
              <Typewriter
                options={{
                  strings: ['Software Developer', "Tech Enthusiast", "Web Developer", "MERN Stack Developer", "React Developer"], 
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <div className="absolute link1 mt-9 ml-[-40px] lg:ml-[-20px]">
              <a
                href="https://github.com/SaleemMalik632"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineGithub className="hover:bg-[#915EFF] p-2 rounded-full text-5xl " />
              </a>
              <a
                href="https://www.linkedin.com/in/saleem-malik-5b194a22a/" target="_blank">
                <ImLinkedin className="hover:bg-[#915EFF] p-2 rounded-full text-5xl " />
              </a>
              <a
                href="https://www.instagram.com/its_______malik___6320" target="_blank">
                <AiOutlineInstagram className="hover:bg-[#915EFF] p-2 rounded-full text-5xl " />
              </a>
              <a
                href="https://linktr.ee/Saleem444" target="_blank">
                <BiLinkAlt className="hover:bg-[#915EFF] p-2 rounded-full text-5xl " />
              </a>
            </div>
          </div>
        </div>

        <div className="imgcontainer1 absolute violet-gradient">
          <img src={SaleemMalik} alt="" className="object-contain" />

        </div>
      </div>


      <ComputersCanvas />

      <div  className='absolute xs:bottom-10 bottom-32 w-10 flex justify-end items-center'> 
        <a href='#education' download={SaleemMalik}>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-5 h-3 rounded-full bg-secondary mb-1'
            />
            <motion.div
              animate={{
                y: [0, -24, 0], // Change the y values to move the dot in the opposite direction
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-5 h-3 rounded-full bg-secondary mt-5'
            />
          </div>
        </a>
      </div>



      <div className={`absolute bottom-0 right-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <motion.div
            animate={{
              y: [-1, 300], // Move the dot up and down
            }}
            transition={{
              duration: 2, // Duration of each cycle
              repeat: Infinity, // Repeat the animation infinitely
              repeatType: "reverse", // Reverse the animation direction after each cycle
            }}
            className='w-5 h-5 rounded-full bg-[#915EFF]'
          />
          <motion.div
            animate={{
              y: [200, -1], // Move the dot up and down
            }}
            transition={{
              duration: 2, // Duration of each cycle
              repeat: Infinity, // Repeat the animation infinitely
              repeatType: "reverse", // Reverse the animation direction after each cycle
            }}
            className='w-5 h-5 rounded-full bg-[#915EFF]'
          />

          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>
        </div>
      </div>


    </section >
  );
};

export default Hero;