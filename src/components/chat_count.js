import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as fetchDataActionCreators from '../actions/index';
import {Link , browserHistory} from 'react-router';
import moment from 'moment';
import LineChart from './line_chart';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import _ from 'lodash';
import Select from 'react-select';
import ChatCountBelowData from './chat_count_below_data';
import ChatCountRenderData from './chat_count_render_data';
import {getChatCountData, sortAscJSON, sortDescJSON} from '../utils/Utility';
import GoogleLineChart from './google_line_chart';
import RenderHeader from './render_header';

class ShowChatCount extends Component {
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
			url:'chat_count?view=daily',
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
		this.handleSortCC = this.handleSortCC.bind(this);
		this.handleSortCG = this.handleSortCG.bind(this);
		this.handleSortInCC = this.handleSortInCC.bind(this);
		this.handleSortOutCC = this.handleSortOutCC.bind(this);
		this.handlePageChange = this.handlePageChange.bind(this);
	}

	componentWillMount() {
		this.setStartState();
	}

	componentWillReceiveProps(nextProps){
		console.log("next props",nextProps.analyticsData)
		const {analyticsData} = nextProps;
		if (analyticsData.chatCounts){
			this.setState({
				analyticsData
			});	
		}
	}

	setStartState(){
		if (this.state.url.indexOf('hourly') !== -1){
			this.props.fetchAnalyticsAction.fetchAnalyticsData("chatcount-hourly.json");
		} else if (this.state.url.indexOf('daily') !== -1){
			this.props.fetchAnalyticsAction.fetchAnalyticsData("A5zHSH7f.json",this.setTableData);
		} else if (this.state.url.indexOf('weekly')!== -1){
			this.props.fetchAnalyticsAction.fetchAnalyticsData("chatcount-weekly.json");
		} else if (this.state.url.indexOf('monthly')!== -1){
			this.props.fetchAnalyticsAction.fetchAnalyticsData("chatcount-monthly.json");
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
		this.props.fetchAnalyticsAction.fetchAnalyticsData("chatcount-hourly.json",() => {
			this.setState({
				url: "chat_count?view=hourly"
			});
		});
	}

	handleDailyButton(){
		this.props.fetchAnalyticsAction.fetchAnalyticsData("A5zHSH7f.json", () => {
			this.setState({
				url: "chat_count?view=daily"
			});
		});
	}

	handleWeeklyButton(){
		this.props.fetchAnalyticsAction.fetchAnalyticsData("chatcount-weekly.json", () => {
			this.setState({
				url: "chat_count?view=weekly"
			});
		});
	}

	handleMonthlyButton(){
		this.props.fetchAnalyticsAction.fetchAnalyticsData("chatcount-monthly.json", () => {
			this.setState({
				url: "chat_count?view=monthly"
			});
		});
	}

	handleSelectedAnalytics(val){
		this.props.fetchAnalyticsAction.fetchAnalyticsData("A5zHSH7f.json");
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

	handleSortCC(){
		if (this.state.currentSort == "ascCC"){
			this.setState({
				currentSort: "descCC",
				tableData: sortDescJSON(this.state.tableData,"CC")
			});
		}else{
			this.setState({
				currentSort: "ascCC",
				tableData: sortAscJSON(this.state.tableData,"CC")
			});
		}
	}

	handleSortCG(){
		if (this.state.currentSort == "ascCG"){
			this.setState({
				currentSort: "descCG",
				tableData: sortDescJSON(this.state.tableData,"CG")
			});
		}else{
			this.setState({
				currentSort: "ascCG",
				tableData: sortAscJSON(this.state.tableData,"CG")
			});
		}
	}

	handleSortInCC(){
		if (this.state.currentSort == "ascinCC"){
			this.setState({
				currentSort: "descinCC",
				tableData: sortDescJSON(this.state.tableData,"inCC")
			});
		}else{
			this.setState({
				currentSort: "ascinCC",
				tableData: sortAscJSON(this.state.tableData,"inCC")
			});
		}
	}

	handleSortOutCC(){
		if (this.state.currentSort == "ascoutCC"){
			this.setState({
				currentSort: "descoutCC",
				tableData: sortDescJSON(this.state.tableData,"outCC")
			});
		}else{
			this.setState({
				currentSort: "ascoutCC",
				tableData: sortAscJSON(this.state.tableData,"outCC")
			});
		}
	}

	handlePageChange(eventKey) {
	   	this.setState({activePage: eventKey});
	}

	setTableData(){
		var CCTable =[];
		var i = 1;
		if(this.state.analyticsData){
			if (!this.state.analyticsData.chatCounts){
			}else{
				this.state.analyticsData.chatCounts.map((post) => {
					var tempPost = {
						no: i,
						date: post.periodStart,
						day: moment(new Date(post.periodStart)).format("dddd"), 
						inCC: post.incomingChatCount, outCC: post.outgoingChatCount, 
						CC: post.chatCount, 
						CG: post.chatGrowth};	
					i++;
					CCTable.push(tempPost);					
				});
			}
		}
		this.setState({
			tableData: CCTable
		});
	}

	render() {
		var chartLabels = 	[
								{"label":"Date","type":"datetime"},
								{"label":"Chat Count","type":"number"},
								{"label":"Chat Growth","type":"number"}
							];
		var content, chatCountData;
		var colors = ["red","blue"];
		if (this.state.analyticsData){
			chatCountData = getChatCountData(this.state.analyticsData);
			content = this.state.checked 
	    		? <div>
		      		<GoogleLineChart data = {chatCountData} labels = {chartLabels} colors={colors} url = {this.state.url}/>
		      		<ChatCountBelowData data = {this.state.analyticsData}/>
		      	</div>	
				:<div>
			      	<ChatCountRenderData this={this} />
					<ChatCountBelowData data = {this.state.analyticsData}/>
				</div>;	
		}
		const startDate = moment(new Date(+this.state.start));
		const endDate = moment(new Date(+this.state.end));
		return (
			<div>
				<h3>Chat Count</h3>
				<RenderHeader 
					this={this} 
					startDate = {startDate} 
					endDate={endDate} 
					chart={true}
					first="chat_count"
					second="conversation"
					third="category"
					fourth="netizen"
					fifth="peak_time"
					sixth="response_duration"
					seventh="resolved_duration"
					firstLabel="CHAT COUNT"
					secondLabel="CONVERSATION"
					thirdLabel="TOP 10 CATEGORY"
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowChatCount); 