import React from 'react'
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion'
import {styles} from '../styles'
import { github } from '../assets';
import SectionWrapper from '../hoc';
import {projects} from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 1, 0.75)}>
      <Tilt options={{max:45, scale:1, speed:450}} className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
        <div className='relative w-full h-[230px]'>
          <img 
          src={image}
          alt={name}
          className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div onClick={()=> window.open(source_code_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img
              src={github}
              alt='github'
              className='w-1/2 h-1/2 object-contain'
              />
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div onClick={()=>{window.open(source_code_link, "_blank")}}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name}
            className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)}>
              <p className={`${styles.sectionSubText}`}>what i've done so far</p>
              <h2 className={`${styles.sectionHeadText}`}>my Projects</h2>
            </motion.div>

            <div className='w-full flex'>
              <motion.p 
              variants={fadeIn("","",0.1,1)}
              className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
                These projects showcase all the projects you've done which is none so im going to
                put anything here Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, maiores possimus! Facilis, assumenda consectetur molestias quam ad soluta, quae amet tenetur reprehenderit inventore est hic magnam! Magni quaerat ea eveniet?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nisi ducimus a nemo, illo facere fugit, voluptate, pariatur debitis dolor soluta? Delectus deleniti provident corrupti temporibus quisquam minima praesentium ab.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero dolorem blanditiis laborum, corrupti et ullam explicabo aut tenetur, inventore natus eligendi illum iste a praesentium, minus veritatis molestias deleniti cum!
              </motion.p>
            </div>

            {/*<div className='mt-20 flex flex-wrap gap-7'>
              {projects.map((project, index)=>(
                <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
                />
              ))}
            </div>*/}
            <div className='mt-20 flex flex-wrap gap-7'>
              {projects.map((project, index)=>(
                <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
                />
              ))}

            </div>
    </>
  )
}

export default SectionWrapper (Works,"works")