import React from 'react';
import { easeInOut, motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      year: '2022 - 2023',
      role: 'UI Developer',
      company: 'CNC Web World Technology',
      description:
        'Developed and maintained responsive user interfaces for various web-based training and business applications. Converted Figma and PSD designs into pixel-perfect, mobile-first HTML/CSS layouts.',
      technologies:['HTML','CSS','Bootstarp'],
    },
    {
      year: '2023 - Present',
      role: 'Frontend Developer',
      company: 'Planet Next Gen Technology',
      description:
        'Designing and developing responsive, user-friendly web interfaces using Angular, HTML5, CSS3/SCSS, Bootstrap, and JavaScript. Implementing modern UI/UX best practices to enhance accessibility, usability, and performance across platforms. Collaborating with cross-functional teams to integrate APIs and ensure a seamless user experience. Developing reusable components and following component-based architecture to maintain code consistency and scalability. Optimizing for mobile-first design, improving load times, and ensuring cross-browser compatibility.',
        technologies:['HTML','CSS','JS','Bootstarp','Angular','React'],
    },
  ];

  return (
    <div className='pb-4'>
      <motion.h2
      whileInView={{opacity:1 ,y:0}}  initial={{opacity:0 , y:-100}}
        transition={{duration:1.5}}
       className='my-10 text-center text-4xl'>Experience</motion.h2>
      <div>
        {experiences.map((exp, index) => (
          <div key={index} className='mb-6 flex flex-wrap lg:justify-center'>
            <motion.div
            whileInView={{opacity:1 ,x:0}}  initial={{opacity:0 , x:-100}}
        transition={{duration:1.5}}
             className='w-full lg:w-1/4'>
              <p className='mb-2 text-sm text-stone-400'>{exp.year}</p>
            </motion.div>
            <motion.div whileInView={{opacity:1 ,x:0}}  initial={{opacity:0 , x:100}}
        transition={{duration:1.5}}
            className='w-full max-w-xl lg:w-3/4 px-4'>
              <h3 className='mb-2 font-semibold text-white'>
                {exp.role}{' '}
                <span className='text-sm text-stone-500'>– {exp.company}</span>
              </h3>
              <p className='text-stone-400'>{exp.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
  {exp.technologies?.map((tech, index) => (
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

export default Experience;
