import './SelectedMovieData.scss';
import React from 'react';
import Slider from 'react-slick';
import data from '../movies.json';
import Utils from '../utils.jsx';


class SelectedMovieData extends React.Component {
  componentWillMount() {
    this.setState({movieData: this.props.movieData});
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.movieData) {
      this.setState({movieData: nextProps.movieData});
    }
  }

  listMovieMetaData(movie_Detail) {
    var list = [];
    var space = '&nbsp;';
    for (var key in movie_Detail) {
      if (key === 'Title' || key === 'Poster' || key === 'Metascore' || key === 'Id') {
        continue;
      } else if (key === 'Website') {
        list.push(<a href={movie_Detail[key]}>Know more</a>);
          continue;
      }
      list.push(<h5 className='inline-title'>{Utils.getTitle(key) + ':'}</h5>);
      list.push(<p className='inline-txt-block'>{movie_Detail[key]}</p>);
      list.push(<hr/>);
    }
    return list;
  }

  render() {
    var movie_Det = this.state.movieData;
    return (
      <div className='movie_data_container row'>
          <div className='movie_img col-lg-4 col-sm-6 col-xs-6'>
            <img src={movie_Det["Poster"]} />
          </div>
          <div className='movie_content col-lg-8 col-sm-6 col-xs-6'>
            <h3 className='title'>{movie_Det["Title"]}</h3>
            <div className='movie_data'>
              <h4 className='overview-title'>Overview</h4>
              {this.listMovieMetaData(movie_Det)}
            </div>
          </div>
      </div>
    );
  }
}

export default SelectedMovieData;
