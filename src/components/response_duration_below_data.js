import React from 'react';
import moment from 'moment';

export default (props) =>{
	var i = 0;
	if (props.userBcaDurations){
		var userBCA = props.userBcaDurations.map((user) => {
			i++;
			var userDuration = user.responseDuration ? user.responseDuration : "00:00:00";
			if (i % 4 == 0 || (!props.userBcaDurations[i])){
				return(
					<div className="col-md-3 text-small" style={{textAlign:"center", marginTop:"10px", marginBottom:"10px"}} key={i}>
						<div className="text-small">{user.userBcaName}</div>
						<div className="number-below">{userDuration}</div>
					</div>
				);			
			}else{
				return(
					<div className="col-md-3 text-small" style={{textAlign:"center", marginTop:"10px", marginBottom:"10px", borderRight:"solid 1px #818a91"}} key={i}>
						<div className="text-small">{user.userBcaName}</div>
						<div className="number-below">{userDuration}</div>
					</div>
				);	
			}
			
		});
	}
	return(
		<div>
			<div className="row">
			  	<div className="col-sm-12">
				    <div className="row">
				      	<div className="col-md-2">
				      	</div>
				      	<div className="col-md-2">
				      	</div>
				      	<div className="col-md-2">
				        	<div className="well below-data">
				          		<h4>
				          			<div className="text-small">AVERAGE RESPONSE DURATION PER CHAT</div>
				          			<div className="number-below">{moment(new Date(props.averageResponseDuration)).utc().format("HH:mm:ss")}</div>
				          		</h4>
				        	</div>
				      	</div>
			      		<div className="col-md-2">
			        		<div className="well below-data">
			          			<h4>
			          				<div className="text-small">LONGEST RESPONSE DURATION</div>
			          				<div className="number-below">{moment(new Date(props.maxResponseDuration)).utc().format("HH:mm:ss")}</div>
			          			</h4>
			        		</div>
			      		</div>
			      		<div className="col-md-2">
			      		</div>
			      		<div className="col-md-2">
			      		</div>
			    	</div>
			  	</div>
			</div>
			<div className="row">
			  	<div className="col-sm-12">
				    <div className="row">
				    	<div className="col-md-2"></div>
				      	<div className="col-md-8">
				        	<div className="well">
				          		<h4>
				          			<div className="text-small">AVERAGE RESPONSE DURATION</div>
				          		</h4>
				          		<div className="row">
					          		{userBCA}
					          	</div>
				        	</div>
				      	</div>
			    	</div>
			  	</div>
			</div>
		</div>
	);
}
