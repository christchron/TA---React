import React from 'react';

export default (props) =>{
	return (
		<BootstrapTable data={props.data} striped={true} hover={true} pagination={true} options={{hideSizePerPage: true , sizePerPage: 7}}>
			<TableHeaderColumn dataField="no" dataAlign="center" width="50">No.</TableHeaderColumn>
  		<TableHeaderColumn columnClassName="date" className="date" dataField="date" sortFunc={props.mySortFunc} isKey={true} dataSort={true}>Date</TableHeaderColumn>
  		<TableHeaderColumn dataField="day" width="100">{props.dayHeader}</TableHeaderColumn>
  		<TableHeaderColumn columnClassName="rightpad" dataField="CC" dataSort={true} dataAlign="right">Chat Count</TableHeaderColumn>
  		<TableHeaderColumn columnClassName="rightpad"dataField="CG" dataSort={true} dataAlign="right">Chat Growth</TableHeaderColumn>	
  		<TableHeaderColumn columnClassName="rightpad"dataField="inCC" dataSort={true} dataAlign="right">Incoming Chat</TableHeaderColumn>
  		<TableHeaderColumn columnClassName="rightpad"dataField="outCC" dataSort={true} dataAlign="right">Outgoing Chat</TableHeaderColumn>
		</BootstrapTable>);
}