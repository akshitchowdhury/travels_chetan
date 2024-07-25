import React from 'react';
import transportFleet from '../../../assets/service1-removebg-preview.png'
import accomodation from '../../../assets/service2-removebg-preview.png'
import tourGuide from '../../../assets/service3-removebg-preview.png'
import tourPack from '../../../assets/service4-removebg-preview.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const HomeServices = () => {
  const features = [
    {
      imgSrc: transportFleet,
      title: 'Transport and Fleet Services',
    },
    {
      imgSrc: accomodation,
      title: ' Accommodation and Stay',
    },
    {
      imgSrc: tourGuide,
      title: 'Tourist Guide Services',
    },
    {
      imgSrc: tourPack,
      title: 'Comprehensive Tour Packages',
    },
  ];

  return (
    <section id="fact" className="py-12 bg-gray-100" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Features to decide <b className='text-orange-600 font-semibold'>the right Product</b></h2>
          <span className="block w-32 h-1 bg-orange-600 mx-auto my-4"></span>
        </div>
        <div className="flex  flex-wrap -mx-4">
          {features.map((feature, index) => (
            <div key={index} className="w-full   sm:w-1/2 md:w-1/4 px-4 mb-8 ">
              <div className="bg-white h-[200px] p-6 rounded-lg shadow-lg text-center hover:bg-orange-500 
              hover:scale-105 transition ease-in-out duration-300">
                <img src={feature.imgSrc} alt={feature.title} className="mx-auto mb-4 w-[60px] h-[60px]" />
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
