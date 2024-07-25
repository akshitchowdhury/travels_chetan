import React from 'react';

const HomeHeroText = () => {
  return (
    <div className="container absolute top-[250px] md:labsolute md:top-0 lg:absolute lg:right-96 lg:top-[300px]">
      <div className="text-left px-4 md:mx-[30%]">
      <p className="text-sm md:text-base my-2 text-white lg:text-lg">
        Connecting the Nation
        </p>
        <h1 className="text-4xl text-white font-semibold mb-2 md:text-5xl lg:text-7xl">
  Enjoy <span className="animate-colorChange">Holidays</span>
</h1>
        <p className="text-sm md:text-base my-4 text-white lg:text-lg">
        Redefining <span className='text-amber-400'>Travel Experiences </span>
        </p>
      </div>
    </div>
  );
};

export default HomeHeroText;
