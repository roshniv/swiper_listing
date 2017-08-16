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
	      movieData: null
	    };
	}

	updateMovieContentHeight() {
		var imageHeight = document.getElementsByClassName('movie_img')[0].clientHeight;
		var titleHeight = document.getElementsByClassName('movie_content')[0].getElementsByTagName('h3')[0].clientHeight;
		document.getElementsByClassName('movie_content')[0].style.height = imageHeight;
		if (window.innerWidth > 492) {
			titleHeight = titleHeight + 16;
		}
		document.getElementsByClassName('movie_data')[0].style.height = imageHeight - titleHeight;
	}

	componentWillMount() {
		this.setState({movieData: data.movies});
	}

	componentDidMount() {
		var self = this;
		setTimeout(function(){ 
			self.updateMovieContentHeight();
		}, 500);
        window.addEventListener("resize", this.updateMovieContentHeight.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateMovieContentHeight.bind(this));
    }

    updateMovieDataObject (index) {
    	var self = this;
		this.setState({movieData: data.movies[index]});
		setTimeout(function(){ 
			self.updateMovieContentHeight();
		}, 200);
	}

  	render () {
  		if(this.state.movieData) {
	  		return (
	  			<div className='container'>
	  				<SelectedMovieData movieData={this.state.movieData} />
	  				<Slider sliderData={data} updateHandler={this.updateMovieDataObject.bind(this)} />
	  			</div>
	  		);
	  	} else {
	  		return (<h3> No data present</h3>);
	  	}
  	}
}

render(<App/>, document.getElementById('app'));
