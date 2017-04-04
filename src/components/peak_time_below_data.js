import React from 'react';
import moment from 'moment';

export default (props) =>{
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
				          			<div className="text-small">SUMMARY PEAK TIME</div>
				          			<div className="number-below" style={{fontSize:"1rem !important"}}>{moment(new Date(props.peaktime)).utc().format("LL")}</div>
				          			<div className="number-below" style={{fontSize:"1rem !important"}}>{moment(new Date(props.peaktime)).utc().format("HH:mm")}-{moment(new Date(props.peaktime + (60*60000))).utc().format("HH:mm")}</div>
				          		</h4>
				        	</div>
				      	</div>
			      		<div className="col-md-2">
			        		<div className="well below-data">
			          			<h4>
			          				<div className="text-small">PEAK CHAT COUNT</div>
			          				<div className="number-below">{props.peakchatcount}</div>
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
		</div>
	);
}
