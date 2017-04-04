import React from 'react';
import moment from 'moment';
import {Table, Pagination} from 'react-bootstrap';

export default (props) => {
	var tData, page;
	if (props.this.state.tableData.length === 0){
	}else{
		console.log("aa")
		var chunkedData = _.chunk(props.this.state.tableData,10);
		tData = chunkedData[props.this.state.activePage-1].map((colName) => {
			return(
				<tr key={colName.no}>
			        <td className='no'>{colName.no}</td>
			        <td style={{paddingLeft: "10px"}}>{colName.category}</td>
			        <td style={{textAlign:"center"}}>{colName.total}</td>
		      	</tr>	
			);
		});
		page = <Pagination
					   className={props.this.state.tableData.length <= 10? 'hidden':'shown'}
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
	}
	return(
		<div>
			<div style={{height: "300px", width: "350px"}}>
				<Table striped bordered condensed hover>
				    <thead>
				      <tr className="trHeight">
				        <th className = "no">
				        	<span>No.</span>
				        </th>
				        <th style={{width:"200px", paddingLeft:"10px"}}>
				        	<span style={{verticalAlign: "middle"}}>Category</span>
				        </th>
				        <th style={{width:"100px", textAlign: "center"}}>Total Chat</th>
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