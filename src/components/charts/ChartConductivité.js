import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class ChartConductivite extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
                datasets: [
                    {
                        label: 'Conductivité (en µS/cm)',
                        data:[
                            0.1,
                            0.2,
                            0.3,
                            0.4,
                            0.3,
                            0.5,
                            0.4,
                            0.1,
                            0.2,
                            0.3,
                            0.5,
                            0.1,
                            0.2
                        ],
                        borderColor: [
                            'rgba(255, 83, 13, 0.6)'
                        ],
                        backgroundColor: 'rgba(255, 83, 13, 0.6)'
                    }  
                ]
            }
        }
    }
    render(){
        return(
            <div className="conductivite_chart">
                <Line
                    data={this.state.chartData}
                    options={{responsive: true}}
                />
            </div>
        )
    }
}
export default ChartConductivite;