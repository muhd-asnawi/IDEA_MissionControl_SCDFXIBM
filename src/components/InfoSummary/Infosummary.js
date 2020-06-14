import React from 'react';
import {Bar, Chart} from 'react-chartjs-2';

const Infosummary = (props) => {
    
    const data = {
        labels: ["Temperature", "Blood Oxygen%", "Oxygen Tank", "Pulse"],
        datasets: [
          {
            label: "Current",
            backgroundColor: 'rgba(163,222,131,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: [props.person.temp, props.person.boxygen, props.person.oxygent, props.person.heartrate]
          },
          {
              label: "Training Avg",
              backgroundColor: 'rgba(250,70,89,1)',
              borderColor: 'rgba(0,0,0,1)',
              borderWidth: 1,
              data: [36.2, 95, 74, 85]
          }
        ]
      }

    const barChart = (
        <Bar data = {data}
            width={"423%"}
            height={"300%"}
            options={{ maintainAspectRatio: false,                 
            scales: {
                    yAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: true,
                                steps: 10,
                                stepValue: 5,
                                max: 200
                            }
                        }]
                },
            plugins: {
                datalabels: {
                    display: true,
                    color: 'black',
                    font : {
                        weight: 'bold'
                },
              }
            } }} />
    )

    return (
        <div>
            {barChart}
        </div>
        
    )
    
}

export default Infosummary;