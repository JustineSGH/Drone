import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class ChartTemperature extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
                datasets: [
                    {
                        label: 'Temperature (°C)',
                        data:[
                            -0.5,
                            2.8,
                            6.9,
                            11.0,
                            9.5,
                            7.3,
                            10.4
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }
                ]
            }
        }
    }
    render(){
        return(
            <div className="ph_chart">
                <Bar
                    data={this.state.chartData}
                    options={{}}
                    width={100}
	                height={50}
                />
            </div>
        )
    }
}
export default ChartTemperature;