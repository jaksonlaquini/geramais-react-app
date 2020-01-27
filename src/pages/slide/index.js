import React from 'react';
import Slider from 'infinite-react-carousel';
import banner1 from './../../img/banner/banner1.jpeg';
import banner2 from './../../img/banner/banner2.jpeg';
import banner3 from './../../img/banner/painel.jpg';


const SimpleSlider = () => {
  const props = {
    dots: true,
    duration: 10,
    slidesToScroll: 1
  };
  return (

    <Slider  {...props}
      ref={(ele) => { window.SlimpleSlider = ele; }}>
      <div>
        <img className="w-100" src={banner2} alt="" />
      </div>
      <div>
        <img className="w-100" src={banner1} alt="" />
      </div>
      <div>
        <img className="w-100" src={banner3} alt="" />
      </div>
    </Slider>
  );
};
export default SimpleSlider;