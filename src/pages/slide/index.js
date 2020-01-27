import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import servico1 from './../../img/servicos/1.png';
import servico2 from './../../img/servicos/2.png';
import servico3 from './../../img/servicos/3.png';
import servico4 from './../../img/servicos/4.png';
import servico5 from './../../img/servicos/5.png';
import servico6 from './../../img/servicos/6.png';
import servico7 from './../../img/servicos/7.png';
import servico8 from './../../img/servicos/8.png';


function SimpleSlider() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    }
  
    return (
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="d-block">
            <img className="w-100 col-lg-4" src={servico1} alt="" />
            <img className="w-100 col-lg-4" src={servico2} alt="" />
            <img className="w-100 col-lg-4" src={servico3} alt="" />
          </div>         
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-block">
            <img className="w-100 col-lg-4" src={servico4} alt="" />
            <img className="w-100 col-lg-4" src={servico5} alt="" />
            <img className="w-100 col-lg-4" src={servico6} alt="" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-block">
            <img className="w-100 col-lg-6" src={servico7} alt="" />
            <img className="w-100 col-lg-6" src={servico8} alt="" />
          </div>
        </Carousel.Item>
      </Carousel>
    );
};
export default SimpleSlider;