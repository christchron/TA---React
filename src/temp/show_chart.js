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
import BelowData from './below_data';
import ShowTable from './show_table';
import ActiveButton from './show_active_button';
import RenderPosts from './render_posts';
import {getChartLabel, getChatCountList , getChatGrowthList, sortAscJSON, sortDescJSON} from '../utils/Utility';
import RenderHeader from './render_header';

class ShowChart extends Component {
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
			url:'daily',
			selectValue: "chatcount",
			currentSort: "ascNo",
			posts:null,
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
		this.handleSortNo = this.handleSortNo.bind(this);
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
		console.log("next props",nextProps)
		const {posts} = nextProps;
		console.log(posts != this.props.posts);
		if (posts.chatCounts){
			this.setState({
				posts
			});	
		}
	}

	setStartState(){
		if (this.props.location.pathname.indexOf('hourly') !== -1){
			this.props.fetchChartAction.fetchChartData("A5zHSH7f.json",this.setTableData);
			this.props.fetchChartAction.fetchChartData("chatcount-hourly.json");
		} else if (this.props.location.pathname.indexOf('daily') !== -1){
			this.props.fetchChartAction.fetchChartData("A5zHSH7f.json",this.setTableData);
		} else if (this.props.location.pathname.indexOf('weekly')!== -1){
			this.props.fetchChartAction.fetchChartData("A5zHSH7f.json",this.setTableData);
			this.props.fetchChartAction.fetchChartData("chatcount-weekly.json");
		} else if (this.props.location.pathname.indexOf('monthly')!== -1){
			this.props.fetchChartAction.fetchChartData("A5zHSH7f.json",this.setTableData);
			this.props.fetchChartAction.fetchChartData("chatcount-monthly.json");
		}
		this.setState({
			url: this.props.location.pathname,
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
		this.props.fetchChartAction.fetchChartData("chatcount-hourly.json",() => {
			this.setState({
				url: "hourly"
			});
		});
	}

	handleDailyButton(){
		this.props.fetchChartAction.fetchChartData("A5zHSH7f.json", () => {
			this.setState({
				url: "daily"
			});
		});
	}

	handleWeeklyButton(){
		this.props.fetchChartAction.fetchChartData("chatcount-weekly.json", () => {
			this.setState({
				url: "weekly"
			});
		});
	}

	handleMonthlyButton(){
		this.props.fetchChartAction.fetchChartData("chatcount-monthly.json", () => {
			this.setState({
				url: "monthly"
			});
		});
	}

	handleSelectedAnalytics(val){
		this.props.fetchChartAction.fetchChartData("A5zHSH7f.json");
		this.setTableData();
		this.setState({
			selectValue: val.target.value,
			url: val.target.value
		});
		this.props.history.push(val.target.value);
		
	}

	handleSortNo(){
		if (this.state.currentSort == "ascNo"){
			this.setState({
				currentSort: "descNo",
				tableData: sortDescJSON(this.state.tableData,"no")
			});
		}else{
			this.setState({
				currentSort: "ascNo",
				tableData: sortAscJSON(this.state.tableData,"no")
			});
		}
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
		if(this.state.posts){
			if (!this.state.posts.chatCounts){
			}else{
				this.state.posts.chatCounts.map((post) => {
					var tempPost = {
						no: i,
						date: moment(new Date(post.periodStart)).format("DD/MM/YYYY"),
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
		var chatCountList, chatGrowthList, chatLabel, content;
		if (this.state.posts){
			chatCountList= getChatCountList(this.state.posts);
			chatGrowthList= getChatGrowthList(this.state.posts);
			chatLabel= getChartLabel(this.state.posts,this.state);
			content = this.state.checked 
	    		? <div>
		      		<LineChart data = {chatCountList} data2={chatGrowthList} labels = {chatLabel}/>
		      		<BelowData data = {this.state.posts}/>
		      	</div>	
				:<div>
			      	<RenderPosts this={this} />
					<BelowData data = {this.state.posts}/>
				</div>;	
		}
		const startDate = moment(new Date(+this.state.start));
		const endDate = moment(new Date(+this.state.end));
		const periodButton = this.state.checked ? <ActiveButton url={this.state.url} handler = {this} /> : <div/>;
		return (
			<div>
				<h3>Chat Count</h3>
				<RenderHeader 
					this={this} 
					periodButton={periodButton} 
					startDate = {startDate} 
					endDate={endDate} 
					first="daily"
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
	return { posts: state.posts.all }
}

const mapDispatchToProps = (dispatch) => {
	return{
		fetchChartAction: bindActionCreators(fetchDataActionCreators,dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowChart); 