import React, { Component, PropTypes } from 'react';
import ReactHeader from './react-header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as fetchDataActionCreators from '../actions/index';
import SearchTrack from './search-track';
import Sofa from './sofa';
import ImageSlider from './image-slider';
import Button from 'simple-react-button';

class Home extends Component{
	static contextTypes = {
		router: PropTypes.object
	}

	render() {
		return (
			<div>
				<h3><ReactHeader/></h3>
				<Sofa/>
				<ImageSlider/>
				
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { analyticsData: state.analyticsData.all }
}

const mapDispatchToProps = (dispatch) => {
	return{
		fetchAnalyticsAction: bindActionCreators(fetchDataActionCreators,dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home); 