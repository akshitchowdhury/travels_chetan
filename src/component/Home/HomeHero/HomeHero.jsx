import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import h1 from "../../../assets/hero1.jpg";
import h2 from "../../../assets/hero2.jpg";
import h3 from "../../../assets/hero6.jpg";
import h4 from "../../../assets/hero4.jpg";
import h5 from "../../../assets/hero5.jpg";
import HomeHeroText from './HomeHeroText';

const HomeHero = () => {
  return (
    <>  
      <div className="relative w-full h-[500px]">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        interval={3000}
        className="h-full"
      >
        <div>
          <img src={h1} alt="Slide 1" className="object-cover object-top w-full h-[500px]" />
        </div>
        <div>
          <img src={h2} alt="Slide 2" className="object-cover object-top w-full h-[500px]" />
        </div>
        <div>
          <img src={h3} alt="Slide 3" className="object-cover object-top w-full h-[500px]" />
        </div>
        <div>
          <img src={h4} alt="Slide 4" className="object-cover w-full h-[500px]" />
        </div>
        <div>
          <img src={h5} alt="Slide 5" className="object-cover w-full h-[500px]" />
        </div>
      </Carousel>
    </div>
    
    <HomeHeroText/>
    </>

  );
};

export default HomeHero;
