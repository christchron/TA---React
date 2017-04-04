import React from 'react';
import moment from 'moment';
import {Chart} from 'react-google-charts';

class GoogleBarChart extends React.Component{
	constructor(props) {
        super(props);
        const {data, labels} = props
        this.state = {
            data: data,
            labels: labels
        };
    }

    componentWillReceiveProps(nextProps) {
        const {data, labels} = nextProps
        if (nextProps) {
            this.setState({
                data: data,
                labels: labels
            });
        }
    }

	render() {
		console.log('data',this.state.data)
		console.log('labels',this.state.labels)
		var options = {
	        legend: 'none',
	        hAxis: {
	        	textStyle: {
	        		fontSize: 12
	        	}
	        }
	    };

	    var colors = ["#F6955E", "#01AEF0", "#D59FDB", "#9A6BA2","#F15E7B", "#01B8A6", "#6EBF46", "#BF8C57","#FCC10F", "#1B81BF"];
	    var data = [];
	    
	    data.push(["Category","Chat",{"role":"style"}])
	    if (this.state.data[0] != null){
	    	for (var i = 0; i<this.state.data.length; i++ ){
		    	var tempData = [this.state.labels[i],parseInt(this.state.data[i]),colors[i]];
		    	data.push(tempData);
		    }
	    }

	    var showChart = this.state.data[0] != null 
	    	? <Chart 
		    	chartType = "ColumnChart" 
		    	data= {data}
		    	options = {options} 
		    	graph_id = "ColumnChart"  
		    	width={"100%"} 
		    	height={"400px"}  
		    	legend_toggle={true}/>
	    	: <div></div>;

	    return(
	    	<div>{showChart}</div>
	    	);
	    
	}
}

export default GoogleBarChart;	