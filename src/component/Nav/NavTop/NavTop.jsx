import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const NavTop = () => {
  return (
    <div className="bg-amber-400 py-2">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        {/* Topbar Left */}
        <div className="topbar-left w-full sm:w-auto flex flex-col sm:flex-row items-center sm:items-start text-white">
          <ul className="flex flex-col sm:flex-row items-center sm:space-x-4">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className='px-2'/>
              <a href="mailto:admissions@hillsideacademy.in" className="hover:text-gray-400">
                chetantravels@gmail.com
              </a>
            </li>
            <li className="flex items-center mt-2 sm:mt-0">
              <FontAwesomeIcon icon={faMobileAlt} className='px-2'/>
              <span>+91-98459 56633</span>
            </li>
          </ul>
        </div>
        {/* Topbar Left */}

        {/* Topbar Right */}
        <div className="topbar-right w-full sm:w-auto flex justify-center sm:justify-start mt-2 sm:mt-0">
          <ul className="flex items-center text-white space-x-4">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faInstagram} className='px-2'/>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faFacebook} className='px-2'/>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faWhatsapp} className='px-2'/>
            </li>
          </ul>
        </div>
        {/* Topbar Right */}
      </div>
    </div>
  )
}

export default NavTop;
