import React from 'react';
import moment from 'moment';

export default (props) => {
	return(
			<div>
				<div className="row">
				  	<div className="col-sm-12">
					    <div className="row">
					      	<div className="col-md-2">
					        	<div className="well mtop below-data">
					          		<h4>
					          			<div className="text-small">RESPONSE RATE</div>
					          			<div className="number-below">{_.round(props.data.responseRate)}</div>
					          		</h4>
					        	</div>
					      	</div>
					      	<div className="col-md-2">
						        <div className="well mtop below-data">
					          		<h4>
					          			<div className="text-small">PASSED RESPONSE RATE</div>
					          			<div className="number-below">{_.round(props.data.passedResponseRate)} <span className="units">%</span></div>
					          		</h4>
					        	</div>
					      	</div>
					      	<div className="col-md-2">
						        <div className="well mtop below-data">
					          		<h4>
					          			<div className="text-small">FAILED RESPONSE RATE</div>
					          			<div className="number-below">123 <span className="units">%</span></div>
					          		</h4>
					        	</div>
					      	</div>
					      	<div className="col-md-2">
						        <div className="well mtop below-data">
					          		<h4>
					          			<div className="text-small">ABANDONED RATE</div>
					          			<div className="number-below">{_.round(props.data.abandonedRate)} <span className="units">%</span></div>
					          		</h4>
					        	</div>
					      	</div>
					      	<div className="col-md-2">
					        	<div className="well mtop below-data">
					          		<h4>
					          			<div className="text-small">AVERAGE RESPONSE DURATION</div>
					          			<div className="number-below">{moment(new Date(props.data.averageResponseDuration)).utc().format("HH:mm:ss")}</div>
					          		</h4>
					        	</div>
					      	</div>
				      		<div className="col-md-2">
				        		<div className="well mtop below-data">
				          			<h4>
				          				<div className="text-small">AVERAGE RESOLVED DURATION</div>
				          				<div className="number-below">{moment(new Date(props.data.averageResolvedDuration)).utc().format("HH:mm:ss")}</div>
				          			</h4>
				        		</div>
				      		</div>
				    	</div>
				  	</div>
				</div>
				<div className="row">
					<div className="col-sm-12">
					    <div className="row">	
					    	<div className="col-md-4">
					        	<div className="well">
					          		<h4 className="text-primary">
					          			<div>AVERAGE RESPONSE DURATION PER STAFF</div>
					          			<div>1234</div>
					          		</h4>
					        	</div>
					      	</div>
					    </div>
				   	</div>
				</div>
			</div>
		);
}