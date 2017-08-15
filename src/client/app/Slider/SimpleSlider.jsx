import './SimpleSlider.scss';
import React from 'react';
import Slider from 'react-slick';
import AComponent from '../AComponent.jsx';


class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true
    };
    return (
      <div className='slider-container'>
          <Slider {...settings}>
            <div><AComponent /></div>
              <div><AComponent /></div>
              <div><AComponent /></div>
              <div><AComponent /></div>
          </Slider>
      </div>
    );
  }
}

export default SimpleSlider;
