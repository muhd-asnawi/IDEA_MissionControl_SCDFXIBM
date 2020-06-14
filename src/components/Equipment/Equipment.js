import React from 'react';
import {Bar, Chart} from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';


const Equipment = (props) => {
    
    const data = {
        labels: ["Water Jets", "UFMs", "UAVs", "Monitors"],
        datasets: [
          {
            label: "Deployed",
            backgroundColor: 'rgba(119,158,203,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: [7, 2, 5, 2]
          },
        ]
      }

    const barChart = (
        <Bar data = {data}
            width={"300%"}
            height={"300%"}
            options={{ maintainAspectRatio: false,                 
            scales: {
                    yAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: true,
                                steps: 5,
                                stepValue: 4,
                                max: 10
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
            } 
      }} />)

    return (
        <div >
            {barChart}
        </div>
        
    )
    
}

export default Equipment;