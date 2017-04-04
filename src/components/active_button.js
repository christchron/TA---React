import React from 'react';
import {Link} from 'react-router';

export default (props) =>{
	if (props.url.indexOf('hourly') !== -1){
      return(
        <div className="btn-group" role="group">
            <Link to={props.link} className="btn btn-success" onClick = {props.handler.handleHourlyButton}>Hours</Link>
            <Link to={props.link} className="btn btn-secondary" onClick = {props.handler.handleDailyButton}>Day</Link>
            <Link to={props.link} className="btn btn-secondary" onClick = {props.handler.handleWeeklyButton}>Week</Link>
            <Link to={props.link} className="btn btn-secondary" onClick = {props.handler.handleMonthlyButton}>Month</Link>
          </div>);
    }else if (props.url.indexOf('daily') !== -1){
      return(
        <div className="btn-group" role="group">
            <Link to={props.link} className="btn btn-secondary" onClick = {props.handler.handleHourlyButton}>Hours</Link>
            <Link to={props.link} className="btn btn-success" onClick = {props.handler.handleDailyButton}>Day</Link>
            <Link to={props.link} className="btn btn-secondary" onClick = {props.handler.handleWeeklyButton}>Week</Link>
            <Link to={props.link} className="btn btn-secondary" onClick = {props.handler.handleMonthlyButton}>Month</Link>
          </div>);
    }else if (props.url.indexOf('weekly') !== -1){
      return(
        <div className="btn-group" role="group">
          <Link to={props.link} className="btn btn-secondary" onClick = {props.handler.handleHourlyButton}>Hours</Link>
          <Link to={props.link} className="btn btn-secondary" onClick = {props.handler.handleDailyButton}>Day</Link>
          <Link to={props.link} className="btn btn-success" onClick = {props.handler.handleWeeklyButton}>Week</Link>
          <Link to={props.link} className="btn btn-secondary" onClick = {props.handler.handleMonthlyButton}>Month</Link>
          </div>);
    }else if (props.url.indexOf('monthly') !== -1){
      return(
        <div className="btn-group" role="group">
            <Link to={props.link} className="btn btn-secondary" onClick = {props.handler.handleHourlyButton}>Hours</Link>
            <Link to={props.link} className="btn btn-secondary" onClick = {props.handler.handleDailyButton}>Day</Link>
            <Link to={props.link} className="btn btn-secondary  " onClick = {props.handler.handleWeeklyButton}>Week</Link>
            <Link to={props.link} className="btn btn-success" onClick = {props.handler.handleMonthlyButton}>Month</Link>
          </div>);
    }else{
      return(
        <div className="btn-group" role="group">
            <Link to={props.link} className="btn btn-secondary" onClick = {props.handler.handleHourlyButton}>Hours</Link>
            <Link to={props.link} className="btn btn-success" onClick = {props.handler.handleDailyButton}>Day</Link>
            <Link to={props.link} className="btn btn-secondary" onClick = {props.handler.handleWeeklyButton}>Week</Link>
            <Link to={props.link} className="btn btn-secondary" onClick = {props.handler.handleMonthlyButton}>Month</Link>
          </div>);
    }
}