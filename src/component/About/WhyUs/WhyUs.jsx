import { faFaceSmile, faSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FaRegFaceSmile } from 'react-icons/fa6';
// import { FaRegSmile, FaFo } from 'react-icons/fa';

const WhyUs = () => {
  const points = [
    {
      title: 'Customized Itineraries',
      content: 'Personalized travel plans tailored to your interests, ensuring a unique and fulfilling travel experience.',
    },
    {
      title: 'Exceptional Customer Service',
      content: 'Dedicated support and assistance from planning to execution, ensuring a seamless journey.',
    },
    {
      title: 'Quality and Reliability',
      content: 'Upholding the highest standards of service excellence and client satisfaction.',
    },
    {
      title: 'Contact Us',
      content: 'Start planning your next extraordinary adventure with Enjoy Holidays. Contact us today to discuss your travel plans and preferences.',
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {points.map((point, index) => (
            <div
  key={index}
  className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300
   ease-in-out hover:shadow-2xl hover:bg-orange-500 hover:-translate-y-2 transform">

            <div className="text-center mb-4">
              <FaRegFaceSmile className="text-4xl text-amber-400 mx-auto" />
              {/* <FontAwesomeIcon icon={faFaceSmile} className='text-4xl text-amber-400'/> */}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{point.title}</h3>
            <p className="text-gray-600">{point.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
