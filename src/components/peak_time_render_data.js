import React from 'react';
import moment from 'moment';
import {Table, Pagination} from 'react-bootstrap';

export default (props) => {
	var tData, page;
	console.log("tab",props.this.state.tableData)
	if (props.this.state.tableData.length === 0){
	}else{
		console.log("tab",props.this.state.tableData)
		var i = 0,j=0;
		var chunkedData = _.chunk(props.this.state.tableData,10);
		tData = chunkedData[props.this.state.activePage-1].map((colName) => {
			console.log(colName.peakTimes.length)
			var hours = colName.peakTimes.map((hour) => {
				j++;
				return ( 	
					<td key={j} style={{textAlign:"right", paddingRight:"15px"}}>{hour}</td>
					)}
				);
			i++;
			return(
				<tr key={i}>
			        <td style={{textAlign:"center"}}>{moment(new Date(colName.date)).format("LL")}</td>
			        {hours}
		      	</tr>	
			);
		});
		page = <Pagination
					   className={props.this.state.tableData.length === 0? 'hidden':'shown'}
					   style={{float: "right"}}
					   prev
					   next
					   first
					   last
					   items={(_.floor(props.this.state.tableData.length / 10)) +1}
					   maxButtons={3}
					   activePage={props.this.state.activePage}
					   onSelect={props.this.handlePageChange}>
					</Pagination>;

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

	    var dateArrow = arrow;
	    switch (props.this.state.currentSort){
	    	case "ascDate": {dateArrow = downArrow;break;}
	    	case "descDate": {dateArrow = upArrow;break;}
	    }
	}
	return(
		<div>
			<div style={{height: "300px", position: "relative"}}>
				<div className="table">
					<Table striped bordered condensed hover className="peaktime">
					    <thead>
					      <tr className="trHeight">
					        <th onClick = {props.this.handleSortDate} style= {{width:"120px", paddingLeft:"15px"}}>
					        	<span style={{verticalAlign: "middle"}}>Date</span>
					        	{dateArrow}
					        </th>
					        <th style= {{width:"80px"}}>00:00-01.00</th>
					        <th style= {{width:"80px"}}>01:00-02.00</th>
					        <th style= {{width:"80px"}}>02:00-03.00</th>
					        <th style= {{width:"80px"}}>03:00-04.00</th>
					        <th style= {{width:"80px"}}>04:00-05.00</th>
					        <th style= {{width:"80px"}}>05:00-06.00</th>
					        <th style= {{width:"80px"}}>06:00-07.00</th>
					        <th style= {{width:"80px"}}>07:00-08.00</th>
					        <th style= {{width:"80px"}}>08:00-09.00</th>
					        <th style= {{width:"80px"}}>09:00-10.00</th>
					        <th style= {{width:"80px"}}>10:00-11.00</th>
					        <th style= {{width:"80px"}}>11:00-12.00</th>
					        <th style= {{width:"80px"}}>12:00-13.00</th>
					        <th style= {{width:"80px"}}>13:00-14.00</th>
					        <th style= {{width:"80px"}}>14:00-15.00</th>
					        <th style= {{width:"80px"}}>15:00-16.00</th>
					        <th style= {{width:"80px"}}>16:00-17.00</th>
					        <th style= {{width:"80px"}}>17:00-18.00</th>
					        <th style= {{width:"80px"}}>18:00-19.00</th>
					        <th style= {{width:"80px"}}>19:00-20.00</th>
					        <th style= {{width:"80px"}}>20:00-21.00</th>
					        <th style= {{width:"80px"}}>21:00-22.00</th>
					        <th style= {{width:"80px"}}>22:00-23.00</th>
					        <th style= {{width:"80px"}}>23:00-23.59</th>
					      </tr>
					    </thead>
					    <tbody>
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