import './index.scss';
import React from 'react';
import {render} from 'react-dom';
import Slider from './Slider/SimpleSlider.jsx';
import SelectedMovieData from './SelectedMovieData/SelectedMovieData.jsx';

class App extends React.Component {
  render () {
  	return (
  		<div className='container'>
  			<SelectedMovieData />
  			<Slider/>
  		</div>
  	);
  }
}

render(<App/>, document.getElementById('app'));
