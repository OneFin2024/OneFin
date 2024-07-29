import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

// Sample data for the StatisticsChart with months starting from June
const StatisticsChart: React.FC = () => {
    const options: ApexOptions = {
        chart: {
            type: 'area',
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
        },
        xaxis: {
            categories: [
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
                'January',
                'February',
                'March',
                'April',
                'May',
            ],
            labels: {
                style: {
                    colors: '#adb5bd',
                },
            },
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#adb5bd',
                },
            },
        },
        grid: {
            show: true,
            borderColor: '#e3e3e3',
        },
        colors: ['#28a745'],
        tooltip: {
            theme: 'dark',
        },
    };

    const series = [
        {
            name: 'Statistics',
            data: [10, 20, 15, 30, 25, 35, 40, 45, 50, 55, 60, 65], // Replace with your data
        },
    ];

    return (
        <div>
            <Chart options={options} series={series} type="area" height={300} />
        </div>
    );
};

export default StatisticsChart;
