import React from 'react';
import project1 from '../projects/project-1.webp';
import project2 from '../projects/project-2.webp';
import { easeInOut, motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      image: project1,
      title: 'Portfolio Website',
      description: 'A prsonal responsive portfolio website   showcasing my projects, skills and contact Information.',
      technologies: ['HTML', 'Tailwind CSS', 'React'],
    },
    {
      image: project2,
      title: 'Blogging Website',
      description: 'A clean and modern blog platform using Angular and Bootstrap for sharing articles.',
      technologies: ['HTML', ' CSS', 'JS' ,'bootstap','Angular'],
    }
  ];

  return (
    <div className='pb-4'>
      <motion.h2 whileInView={{opacity:1 ,y:0}}  initial={{opacity:0 , y:-100}}
        transition={{duration:1.5}}
      className='my-10 text-center text-4xl'>Projects</motion.h2>
      <div>
        {projects.map((project, index) => (
          <div key={index} className='mb-10 flex flex-wrap lg:justify-center'>
            <motion.div whileInView={{opacity:1 ,x:0}}  initial={{opacity:0 , x:-100}}
        transition={{duration:1.5}}
            className='w-full lg:w-1/4 flex justify-center mb-4 lg:mb-0'>
              <img
                src={project.image}
                alt={`project-${index}`}
                className='rounded-lg shadow-lg'
                width={300}
                height={200}
              />
            </motion.div>
            <motion.div whileInView={{opacity:1 ,x:0}}  initial={{opacity:0 , x:100}}
        transition={{duration:1.5}}
            className='w-full max-w-xl lg:w-3/4 px-4'>
              <h3 className='mb-2 text-2xl font-bold text-white'>{project.title}</h3>
              <p className='text-stone-400 mb-4'>{project.description}</p>
          
  <div className="mt-2 flex flex-wrap gap-2">
  {project.technologies?.map((tech, index) => (
    <span
      key={index}
      className="rounded bg-stone-900 px-3 py-1 text-sm font-medium text-stone-300"
    >
      {tech}
    </span>
  ))}
</div>


            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
