import React from 'react';
import {Bar, Chart} from 'react-chartjs-2';
import styles from "./Oxygen.module.css";


const Oxygen = (props) => {
    
    const data = {
        datasets: [
          {
            label: ["Blood Oxygen%", "Training Avg"],
            backgroundColor: ['rgba(163,222,131,1)', 'rgba(250,70,89,1)'],
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: [70, 80]
          }
        ]
      }

    const barChart = (
        <Bar data = {data}
            width={50}
            height={400}
            options={{ maintainAspectRatio: false,                 
            scales: {
                    yAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: true,
                                steps: 10,
                                stepValue: 5,
                                max: 100
                            }
                        }]
                }}} />
    )

    return (
        <div className = {styles.bar}>
            {barChart}
        </div>
        
    )
    
}

export default Oxygen;