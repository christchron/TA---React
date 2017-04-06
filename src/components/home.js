import React, { Component, PropTypes } from 'react';
import ReactHeader from './react-header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as fetchDataActionCreators from '../actions/index';
import SearchTrack from './search-track';

class Home extends Component{
	static contextTypes = {
		router: PropTypes.object
	}

	render() {
		return (
			<div>
				<h3><ReactHeader/></h3>
				<SearchTrack/>
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