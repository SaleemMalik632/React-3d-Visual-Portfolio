import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { educations } from "../constants";
import "./Education.css";

const FeedbackCard = ({
  index,
  branch,
  marks,
  name,
  degree,
  year,
  image,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const onScroll = () => {
      const offset = window.innerHeight * 0.8;
      const isVisible = window.scrollY + offset > window.innerHeight;
      setIsVisible(isVisible);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start("onscreen");
    } else {
      controls.start("offscreen");
    }
  }, [isVisible, controls]);

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className='Box2 p-5 rounded-3xl xs:w-[320px] w-full'
      initial="offscreen"
      animate={controls}
    >
      <div className='mt-7 flex flex-col justify-between items-center gap-1'>
        <img
          src={image}
          alt={`feedback_by-${name}`}
          width="80" height="80"
          className='rounded-full object-cover'
        />
        <div className='mt-3 flex-1 flex flex-col'>
          <p className='text-center text-white font-medium text-[16px]'>
            <span className='text-center blue-text-gradient'>{name}</span> 
          </p>
          <p className='text-center mt-1 text-secondary text-[12px]'>
            {year}
          </p>
        </div>

      </div>

      <p className='text-white font-black text-[48px]'>"</p>

      <div className='mt-1'>
        <p className='text-center text-white tracking-wider text-[18px]'>{degree}</p>
        <p className='mt-3 text-center pink-text-gradient'>{branch}</p>
        <p className='mt-3 text-center green-text-gradient'>{marks}</p>
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}> 
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Education Details...</p>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 justify-center pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {educations.map((education, index) => (
          <FeedbackCard key={education.name} index={index} {...education} /> 
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");
