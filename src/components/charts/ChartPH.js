import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class ChartPH extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
                datasets: [
                    {
                        label: 'pH',
                        data:[
                            7.31,
                            7.02,
                            6.83,
                            6.44,
                            7.85,
                            8.06, 
                            9.50
                        ],
                        borderColor: [
                            'rgba(0, 123, 255, 0.6)'
                        ],
                        yAxisID: 'y-axis-1',
                    },
                    {
                        label: 'O2 (mg/l)',
                            data:[
                                5.50,
                                4.02,
                                3.83,
                                3.32,
                                6.45,
                                15.60,
                                20.01

                            ],
                            borderColor: [
                                'rgba(255, 83, 13, 0.6)'
                            ],
                        yAxisID: 'y-axis-2',
                    }
                ]
            }
        }
    }
    render(){
        return(
            <div className="ph_chart">
                <Line
                    data={this.state.chartData}
                    options={{
                        responsive: true,
					    hoverMode: 'index',
					    stacked: false,
                        scales: {
                            yAxes : [{
                                type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                                display: true,
                                position: 'left',
                                id: 'y-axis-1',
                                scaleLabel: {
                                    display: true,
                                    labelString: 'pH'
                                }
                            },
                            {
                                type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                                display: true,
                                position: 'right',
                                id: 'y-axis-2',
                                scaleLabel: {
                                    display: true,
                                    labelString: 'O2'
                                },
                                // grid line settings
                                gridLines: {
                                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                                },
                            }],
                        }
                    }}
                    width={100}
	                height={30}
                />
            </div>
        )
    }
}
export default ChartPH;