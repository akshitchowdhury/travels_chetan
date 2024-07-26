import React from 'react';
import { FaGlobeAmericas, FaBullseye } from 'react-icons/fa';
import visMis from "../../../assets/hero3.jpg";

const VisionMission = () => {
  return (
    <div className="p-8 lg:p-0 space-y-12">
      {/* Our Mission Section */}
      <div className="mission lg:bg-gray-950">
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
          <img 
            src={visMis} 
            alt="Our Mission" 
            className="w-full lg:w-1/2 lg:rounded-none  object-cover lg:object-fill lg:max-h-[500px]" 
          />
         <div className="flex flex-col py-12 items-center space-y-4 lg:w-1/2">
  <h2 className="text-3xl font-bold text-indigo-600 flex items-center space-x-2">
    <FaBullseye className="text-4xl" />
    <span>Our Mission</span>
  </h2>
  <div className="w-[200px] lg:w-[400px] h-1 bg-indigo-300 mt-2 mb-4"></div>
  <p className="lg:text-gray-200">
    At Enjoy Holidays, based in Bangalore with a nationwide presence, we are dedicated to redefining
    travel experiences with seamless, end-to-end solutions for both business and leisure travellers. Our
    mission is to exceed client expectations with transparency, cost-efficiency, and personalized
    assistance available 24/7 throughout every journey.
  </p>
</div>

        </div>
      </div>
      {/* Our Vision Section */}
      <div className="vision">
        <div className="flex flex-col lg:flex-row-reverse 
        items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
          <img 
            src={visMis} 
            alt="Our Vision" 
            className="w-full p-10 lg:w-1/2 lg:rounded-none  object-cover lg:object-fill lg:max-h-[500px]" 
          />
          <div className="flex flex-col items-center py-12 space-y-4 lg:w-1/2">
            <h2 className="text-3xl font-bold text-indigo-600 flex items-center space-x-2">
              <FaGlobeAmericas className="text-4xl" />
              <span>Our Vision</span>
            </h2>
            <p className="text-gray-600">
              We aim for global recognition as a premier travel company, committed to a customer-centric
              approach that exceeds expectations and earns the trust of clients worldwide. Upholding the highest
              standards of quality, we curate exceptional experiences that leave a lasting impression.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
