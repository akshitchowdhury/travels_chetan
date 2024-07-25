import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faEnvelope, faBook, faBookOpen, faScroll, faSchoolFlag } from '@fortawesome/free-solid-svg-icons';

import React from 'react'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const NavTop = () => {
  return (
    <div className="bg-amber-400 py-2">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          {/* Topbar Left */}
          <div className="topbar-left">
            <ul className="flex items-center text-white">
              <li className="flex items-center ">
                <FontAwesomeIcon icon={faEnvelope} className='px-4'/>
                <a href="mailto:admissions@hillsideacademy.in" className="hover:text-gray-400">
                  chetantravels@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faMobileAlt} className='px-2'/>
                <span>+91-98459 56633</span>
              </li>
            </ul>
          </div>
          {/* Topbar Left */}

          {/* Topbar Right */}
          <div className="topbar-right mt-2 sm:mt-0">
            <ul className="flex md:items-center text-white">
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

export default NavTop
