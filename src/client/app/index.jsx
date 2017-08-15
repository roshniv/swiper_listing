import './index.scss';
import React from 'react';
import {render} from 'react-dom';
import Slider from './Slider/SimpleSlider.jsx';
import SelectedMovieData from './SelectedMovieData/SelectedMovieData.jsx';
import data from './movies.json';

class App extends React.Component {
	constructor () {
		super();
		this.state = {
	      movieData: data.movies[0]
	    };
	}
	
	updateMovieDataObject (index) {
		this.setState({movieData: data.movies[index]});
	}
  	render () {
  		return (
  			<div className='container'>
  				<SelectedMovieData movieData={this.state.movieData} />
  				<Slider updateHandler={this.updateMovieDataObject.bind(this)} />
  			</div>
  		);
  	}
}

render(<App/>, document.getElementById('app'));
