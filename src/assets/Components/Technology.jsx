import React from 'react'
import { RiReactjsLine } from 'react-icons/ri';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { easeInOut, motion } from "framer-motion";

const iconVarient = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,       
      repeatType: "loop",      
    },
  },
});

const Technology = () => {
  return (
    <div className='pb-10'>
        <motion.h2 whileInView={{opacity:1 , y:0}} initial={{opacity:0 , y:-100}}
        transition={{duration:1.5}}
       
         className='py-10 text-center text-4xl'>Technologies</motion.h2>
       <motion.div 
  whileInView={{ opacity: 1, x: 0 }}
  initial={{ opacity: 0, x: -100 }}
  transition={{ duration: 1.5 }}
  className='flex flex-wrap items-center justify-center gap-6 px-4'
>
  <motion.div initial="initial" animate="animate" variants={iconVarient(2.5)}>
    <FaHtml5 className='text-6xl text-orange-500' title="HTML5" />
  </motion.div>

  <motion.div initial="initial" animate="animate" variants={iconVarient(3)}>
    <FaCss3Alt className='text-6xl text-blue-500' title="CSS3" />
  </motion.div>

  <motion.div initial="initial" animate="animate" variants={iconVarient(5)}>
    <FaJsSquare className='text-6xl text-yellow-400' title="JavaScript" />
  </motion.div>

  <motion.div initial="initial" animate="animate" variants={iconVarient(2)}>
    <FaBootstrap className='text-6xl text-purple-600' title="Bootstrap" />
  </motion.div>

  <motion.div initial="initial" animate="animate" variants={iconVarient(6)}>
    <SiTailwindcss className='text-6xl text-cyan-400' title="Tailwind CSS" />
  </motion.div>

  <motion.div initial="initial" animate="animate" variants={iconVarient(1)}>
    <RiReactjsLine className='text-6xl text-cyan-400' title="React" />
  </motion.div>
</motion.div>

    </div>
  )
}

export default Technology