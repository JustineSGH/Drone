import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class ChartTurbidite extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
                datasets: [
                    {
                        label: 'Turbidité',
                        data:[
                            3.20,
                            3.20,
                            3.50,
                            5.50,
                            6.50,
                            5.80,
                            5.60,
                            4.50,
                            5.00,
                            4.50,
                            5.20,
                            3.20
                        ],
                        borderColor: [
                            'rgba(0, 123, 255, 0.6)'
                        ], 
                        backgroundColor: 'rgba(0, 123, 255, 0.6)'
                    }  
                ]
            }
        }
    }
    render(){
        return(
            <div className="turbidite_chart">
                <Line
                    data={this.state.chartData}
                    options={{responsive: true}}
                />
            </div>
        )
    }
}
export default ChartTurbidite;