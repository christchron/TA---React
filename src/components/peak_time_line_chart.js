import React, { Component } from "react";
import { Line } from "react-chartjs";

var styles = {
    "graphContainer" : {
        "backgroundColor" : "#fff",
        "marginTop" : "15px",
        "padding" : "20px"
    }
};


class PeakTimeLineChart extends Component {
    constructor(props) {
        super(props);
        const {labels, data} = props
        this.state = {
            chartData: this.setChartData(labels, data)
        };
    }

    setChartData(labels, data) {
        return {
            labels,
            datasets: [
                {
                    label: "Chat Count",
                    fillColor: "rgba(220,220,220,0)",
                    strokeColor: "#25BDFF",
                    pointColor: "#25BDFF",
                    pointStrokeColor: "rgba(255,255,255,0)",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "#25BDFF",
                    data: data
                }
            ]
        };
    }

    componentWillReceiveProps(nextProps) {
        const {labels, data} = nextProps
        if (nextProps) {
            this.setState({
                chartData: this.setChartData(labels, data)
            });
        }
    }

    render() {
        return (
            <div>
                <div style={styles.graphContainer}>
                    <Line data={this.state.chartData} options = {{
                      responsive : true,
                      pointDotRadius: 0,
                      bezierCurve:false
                    }} height={300} width = {1000}/>
                </div>
            </div>
        );
    }
};

export default PeakTimeLineChart;