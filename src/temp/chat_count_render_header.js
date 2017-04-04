import React from 'react';
import moment from 'moment';
import DateTimeField from 'react-bootstrap-datetimepicker';
import ActiveButton from './active_button';

export default (props) => {
	var aButton = props.this.state.checked ? <ActiveButton url={props.this.state.url} handler = {props.this} link = {"chat_count"}/> : <div></div>;

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
				<div className="col-md-2">
			  	</div>
			  	<div>
				  	<div className="col-md-1 period">
				  		<p className="periode">
				  			<label className = 'label'>Period</label>
				  			<span className='until'>-</span>
				  		</p>
			  		</div>
			  			<div className="col-md-2" style={{width: "150px"}}>
					  		<DateTimeField defaultText= {props.startDate.format("ll")}
					  			inputFormat="MMM, DD YYYY"
					  			onChange = {props.this.handleStartDateChange} />
			  			</div>
				  	<div className="col-md-2" style={{width: "150px"}}>
			  			<DateTimeField defaultText={props.endDate.format("ll")} 
			  				inputFormat="MMM, DD YYYY"
			  				minDate = {props.startDate.add(1,'days')}
			  				maxDate = {moment().subtract(1,'days')}
			  				onChange = {props.this.handleEndDateChange}/>
			  		</div>
			  		<div className="col-md-3" style={{marginLeft: "-20px"}}>
			  			{aButton}
			  		</div>
			  		<div className="col-xs-1 chartswitch">
				  		<div className="rsbc-switch-button rsbc-switch-button-flat-round">
				  			<label htmlFor="switch-1">Chart</label>
				  			<input id="switch-1" name="switch-1" type="checkbox" 
				  				checked={ props.this.state.checked } 
				  				onChange={ props.this.handleCheckBoxChange }/>
				  			<label htmlFor="switch-1"></label>
			  			</div>
		  			</div>
			  	</div>
		  	</div>
		</div>
	);
}