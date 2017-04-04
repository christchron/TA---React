import React from 'react';

export default (props) =>{
	return(
		<div>
			<div className="row">
			  	<div className="col-sm-12">
				    <div className="row">
				      	<div className="col-md-2">
				        	<div className="well">
				          		<h4>
				          			<div className="text-small">SUMMARY OFFICE DAY</div>
				          			<div className="number-below">{_.round(props.data.totalWeekdayChatCount)}</div>
				          		</h4>
				        	</div>
				      	</div>
				      	<div className="col-md-2">
					        <div className="well">
				          		<h4>
				          			<div className="text-small">AVERAGE OFFICE DAY</div>
				          			<div className="number-below">{_.round(props.data.averageWeekdayChatCount)}</div>
				          		</h4>
				        	</div>
				      	</div>
				      	<div className="col-md-2">
				        	<div className="well">
				          		<h4>
				          			<div className="text-small">SUMMARY OFF DAY</div>
				          			<div className="number-below">{_.round(props.data.totalWeekendChatCount)}</div>
				          		</h4>
				        	</div>
				      	</div>
			      		<div className="col-md-2">
			        		<div className="well">
			          			<h4>
			          				<div className="text-small">AVERAGE OFF DAY</div>
			          				<div className="number-below">{_.round(props.data.averageWeekendChatCount)}</div>
			          			</h4>
			        		</div>
			      		</div>
			      		<div className="col-md-2">
			        		<div className="well">
			          			<h4>
				          			<div className="text-small">SUMMARY ALL</div>
				          			<div className="number-below">{_.round(props.data.totalChatCount)}</div>
			          			</h4>
			        		</div>
			      		</div>
			      		<div className="col-md-2">
			        		<div className="well">
			          			<h4>
				          			<div className="text-small">AVERAGE ALL</div>
				          			<div className="number-below">{_.round(props.data.averageChatCount)}</div>
			          			</h4>
			        		</div>
			      		</div>
			    	</div>
			  	</div>
			</div>
		</div>
	);
}
