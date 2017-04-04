import React, { Component } from "react";
import { Line } from "react-chartjs";

var styles = {
    "graphContainer" : {
        "backgroundColor" : "#fff",
        "marginTop" : "15px",
        "padding" : "20px"
    }
};


class LineChart extends Component {
    constructor(props) {
        super(props);
        const {labels, data, data2} = props
        this.state = {
            chartData: this.setChartData(labels, data, data2)
        };
    }

    setChartData(labels, data, data2) {
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
                },
                {
                    label: "Chat Growth",
                    fillColor: "rgba(255,0,0,0)",
                    strokeColor: "red",
                    pointColor: "red",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "red",
                    data: data2
                }
            ]
        };
    }

    componentWillReceiveProps(nextProps) {
        const {labels, data, data2} = nextProps
        if (nextProps) {
            this.setState({
                chartData: this.setChartData(labels, data, data2)
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

export default LineChart;