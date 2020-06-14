import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const TeamCheck = (props) => {

    const data = {
        datasets: [
            {
            label: ['Inside', 'Outside'],
            backgroundColor: ['rgba(163,222,131,1)', 'rgba(250,70,89,1)'],
            borderWidth: 1,
            data: [10, 20]
            },
        ],
    
        labels: [
            'Inside',
            'Outside',
        ]
    };

    const doughnut = (
    <Doughnut
            data={data}
            width = {"100%"}
            height = {"30%"}
            options={{
            maintainAspectRatio: false,
            responsive: true,
            legend: {
                display: false
            }
        }}
          />
    )

    const options = {
        legend: {
          display: true
        },
        maintainAspectRatio: false,
        responsive: true
      }

    return(
        <div>
            {doughnut}
        </div>
    );
}

export default TeamCheck;