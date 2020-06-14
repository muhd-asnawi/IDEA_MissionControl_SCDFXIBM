import React from 'react';
import {Bar, Chart} from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';


const Manpower = (props) => {
    
    const data = {
        labels: ["Danger Zone", "Staging Crew", "Water Supply"],
        datasets: [
          {
            label: "Deployed",
            backgroundColor: 'rgba(119,158,203,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: [32, 7, 13]
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
                                steps: 1,
                                stepValue: 10,
                                max: 50
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
        <div >
            {barChart}
        </div>
        
    )
    
}

export default Manpower;