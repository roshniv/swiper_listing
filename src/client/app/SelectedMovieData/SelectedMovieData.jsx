import './SelectedMovieData.scss';
import React from 'react';
import Slider from 'react-slick';
import data from '../movies.json';


class SelectedMovieData extends React.Component {
  render() {
    var movie_Det = data.movies[0];
    return (
      <div className='movie_data_container row'>
          <div className='movie_img col-lg-4'>
            <img src={movie_Det["Poster"]} />
          </div>
          <div className='movie_content col-lg-7'>
            <h3 className='title'>{movie_Det["Title"]}</h3>
            <div className='movie_data'>
              <h4 className='overview-title'>Overview</h4>
              <h6 className='inline-title'>Released On:&nbsp;&nbsp;</h6>
              <p className='inline-txt-block'>{movie_Det['Released']}</p>
            </div>
          </div>
      </div>
    );
  }
}

export default SelectedMovieData;
