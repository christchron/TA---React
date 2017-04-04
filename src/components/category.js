import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as fetchDataActionCreators from '../actions/index';
import {Link , browserHistory} from 'react-router';
import moment from 'moment';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import _ from 'lodash';
import Select from 'react-select';
import CategoryRenderData from './category_render_data';
import {getCategoryLabel, getCategoryTotalChat} from '../utils/Utility';
import RenderHeader from './render_header';
import GoogleBarChart from './google_bar_chart'

class ShowTopTenCategory extends Component {
	constructor() {
		super();
		this.state = { 
			checked: true, 
			activePage:1,
			start: moment().subtract(31, 'days'), 
			end: moment().add(-1, 'days'), 
			url:'category',
			analyticsData: [],
			tableData: []
		};
		this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
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
		this.props.fetchAnalyticsAction.fetchAnalyticsData("toptencategory.json",this.setTableData);
		this.setState({
			url: this.props.location.pathname
		});

	}

	handleCheckBoxChange() {
	    this.setState({
	      checked: !this.state.checked
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
		this.props.fetchAnalyticsAction.fetchAnalyticsData("toptencategory.json");
		this.setTableData();
		this.props.history.push(val.target.value);	
	}

	handlePageChange(eventKey) {
	   	this.setState({activePage: eventKey});
	}

	setTableData(){
		var categoryTable =[];
		var i = 1;
		console.log(this.state.analyticsData);
		if(this.state.analyticsData){
			this.state.analyticsData.map((post) => {
				var tempPost = {
					no: i,
					category: post.name,
					total: post.value
				}
				i++;
				categoryTable.push(tempPost);					
			});
		}
		console.log("category",categoryTable)
		this.setState({
			tableData: categoryTable
		});
	}

	render() {
		var content, chartLabel, totalChatList;

		if (this.state.analyticsData){
			chartLabel = getCategoryLabel(this.state.analyticsData);
			totalChatList = getCategoryTotalChat(this.state.analyticsData);
			content = this.state.checked 
	    		? <div>
		      		<GoogleBarChart labels = {chartLabel} data={totalChatList}/>
		      	</div>	
				:<div>
			      	<CategoryRenderData this={this} />
				</div>;
		}
		
		const startDate = moment(new Date(+this.state.start));
		const endDate = moment(new Date(+this.state.end));
		return (
			<div>
				<h3>Top Ten Category</h3>
				<RenderHeader 
					this={this}
					startDate = {startDate} 
					endDate={endDate} 
					chart={true}
					first="category"
					second="chat_count"
					third="conversation"
					fourth="netizen"
					fifth="peak_time"
					sixth="response_duration"
					seventh="resolved_duration"
					firstLabel="TOP 10 CATEGORY"
					secondLabel="CHAT COUNT"
					thirdLabel="CONVERSATION"
					fourthLabel="TOP 10 NETIZEN"
					fifthLabel="PEAK TIME"
					sixthLabel="RESPONSE DURATION"
					seventhLabel="RESOLVED DURATION"/>
				{content}
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowTopTenCategory); 