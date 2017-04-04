import React from 'react';
import moment from 'moment';
import {Table, Pagination} from 'react-bootstrap';

export default (props) => {
	var tData, page;
	if (props.this.state.conversationData.length === 0){
	}else{
		var chunkedData = _.chunk(props.this.state.conversationData,10);
		tData = chunkedData[props.this.state.activePage-1].map((colName) => {
			return(
				<tr key={colName.id}>
			        <td className="conversation id">{colName.id}</td>
			        <td className="conversation date">{moment(new Date(colName.date)).format("LL")}</td>
			        <td className="conversation cit">{colName.chatintime}</td>
			        <td className="conversation responsetime">{colName.responsetime}</td>
			        <td className="conversation responseduration">{colName.responseduration}</td>
			        <td className="conversation resolvedduration">{colName.resolvedduration}</td>
			        <td className="conversation kpi">{colName.kpi}</td>
			        <td className="conversation chatcontent">{colName.chatcontent}</td>
			        <td className="conversation chatrespond">{colName.chatrespond}</td>
			        <td className="conversation type">{colName.type}</td>
			        <td className="conversation category">{colName.category}</td>
			        <td className="conversation sentiment">{colName.sentiment}</td>
			        <td className="conversation previd">{colName.previousID}</td>
			        <td className="conversation newid">{colName.newID}</td>
			        <td className="conversation email">{colName.email}</td>
			        <td className="conversation staff">{colName.staff}</td>
			        <td className="conversation status">{colName.status}</td>
		      	</tr>	
			);
		});
		page = <Pagination
					   className={props.this.state.conversationData.length === 0? 'hidden':'shown'}
					   style={{float: "right"}}
					   prev
					   next
					   first
					   last
					   ellipsis
					   items={(_.floor(props.this.state.conversationData.length / 10)) +1}
					   maxButtons={3}
					   boundaryLinks
					   activePage={props.this.state.activePage}
					   onSelect={props.this.handlePageChange}>
					</Pagination>;
	}

	const arrow = <span>
			<span className="dropdown">
        		<span className="caret" style={{margin: "10px 0 10px 5px",color:"#fff"}}></span>
        	</span>
        	<span className="dropup">
        		<span className="caret" style={{margin: "10px 0",color:"#fff"}}></span>
        	</span></span>;

   	const downArrow =<span className="dropdown">
        		<span className="caret" style={{margin: "10px 0 10px 5px",color:"#fff"}}></span>
        	</span>;

    const upArrow = <span className="dropup">
		        		<span className="caret" style={{margin: "10px 0",color:"#fff", marginLeft:"5px"}}></span>
		        	</span>;


    var idArrow = arrow, dateArrow= arrow, citArrow= arrow, responseTimeArrow= arrow, responseDurationArrow= arrow, resolvedDurationArrow= arrow;
    console.log(props.this.state.currentSort);
    switch (props.this.state.currentSort){
    	case "ascID": {idArrow = downArrow; break;}
    	case "descID": {idArrow = upArrow;break;}
    	case "ascDate": {dateArrow = downArrow;break;}
    	case "descDate": {dateArrow = upArrow;break;}
    	case "ascChatInTime": {citArrow = downArrow;break;}
    	case "descChatInTime": {citArrow = upArrow;break;}
    	case "ascResponseTime": {responseTimeArrow = downArrow;break;}
    	case "descResponseTime": {responseTimeArrow = upArrow;break;}
    	case "ascResponseDuration": {responseDurationArrow = downArrow;break;}
    	case "descResponseDuration": {responseDurationArrow = upArrow;break;}
    	case "ascResolvedDuration": {resolvedDurationArrow = downArrow;break;}
    	case "descResolvedDuration": {resolvedDurationArrow = upArrow;break;}
    }

	return(
		<div>
			<div style={{position: "relative"}}>
				<div className="table">
					<Table striped bordered condensed hover className="conversation">
					    <thead>
					      <tr className="trHeight">
					        <th className="id" onClick = {props.this.handleSortID}>
					        	<span>ID Chat Session</span>
					        	{idArrow}
					        </th>
					        <th className="date" onClick = {props.this.handleSortDate}>
					        	<span style={{verticalAlign: "middle"}}>Date</span>
					        	{dateArrow}
					        </th>
				         	<th className="cit" onClick = {props.this.handleSortChatInTime}>
					        	<span style={{verticalAlign: "middle"}}>Chat In Time</span>
					        	{citArrow}
					        </th>
					         <th className="responsetime" onClick = {props.this.handleSortResponseTime}>
					        	<span style={{verticalAlign: "middle"}}>Response Time</span>
					        	{responseTimeArrow}
					        </th>
					         <th className="responseduration" onClick = {props.this.handleSortResponseDuration}>
					        	<span style={{verticalAlign: "middle"}}>Response Duration</span>
					        	{responseDurationArrow}
					        </th>
					         <th className="resolvedduration" onClick = {props.this.handleSortResolvedDuration}>
					        	<span style={{verticalAlign: "middle"}}>Resolved Duration</span>
					        	{resolvedDurationArrow}
					        </th>
					        <th className="kpi">
					        	<span>KPI</span>
					        </th>
					        <th className="chatcontent">
					        	<span>Chat Content</span>
					        </th>
					        <th className="chatrespond">
					        	<span>Chat Respond</span>
					        </th>
					        <th className="type">
					        	<span>Type of Chat</span>
					        </th>
					        <th className="category">
					        	<span>Category</span>
					        </th>
					        <th className="sentiment">
					        	<span>Sentiment</span>
					        </th>
					        <th className="previd">
					        	<span>Previous ID</span>
					        </th>
					        <th className="newid">
					        	<span>New ID</span>
					        </th>
					        <th className="email">
					        	<span>Email Customer</span>
					        </th>
					        <th className="staff">
					        	<span>Staff</span>
					        </th>
					        <th className="status">
					        	<span>Status</span>
					        </th>
					      </tr>
					    </thead>
					    <tbody className="tablebody">
					      	{tData}
					    </tbody>
				  	</Table>
				</div>
			</div>
		  	<div>
		  		{page}
		  	</div>
		</div>
	);
}