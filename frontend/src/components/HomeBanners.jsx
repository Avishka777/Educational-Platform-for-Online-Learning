import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slide1 from '../assets/slide/Slide1.png';
import Slide2 from '../assets/slide/Slide2.png';
import Slide3 from '../assets/slide/Slide3.png';

export default function HomeBanners() {
  return (
    
    <div className=''>
      <Carousel autoPlay infiniteLoop showThumbs={false} interval={2000}>
      
      <div className="relative">
        <img src={Slide1} alt="Slide 1" className='rounded-3xl'/>
      </div>

      <div className="relative">
        <img src={Slide2} alt="Slide 2" className='rounded-3xl'/>
      </div>

      <div className="relative">
        <img src={Slide3} alt="Slide 3" className='rounded-3xl' />
      </div>
      
      </Carousel>
  </div>
  )
}