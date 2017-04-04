import React from 'react';
import moment from 'moment';
import {Chart} from 'react-google-charts';

class GoogleLineChart extends React.Component{
	constructor(props) {
        super(props);
        const {data, labels, colors, url} = props
        console.log(props)
        this.state = {
            data: data,
            labels: labels,
            colors: colors,
            url: url
        };
    }

    componentWillReceiveProps(nextProps) {
        const {data, labels, colors, url} = nextProps
        if (nextProps) {
            this.setState({
                data: data,
                labels: labels,
                colors: colors,
                url: url
            });
        }
    }

	render() {
		var columns = this.state.labels;
		var rows = this.state.data;
        var options;
        if (this.state.url.indexOf('peak_time') !== -1){
            options =  {
                legend: "none",
                colors: this.state.colors
            };   
        }else{
            options =  {
                legend: {position: "bottom"},
                colors: this.state.colors
            };  
        }
        var chart = this.state.data[0] != undefined 
            ? <Chart chartType = "LineChart" 
                rows = {rows} columns = {columns} 
                options = {options} 
                graph_id = "LineChart"  
                legend_toggle={true} 
                width={"100%"} />
            : <div></div>;

		return (
		<div className={"my-pretty-chart-container"}>
		  {chart}
		</div>
		)
	}
}

export default GoogleLineChart;