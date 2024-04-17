import Tilt from "react-parallax-tilt";
import { motion, transform } from "framer-motion";
import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { github } from "../assets";
import { demo } from "../assets";
import { SectionWrapper } from "../hoc";
import { list } from "../constants"
import { fadeIn, textVariant } from "../utils/motion";
import { cProject, javaProject, webProject, otherProject } from "../constants";
import "./Project.css";


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  source_link,
}) => {
  return (
    <Tilt
      options={{
        max: 200,
        scale: 1,
        speed: 500,
      }}
      className='project-box bg-tertiary p-5 rounded-2xl sm:w-[330px] w-full'
    >
      <div className='Box1 relative w-full h-[180px]'>
        <motion.img
          src={image}
          alt='project_image'
          className='image w-full h-full object-cover rounded-2xl'
          whileHover={{ scale: 1.1 }} // Example animation on image hover
        />

        <div className='absolute inset-0 flex justify-center card-img_hover' style={{ alignItems: "center" }}>
          <h3 className='text-black font-bold text-[16px]'>{name}</h3>
        </div>

        <div className='title absolute inset-0 flex justify-end card-img_hover'> {/* Example animation on image hover */}
          <div
            onClick={() => window.open(source_link, "_blank")}
            className='bg-custom-purple w-10 h-10 m-2 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={demo}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className='bg-custom-purple w-10 h-10 m-2 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={github}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      </div>

      <div className='content mt-5'>
        <p className='mt-2 text-secondary text-[14px]' style={{ textAlign: 'justify' }}>{description}</p>
      </div>

      <div className='content mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  );
};





const Project = () => {

  const [selected, setSelected] = useState("java");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "java":
        setData(javaProject);
        break;
      case "c++":
        setData(cProject);
        break;
      case "web":
        setData(webProject);
        break;
      case "other":
        setData(otherProject);
        break;
      default:
        setData(cProject);
    }
  }, [selected]);

  return (
    <>
      <motion.div variants={textVariant()}> {/* Example animation on text  */}
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>



      <div className='project w-full flex'>
        <motion.p whileInView={{ opacity: 1, transform: 'none' }}
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] leading-[30px]'
        >
          <ul>
            {list.map((item) => (
              <li
                className={`text-sm py-3 px-2 font-bold rounded cursor-pointer overflow-hidden ${selected === item.id ? "bg-green-600 text-white" : ""} md:mx-6 mx-auto`}
                data-id={item.id}
                onClick={() => setSelected(item.id)}
              >
                {item.title}
              </li>
            ))} {/* Example of mapping through an array and rendering a list */}
          </ul>

          <div className='box mt-20 flex flex-wrap justify-center'>
            {data.map((project, index) => (
              <div>
                <ProjectCard key={`project-${index}`} index={index} {...project} />
              </div>
            ))}
          </div>


        </motion.p>
      </div>

    </>
  );
};

export default SectionWrapper(Project, "project");