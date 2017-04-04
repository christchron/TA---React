import React from 'react';
import moment from 'moment';
import {Table, Pagination} from 'react-bootstrap';

export default (props) => {
	var tData, page;
	if (props.this.state.tableData.length === 0){
	}else{
		var chunkedData = _.chunk(props.this.state.tableData,10);
		tData = chunkedData[props.this.state.activePage-1].map((colName) => {
			return(
				<tr key={colName.no}>
			        <td className='no'>{colName.no}</td>
			        <td>{colName.date}</td>
			        <td>{colName.day}</td>
			        <td className='chatcount'>{colName.CC}</td>
			        <td className='chatgrowth'>{colName.CG}</td>
			        <td className='incc'>{colName.inCC}</td>
			        <td className='outcc'>{colName.outCC}</td>
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

	    var dateArrow = arrow, dateArrow= arrow, ccArrow= arrow, cgArrow= arrow, inccArrow= arrow, outccArrow= arrow;
	    switch (props.this.state.currentSort){
	    	case "ascDate": {dateArrow = downArrow;break;}
	    	case "descDate": {dateArrow = upArrow;break;}
	    	case "ascCC": {ccArrow = downArrow;break;}
	    	case "descCC": {ccArrow = upArrow;break;}
	    	case "ascCG": {cgArrow = downArrow;break;}
	    	case "descCG": {cgArrow = upArrow;break;}
	    	case "ascinCC": {inccArrow = downArrow;break;}
	    	case "descinCC": {inccArrow = upArrow;break;}
	    	case "ascoutCC": {outccArrow = downArrow;break;}
	    	case "descoutCC": {outccArrow = upArrow;break;}
	    }
	}
	return(
		<div>
			<div style={{height: "300px"}}>
				<Table striped bordered condensed hover>
				    <thead>
				      <tr className="trHeight">
				        <th className = "no" onClick = {props.this.handleSortNo}>
				        	<span>No.</span>
				        </th>
				        <th onClick = {props.this.handleSortDate}>
				        	<span style={{verticalAlign: "middle"}}>Date</span>
				        	{dateArrow}
				        </th>
				        <th>Day</th>
				         <th className='chatcount' onClick = {props.this.handleSortCC}>
				        	<span style={{verticalAlign: "middle"}}>Chat Count</span>
				        	{ccArrow}
				        </th>
				         <th className='chatgrowth' onClick = {props.this.handleSortCG}>
				        	<span style={{verticalAlign: "middle"}}>Chat Growth</span>
				        	{cgArrow}
				        </th>
				         <th className='incc' onClick = {props.this.handleSortInCC}>
				        	<span style={{verticalAlign: "middle"}}>Incoming Chat</span>
				        	{inccArrow}
				        </th>
				         <th className='outcc' onClick = {props.this.handleSortOutCC}>
				        	<span style={{verticalAlign: "middle"}}>Outgoung Chat</span>
				        	{outccArrow}
				        </th>
				      </tr>
				    </thead>
				    <tbody>
				      	{tData}
				    </tbody>
			  	</Table>
			</div>
		  	<div>
		  		{page}
		  	</div>
		</div>
	);
}