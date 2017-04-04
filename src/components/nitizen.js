import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as fetchDataActionCreators from '../actions/index';
import {Link , browserHistory} from 'react-router';
import moment from 'moment';
import BarChart from './bar_chart';
import _ from 'lodash';
import Select from 'react-select';
import NetizenRenderData from './nitizen_render_data';
import RenderHeader from './render_header';

class Showtoptennitizen extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	constructor() {
		super();
		this.state = {
			activePage:1,
			start: moment().subtract(31, 'days'), 
			end: moment().add(-1, 'days'), 
			url:'netizen',
			analyticsData: [],
			tableData: []
		};
		this.handleStartDateChange = this.handleStartDateChange.bind(this);
		this.handleEndDateChange = this.handleEndDateChange.bind(this);
		this.handleSelectedAnalytics = this.handleSelectedAnalytics.bind(this);
		this.setStartState = this.setStartState.bind(this);
		this.setTableData = this.setTableData.bind(this);
		this.handlePageChange = this.handlePageChange.bind(this);
	}

	componentWillMount() {
		this.setStartState();
	}

	componentWillReceiveProps(nextProps){
		console.log("next props",nextProps);
		const {analyticsData} = nextProps;
		console.log(analyticsData != this.state.analyticsData);
		if (analyticsData){
			this.setState({
				analyticsData
			});	
		}
	}

	setStartState(){
		this.props.fetchAnalyticsAction.fetchAnalyticsData("toptennitizen.json",this.setTableData);
		this.setState({
			url: this.props.location.pathname
		});

	}

	handleStartDateChange(startD){
		this.setState({
	      start: startD
	    });
	}

	handleEndDateChange(endD){
		this.setState({
			end: endD
		});
	}

	handleSelectedAnalytics(val){
		this.props.fetchAnalyticsAction.fetchAnalyticsData("toptennitizen.json");
		this.setTableData();
		this.props.history.push(val.target.value);
	}

	handlePageChange(eventKey) {
	   	this.setState({activePage: eventKey});
	}

	setTableData(){
		var netizenTable =[];
		var i = 1;
		console.log(this.state.analyticsData);
		if(this.state.analyticsData){
			this.state.analyticsData.map((post) => {
				var tempPost = {
					no: i,
					category: post.name,
					email: post.email,
					phone: post.phone,
					chatSession: post.conversationCount
				}
				i++;
				netizenTable.push(tempPost);					
			});
		}
		console.log("netizen",netizenTable)
		this.setState({
			tableData: netizenTable
		});
	}

	render() {
		var content;
		
		const startDate = moment(new Date(+this.state.start));
		const endDate = moment(new Date(+this.state.end));
		return (
			<div>
				<h3>Top Ten Netizen</h3>
				<RenderHeader 
					this={this}
					startDate = {startDate} 
					endDate={endDate} 
					chart={false}
					first="netizen"
					second="chat_count"
					third="conversation"
					fourth="category"
					fifth="peak_time"
					sixth="response_duration"
					seventh="resolved_duration"
					firstLabel="TOP 10 NETIZEN"
					secondLabel="CHAT COUNT"
					thirdLabel="CONVERSATION"
					fourthLabel="TOP 10 CATEGORY"
					fifthLabel="PEAK TIME"
					sixthLabel="RESPONSE DURATION"
					seventhLabel="RESOLVED DURATION"/>
					
				<NetizenRenderData this={this} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Showtoptennitizen); 