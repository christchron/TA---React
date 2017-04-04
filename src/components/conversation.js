import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import * as fetchDataActionCreators from '../actions/index';
import {Link , browserHistory} from 'react-router';
import moment from 'moment';
import DateTimeField from 'react-bootstrap-datetimepicker';
import LineChart from './line_chart';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import _ from 'lodash';
import Select from 'react-select';
import {bindActionCreators} from 'redux';
import ConversationBelowData from './conversation_below_data';
import RenderHeader from './render_header';
import ConversationRenderData from './conversation_render_data';
import {sortAscJSON,sortDescJSON} from '../utils/Utility';

class ShowConversation extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	constructor() {
		super();
		this.state = { checked: false , 
			start: moment().subtract(31, 'days'), 
			end: moment().add(-1, 'days'),
			activePage:1,
			url:'conversation', 
			currentSort: "ascID",
			conversationData:[]};
		this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
		this.handleStartDateChange = this.handleStartDateChange.bind(this);
		this.handleEndDateChange = this.handleEndDateChange.bind(this);
		this.mySortFunc = this.mySortFunc.bind(this);
		this.setConversationData = this.setConversationData.bind(this);
		this.handleSelectedAnalytics = this.handleSelectedAnalytics.bind(this);
		this.handlePageChange = this.handlePageChange.bind(this);
		this.handleSortID = this.handleSortID.bind(this);
		this.handleSortDate = this.handleSortDate.bind(this);
		this.handleSortResponseTime = this.handleSortResponseTime.bind(this);
		this.handleSortResponseDuration = this.handleSortResponseDuration.bind(this);
		this.handleSortResolvedDuration = this.handleSortResolvedDuration.bind(this);
		this.handleSortChatInTime = this.handleSortChatInTime.bind(this);

	}

	componentWillMount(){
		this.setStartState();
	}

	setStartState(){
		this.props.fetchAnalyticsAction.fetchAnalyticsData("conversation.json",this.setConversationData);
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
		console.log(val.target.value);
		this.props.fetchAnalyticsAction.fetchAnalyticsData("conversation.json");
		this.props.history.push(val.target.value);
	}

	handlePageChange(eventKey) {
	   	this.setState({activePage: eventKey});
	}

	handleSortID(){
		if (this.state.currentSort == "ascID"){
			this.setState({
				currentSort: "descID",
				conversationData: sortDescJSON(this.state.conversationData,"id")
			});
		}else{
			this.setState({
				currentSort: "ascID",
				conversationData: sortAscJSON(this.state.conversationData,"id")
			});
		}
	}

	handleSortDate(){
		if (this.state.currentSort == "ascDate"){
			this.setState({
				currentSort: "descDate",
				conversationData: sortDescJSON(this.state.conversationData,"date")
			});
		}else{
			this.setState({
				currentSort: "ascDate",
				conversationData: sortAscJSON(this.state.conversationData,"date")
			});
		}
	}

	handleSortChatInTime(){
		if (this.state.currentSort == "ascChatInTime"){
			this.setState({
				currentSort: "descChatInTime",
				conversationData: sortDescJSON(this.state.conversationData,"chatintime")
			});
		}else{
			this.setState({
				currentSort: "ascChatInTime",
				conversationData: sortAscJSON(this.state.conversationData,"chatintime")
			});
		}
	}

	handleSortResponseTime(){
		if (this.state.currentSort == "ascResponseTime"){
			this.setState({
				currentSort: "descResponseTime",
				conversationData: sortDescJSON(this.state.conversationData,"responsetime")
			});
		}else{
			this.setState({
				currentSort: "ascResponseTime",
				conversationData: sortAscJSON(this.state.conversationData,"responsetime")
			});
		}
	}

	handleSortResponseDuration(){
		if (this.state.currentSort == "ascResponseDuration"){
			this.setState({
				currentSort: "descResponseDuration",
				conversationData: sortDescJSON(this.state.conversationData,"responseduration")
			});
		}else{
			this.setState({
				currentSort: "ascResponseDuration",
				conversationData: sortAscJSON(this.state.conversationData,"responseduration")
			});
		}
	}

	handleSortResolvedDuration(){
		if (this.state.currentSort == "ascResolvedDuration"){
			this.setState({
				currentSort: "descResolvedDuration",
				conversationData: sortDescJSON(this.state.conversationData,"resolvedduration")
			});
		}else{
			this.setState({
				currentSort: "ascResolvedDuration",
				conversationData: sortAscJSON(this.state.conversationData,"resolvedduration")
			});
		}
	}

	mySortFunc(a,b,order){
		if (order == "asc"){
			return moment(a.date,"DD/MM/YYYY") - moment(b.date,"DD/MM/YYYY");		
		}
		else{
			return moment(b.date,"DD/MM/YYYY") - moment(a.date,"DD/MM/YYYY");		
		}
	}

	setConversationData(){
		var ConversationTable =[];
		var i = 1;
		if(this.props.analyticsData){
			if (!this.props.analyticsData.conversations){
			}else{
				this.props.analyticsData.conversations.map((post) => {
					var tempPost = {
						id: post.sessionId,
						date: post.firstChatTime, 
						chatintime: moment(new Date(post.firstChatTime)).format("HH:mm"),
						responsetime: moment(new Date(post.firstReplyTime)).format("HH:mm"),
						responseduration: moment(new Date(post.averageResponseDuration)).utc().format("HH:mm:ss"),
						resolvedduration: moment(new Date(post.resolvedDuration)).utc().format("HH:mm:ss"),
						kpi: post.kpi ? "passed" : "failed",
						chatcontent: post.userCustomerSummary,
						chatrespond: post.userBcaSummary,
						type: post.type,
						category: post.category,
						sentiment: post.sentiment,
						previousID: 123,
						newID: 123,
						email: post.customerEmail,
						staff: post.usernameBca,
						status: "aaa"
					};
					ConversationTable.push(tempPost);
				});
			}
			ConversationTable = sortAscJSON(ConversationTable,"id");

		}

		this.setState({
			conversationData: ConversationTable
		});
	}

	render() {
		console.log(this.state.conversationData);
		const startDate = moment(new Date(+this.state.start));
		const endDate = moment(new Date(+this.state.end));
		return (
			<div>
				<h3>Conversation</h3>
				<RenderHeader 
					this={this} 
					startDate = {startDate} 
					endDate={endDate} 
					url = {this.state.url} 
					chart={false}
					first="conversation"
					second="chat_count"
					third="category"
					fourth="netizen"
					fifth="peak_time"
					sixth="response_duration"
					seventh="resolved_duration"
					firstLabel="CONVERSATION"
					secondLabel="CHAT COUNT"
					thirdLabel="TOP 10 CATEGORY"
					fourthLabel="TOP 10 NETIZEN"
					fifthLabel="PEAK TIME"
					sixthLabel="RESPONSE DURATION"
					seventhLabel="RESOLVED DURATION"/>
				<div>
			      	<ConversationRenderData this={this} />	
					<ConversationBelowData data = {this.props.analyticsData} />
				</div>
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


export default connect(mapStateToProps, mapDispatchToProps)(ShowConversation);