import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as fetchDataActionCreators from '../actions/index';
import {Link , browserHistory} from 'react-router';
import moment from 'moment';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import _ from 'lodash';
import Select from 'react-select';
import ResponseDurationBelowData from './response_duration_below_data';
import ResponseDurationRenderData from './response_duration_render_data';
import {getResponseDurationData, sortAscJSON, sortDescJSON} from '../utils/Utility';
import GoogleLineChart from './google_line_chart';
import RenderHeader from './render_header';

class ShowResponseDuration extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	constructor() {
		super();
		this.state = { 
			checked: false, 
			activePage:1,
			start: moment().subtract(31, 'days'), 
			end: moment().add(-1, 'days'), 
			url:'response_duration?view=hourly',
			currentSort: "ascNo",
			analyticsData:null,
			tableData: []
		};
		this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
		this.handleStartDateChange = this.handleStartDateChange.bind(this);
		this.handleEndDateChange = this.handleEndDateChange.bind(this);
		this.handleHourlyButton = this.handleHourlyButton.bind(this);
		this.handleDailyButton = this.handleDailyButton.bind(this);
		this.handleWeeklyButton = this.handleWeeklyButton.bind(this);
		this.handleMonthlyButton = this.handleMonthlyButton.bind(this);
		this.handleSelectedAnalytics = this.handleSelectedAnalytics.bind(this);
		this.setStartState = this.setStartState.bind(this);
		this.setTableData = this.setTableData.bind(this);
		this.handleSortDate = this.handleSortDate.bind(this);
		this.handlePageChange = this.handlePageChange.bind(this);
	}

	componentWillMount() {
		this.setStartState();
	}

	componentWillReceiveProps(nextProps){
		console.log(nextProps.analyticsData)
		const {analyticsData} = nextProps;
		if (analyticsData){
			this.setState({
				analyticsData
			});	
		}
	}

	setStartState(){
		if (this.state.url.indexOf('hourly') !== -1){
			this.props.fetchAnalyticsAction.fetchAnalyticsData("response_duration.json",this.setTableData);
		} else if (this.state.url.indexOf('daily') !== -1){
			this.props.fetchAnalyticsAction.fetchAnalyticsData("response_duration_daily.json");
		} else if (this.state.url.indexOf('weekly')!== -1){
			this.props.fetchAnalyticsAction.fetchAnalyticsData("weekly.json");
		} else if (this.state.url.indexOf('monthly')!== -1){
			this.props.fetchAnalyticsAction.fetchAnalyticsData("monthly.json");
		}
		this.setState({
			checked: true
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

	handleHourlyButton(){
		this.props.fetchAnalyticsAction.fetchAnalyticsData("response_duration.json",() => {
			this.setState({
				url: "response_duration?view=hourly"
			});
		});
	}

	handleDailyButton(){
		this.props.fetchAnalyticsAction.fetchAnalyticsData("response_duration_daily.json", () => {
			this.setState({
				url: "response_duration?view=daily"
			});
		});
	}

	handleWeeklyButton(){
		this.props.fetchAnalyticsAction.fetchAnalyticsData("response_duration_weekly.json", () => {
			this.setState({
				url: "response_duration?view=weekly"
			});
		});
	}

	handleMonthlyButton(){
		this.props.fetchAnalyticsAction.fetchAnalyticsData("response_duration_monthly.json", () => {
			this.setState({
				url: "response_duration?view=monthly"
			});
		});
	}

	handleSelectedAnalytics(val){
		this.props.fetchAnalyticsAction.fetchAnalyticsData("response_duration.json");
		this.setTableData();
		this.props.history.push(val.target.value);
		
	}

	handleSortDate(){
		if (this.state.currentSort == "ascDate"){
			this.setState({
				currentSort: "descDate",
				tableData: sortDescJSON(this.state.tableData,"date")
			});
		}else{
			this.setState({
				currentSort: "ascDate",
				tableData: sortAscJSON(this.state.tableData,"date")
			});
		}
	}

	handlePageChange(eventKey) {
	   	this.setState({activePage: eventKey});
	}

	setTableData(){
		var CCTable =[];
		if(this.state.analyticsData){
			if (!this.state.analyticsData.responseDurationDayViews){
			}else{
				var currentDate = moment(new Date(this.state.analyticsData.responseDurationDayViews[0].chatSessionStartTime)).format("LL");
				this.state.analyticsData.responseDurationDayViews.map((rDuration) => {
					var tempRDuration = [];
					for (var i =0;i<24;i++){
						if (rDuration["h"+i] != null){
							tempRDuration.push(rDuration["h"+i]);
						}else{
							tempRDuration.push("-");
						}
					}
					var tempResponseDurations = {
						date: rDuration.chatSessionStartTime,
						rDurations : tempRDuration
					};	
					i++;
					CCTable.push(tempResponseDurations);					
				});
			}
		}
		this.setState({
			tableData: CCTable
		});
	}

	render() {
		console.log("analyticsData",this.props.analyticsData)
		
		var chartLabels = 	[
								{"label":"Date","type":"datetime"},
								{"label":"Average response duration per chat","type":"timeofday", },
							];
		var content;
		var colors = ["#02aef1"];
		if (this.state.analyticsData){
			var responseDurationData = getResponseDurationData(this.state.analyticsData);
			content = this.state.checked 
	    		? <div>
	    			<GoogleLineChart data = {responseDurationData} labels={chartLabels} colors={colors} url = {this.state.url}/>
	    			<ResponseDurationBelowData averageResponseDuration ={this.props.analyticsData.averageResponseDuration} maxResponseDuration={this.props.analyticsData.maxResponseDuration} userBcaDurations={this.props.analyticsData.userBcaDurations}/>
		      	</div>	
				:<div>
			      	<ResponseDurationRenderData this={this} />
			      	<ResponseDurationBelowData averageResponseDuration ={this.props.analyticsData.averageResponseDuration} maxResponseDuration={this.props.analyticsData.maxResponseDuration} userBcaDurations={this.props.analyticsData.userBcaDurations}/>
				</div>;	
		}
		const startDate = moment(new Date(+this.state.start));
		const endDate = moment(new Date(+this.state.end));
		return (
			<div>
				<h3>Response Duration</h3>
				<RenderHeader 
					this={this} 
					startDate = {startDate} 
					endDate={endDate} 
					chart={true}
					first="response_duration"
					second="chat_count"
					third="conversation"
					fourth="category"
					fifth="netizen"
					sixth="peak_time"
					seventh="resolved_duration"
					firstLabel="RESPONSE DURATION"
					secondLabel="CHAT COUNT"
					thirdLabel="CONVERSATION"
					fourthLabel="TOP 10 CATEGORY"
					fifthLabel="TOP 10 NETIZEN"
					sixthLabel="PEAK TIME"
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowResponseDuration); 