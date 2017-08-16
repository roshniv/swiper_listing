import './SimpleSlider.scss';
import React from 'react';
import Slider from 'react-slick';


class SimpleSlider extends React.Component {
  getIndex(i) {
    console.log(i);
    if (this.props.updateHandler) {
      this.props.updateHandler(i);
    }
  }
  getSlides() {
    var movies  = this.state.sliderData.movies;
    var sliderList = [];
    for (var i=0; i<movies.length; i++) {
      sliderList.push(<div onClick={this.getIndex.bind(this, i)}><img src={movies[i]['Poster']} /></div>);
    }
    return sliderList;
  }
  componentWillMount() {
    if (this.props.sliderData) {
      this.setState({sliderData: this.props.sliderData});
    }
  }
  render() {
    var settings = {
      dots: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }, {
        breakpoint: 492,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }]
    };
    return (
      <div className='slider-container'>
          <Slider {...settings}>
            {this.getSlides()}
          </Slider>
      </div>
    );
  }
}

export default SimpleSlider;
