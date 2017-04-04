import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as fetchDataActionCreators from '../actions/index';
import {Link , browserHistory} from 'react-router';
import moment from 'moment';
import PeakTimeLineChart from './peak_time_line_chart';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import _ from 'lodash';
import Select from 'react-select';
import PeakTimeBelowData from './peak_time_below_data';
import PeakTimeRenderData from './peak_time_render_data';
import {getPeakTimeData, sortAscJSON, sortDescJSON} from '../utils/Utility';
import GoogleLineChart from './google_line_chart';
import RenderHeader from './render_header';

class ShowPeakTime extends Component {
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
			url:'peak_time?view=hourly',
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
		const {analyticsData} = nextProps;
		if (analyticsData.chatCounts){
			this.setState({
				analyticsData
			});	
		}
	}

	setStartState(){
		if (this.state.url.indexOf('hourly') !== -1){
			this.props.fetchAnalyticsAction.fetchAnalyticsData("peaktime-hourly.json",this.setTableData);
		} else if (this.state.url.indexOf('daily') !== -1){
			this.props.fetchAnalyticsAction.fetchAnalyticsData("peaktime-daily.json");
		} else if (this.state.url.indexOf('weekly')!== -1){
			this.props.fetchAnalyticsAction.fetchAnalyticsData("peaktime-weekly.json");
		} else if (this.state.url.indexOf('monthly')!== -1){
			this.props.fetchAnalyticsAction.fetchAnalyticsData("peaktime-monthly.json");
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
		this.props.fetchAnalyticsAction.fetchAnalyticsData("peaktime-hourly.json",() => {
			this.setState({
				url: "peak_time?view=hourly"
			});
		});
	}

	handleDailyButton(){
		this.props.fetchAnalyticsAction.fetchAnalyticsData("peaktime-daily.json", () => {
			this.setState({
				url: "peak_time?view=daily"
			});
		});
	}

	handleWeeklyButton(){
		this.props.fetchAnalyticsAction.fetchAnalyticsData("peaktime-weekly.json", () => {
			this.setState({
				url: "peak_time?view=weekly"
			});
		});
	}

	handleMonthlyButton(){
		this.props.fetchAnalyticsAction.fetchAnalyticsData("peaktime-monthly.json", () => {
			this.setState({
				url: "peak_time?view=monthly"
			});
		});
	}

	handleSelectedAnalytics(val){
		this.props.fetchAnalyticsAction.fetchAnalyticsData("peaktime-hourly.json");
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
			if (!this.state.analyticsData.peakTimeDayViews){
			}else{
				var currentDate = moment(new Date(this.state.analyticsData.peakTimeDayViews[0].periodStart)).format("LL");
				this.state.analyticsData.peakTimeDayViews.map((peaktime) => {
					var tempPeakTime = [];
					for (var i =0;i<24;i++){
						if (peaktime["h"+i] != null){
							tempPeakTime.push(peaktime["h"+i]);
						}else{
							tempPeakTime.push("-");
						}
					}
					var tempPeakTimes = {
						date: peaktime.periodStart,
						peakTimes : tempPeakTime
					};	
					i++;
					CCTable.push(tempPeakTimes);					
				});
			}
		}
		this.setState({
			tableData: CCTable
		});
	}

	render() {
		var colors = ["#5DC3AD"];
		var peakTimeData = getPeakTimeData(this.state.analyticsData);
		var chartLabels = 	[
								{"label":"Date","type":"datetime"},
								{"label":"Chat","type":"number", },
							];
		var content;
		if (this.state.analyticsData){
			content = this.state.checked 
	    		? <div>
	    			<GoogleLineChart data = {peakTimeData} labels = {chartLabels} colors={colors} url = {this.state.url}/>
	    			<PeakTimeBelowData peaktime ={ this.props.analyticsData.peakTime} peakchatcount={this.props.analyticsData.peakChatCount} />
		      	</div>	
				:<div>
			      	<PeakTimeRenderData this={this} />
			      	<PeakTimeBelowData peaktime ={ this.props.analyticsData.peakTime} peakchatcount={this.props.analyticsData.peakChatCount} />
				</div>;	
		}
		const startDate = moment(new Date(+this.state.start));
		const endDate = moment(new Date(+this.state.end));
		return (
			<div>
				<h3>Peak Time</h3>
				<RenderHeader 
					this={this} 
					startDate = {startDate} 
					endDate={endDate} 
					chart={true}
					first="peak_time"
					second="chat_count"
					third="conversation"
					fourth="category"
					fifth="netizen"
					sixth="response_duration"
					seventh="resolved_duration"
					firstLabel="PEAK TIME"
					secondLabel="CHAT COUNT"
					thirdLabel="CONVERSATION"
					fourthLabel="TOP 10 CATEGORY"
					fifthLabel="TOP 10 NETIZEN"
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowPeakTime); 