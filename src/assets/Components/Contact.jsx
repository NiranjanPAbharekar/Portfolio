import React from 'react';
import { easeInOut, motion } from "framer-motion";

const Contact = () => {
  const address = 'Jogeshwari, Mumbai, Maharashtra';
  const phone = '+91 7021373427';
  const email = 'niru95544@gmail.com';

  return (
    <div className='border-t border-stone-500 pb-10'>
      <motion.h2 
      whileInView={{opacity:1 ,y:0}}  initial={{opacity:0 , y:-100}}
        transition={{duration:1.5}}
      className='my-5 text-center text-4xl'>Get in Touch</motion.h2>
      <div className='text-center tracking-tighter'>
        <motion.p
        whileInView={{opacity:1 ,x:0}}  initial={{opacity:0 , x:-100}}
        transition={{duration:1.5}} className='py-2'>{address}</motion.p>
        <motion.p whileInView={{opacity:1 ,x:0}}  initial={{opacity:0 , x:-100}}
        transition={{duration:1.5}}
        className='py-2'>{phone}</motion.p>
        <a href={`mailto:${email}`} className='border-b text-stone-300 hover:text-white'>
          {email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
