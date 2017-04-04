import React, { Component } from "react";
import { Bar } from "react-chartjs";

var styles = {
    "graphContainer" : {
        "backgroundColor" : "#fff",
        "height" : "235px",
        "width" : "1150px",
        "marginTop" : "15px",
        "padding" : "20px"
    }
};

class BarChart extends Component {
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
                    label: labels,
                    fillColor: ["#F6955E", "#01AEF0", "#D59FDB", "#9A6BA2","#F15E7B", "#01B8A6", "#6EBF46", "#BF8C57","#FCC10F", "#1B81BF"],
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(255,99,132,0.4)",
                    hoverBorderColor: "rgba(255,99,132,1)",
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
                    <Bar data={this.state.chartData} 
                    height={300} width = {1000}
                    redraw/>
                </div>
            </div>
        );
    }
};

export default BarChart;
