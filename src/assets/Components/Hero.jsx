import React from "react";
import Profile from "../Images/ProfileImg.jpg";
import resume from "/NiranjanPabharekarResume.pdf"
import { motion } from "framer-motion";

const containerVariants={
    hidden:{ opacity:0 , x:-100},
    visible:{ opacity:1 , x:0,
        transition:{
            duration:0.5,
            staggerChildren: 0.8
        }
    }
}
const childVarients = {
     hidden:{ opacity:0 , x:-100},
    visible:{ opacity:1 , x:0,
        transition:{
            duration:0.5,
            staggerChildren: 0.5
        }
    }
}

const Hero = () => {
  const herContent = `I am a passionate Frontend Developer with 3 years of hands-on experience building modern, responsive, and user-focused web interfaces. I specialize in crafting clean UI/UX using HTML5, CSS3/SCSS, JavaScript, Bootstrap, and Angular.

My goal is to bring intuitive, accessible, and performant web experiences to life. I’m experienced in working with cross-browser compatibility, mobile-first design, and creating pixel-perfect layouts. I also ensure email compatibility and follow best UI/UX practices to create engaging designs.

Currently, I work at Planet Next Gen Technology, where I contribute to developing real-world applications with modern design patterns and efficient code practices.`;
  return (
    <div className="pb-4 lg:pb-16">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className=" flex justify-center lg:p-8">
            <motion.img
              src={Profile}
              alt="profile"
              className="border border-stone-900 rounded-3xl"
              width={500} height={500}
            initial= {{ x:100 , opacity:0}}
            animate = {{ x:0 , opacity:1 }}
            transition= {{duration: 1, delay:0.8}} />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className=" flex items-center lg:items-left flex-col mt-10">
            <motion.h2 
            variants={childVarients}
            className="pb-4 text-4xl lg:text-8px tracking-tighter">
              Niranjan Pabharekar
            </motion.h2>
            <motion.span  variants={childVarients} className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl text-transparent tracking-tighter">
              FrontEnd Developer
            </motion.span>

            <motion.p  variants={childVarients} className="my-2 max-w-lg py-6 text-[15px] leading-relaxed ">
              {herContent}
            </motion.p>
            <motion.a  variants={childVarients} href="/NiranjanPabharekarResume.pdf" target="_blank"  rel='noopener noreferrer' download className="bg-white p-4 rounded-full text-sm text-stone-800 mb-10">
                Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
