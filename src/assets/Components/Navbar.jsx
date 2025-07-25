import React from 'react'
import logo from '../Images/PortfolioLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
  return (
    <>
      <div className='flex items-center justify-between  py-6'>
        <div className='flex flex-shrink-0 items-center'>
          {/* Add a valid image path or use a placeholder */}
          <a href='/' aria-label='Home' className=''>
            <img
              src= {logo}
              className='mx-2 w-[50px] h-[50px]'
              alt='Logo'
            />
          </a>
        </div>
        <div className='flex items-center justify-between  gap-2 sm:gap-4 text-xl sm:text-2xl'>
          <a
            href='https://www.linkedin.com/in/niru1996/'
            aria-label='LinkedIn'
            target='_blank'
            rel='noopener noreferrer'
            className=''
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:niru95544@gmail.com" aria-label="Gmail" className="hover:text-red-500">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>

   
      <a href="https://github.com/NiranjanPAbharekar" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-gray-400">
        <FontAwesomeIcon icon={faGithub} />
      </a>

    
      <a href="tel:+917021373427" aria-label="Phone" className="hover:text-green-400">
        <FontAwesomeIcon icon={faPhone} />
      </a>
        </div>
      </div>
    </>
  )
}

export default Navbar
