import React, {Component} from 'react';
import './GraphicInfo.css'
import {Line} from "react-chartjs-2";

class GraphicInfoMy extends Component {

    state = {
        type: 'line',
        options: {
            animation:false,
            smooth: false,
            legend: { display: false },
            layout: {
                padding: {
                    left: 8,
                    right: 8,
                    top: 28,
                    bottom: 8,
                },
            },
            scales: {
                // title: "time",
                type: 'time',
                xAxes: [{
                    gridLines: {
                        color: "#5e5e5e"
                    },
                    // scaleLabel: {
                    //     display: false,
                    //     labelString: '167 Hours in 7 days',
                    //     fontSize: 10
                    // },
                    responsive: true,
                }],
                yAxes: [
                    {
                        gridLines: {
                            color: "#5e5e5e"
                        },
                        ticks: {
                            beginAtZero: false
                        }
                    }
                ]
            }
        }
    };

    render() {

        const total_in_hours = this.props.sparkline_price ? this.props.sparkline_price.map((item,index) => index.toString()) : 0;
        const total_last_7d = this.props.sparkline_price ? this.props.sparkline_price.map(item => item.toFixed(4)) : 0;

        return (
            <div className="graphic-info">
                <Line
                    width={330}
                    height={170}
                    options={this.state.options}
                    data={{
                        labels: total_in_hours,
                        datasets: [{
                            label: '$Price',
                            data: total_last_7d,
                            fill: 'none',
                            backgroundColor: 'blue',
                            pointRadius: 2,
                            borderColor: '#0984f5',
                            borderWidth: 1,
                            lineTension: 0
                        }]
                    }}
                />
            </div>
        );
    }
}

export default GraphicInfoMy;
