import React from 'react';
import moment from 'moment';
import DateTimeField from 'react-bootstrap-datetimepicker';
import SwitchButton from 'react-switch-button';

export default (props) => {
	return (
		<div className="row">
			<div className="col-md-12 header">
				<div className="col-md-2">
				  	<select
					    name="Analytics Type"
					    onChange={props.this.handleSelectedAnalytics}>
					     <option value={props.first} className="select-hr first">{props.firstLabel}</option>
					     <option value={props.second} className="select-hr">{props.secondLabel}</option>
					     <option value={props.third} className="select-hr">{props.thirdLabel}</option>
					     <option value={props.fourth} className="select-hr">{props.fourthLabel}</option>
					     <option value={props.fifth} className="select-hr">{props.fifthLabel}</option>
					     <option value={props.sixth} className="select-hr">{props.sixthLabel}</option>
					     <option value={props.seventh} className="select-hr">{props.seventhLabel}</option>
				    </select>
				</div>
				<div className="col-md-3">
			  	</div>
			  	<div>
				  	<div className="col-md-2">
				  		<p className="periode">
				  			<label className = 'label'>Session</label>
				  		</p>
			  		</div>
			  			<div className="col-md-2">
				  		<DateTimeField defaultText= {props.startDate.format("L") +' '+ props.startDate.format("LT")}
				  			inputFormat="MM/DD/YYYY h:mm A"
				  			onChange = {props.this.handleStartDateChange} />
				  			</div>
			  			<div className="col-xs-1">
				  			<p className="until">-</p>
			  			</div>
				  	<div className="col-md-2">
			  			<DateTimeField defaultText={props.endDate.format("L") +' ' + props.endDate.format("LT")} 
			  				inputFormat="MM/DD/YYYY h:mm A"
			  				minDate = {props.startDate.add(1,'days')}
			  				maxDate = {moment().subtract(1,'days')}
			  				onChange = {props.this.handleEndDateChange}/>
			  		</div>
			  		<div className="col-xs-1 chartswitch">
				  		<div className="rsbc-switch-button rsbc-switch-button-flat-round">
				  			<label htmlFor="switch-1">Chart</label>
				  			<input id="switch-1" name="switch-1" type="checkbox" disabled/>
				  			<label htmlFor="switch-1"></label>
			  			</div>
		  			</div>
			  	</div>
		  	</div>
		</div>
	);
}