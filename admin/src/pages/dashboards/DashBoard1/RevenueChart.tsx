import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const RevenueChart: React.FC = () => {
    const options: ApexOptions = {
        chart: {
            height: 350,
            type: 'line',
            toolbar: {
                show: false,
            },
            stacked: false,
            zoom: {
                enabled: false,
            },
        },
        stroke: {
            curve: 'smooth',
            width: [3, 3],
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        fill: {
            type: 'solid',
            opacity: [0, 1],
        },
        colors: ['#3cc469', '#188ae2'],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            labels: {
                style: {
                    colors: '#adb5bd',
                },
            },
        },
        yaxis: {
            tickAmount: 4,
            min: 0,
            max: 100,
            labels: {
                style: {
                    colors: '#adb5bd',
                },
            },
        },
        grid: {
            show: false,
            padding: {
                top: 0,
                bottom: 0,
            },
        },
        tooltip: {
            theme: 'dark',
        },
    };

    // Sample data
    const series = [
        {
            name: 'Loans Processed',
            type: 'area',
            data: [30, 40, 35, 50, 49, 60, 70, 80, 90, 100, 110, 120],
        },
        {
            name: 'Target',
            type: 'line',
            data: [40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95],
        },
    ];

    return (
        <Card>
            <Card.Body>
                <Dropdown className="float-end" align="end">
                    <Dropdown.Toggle as="a" className="cursor-pointer card-drop">
                        <i className="mdi mdi-dots-vertical"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Another Action</Dropdown.Item>
                        <Dropdown.Item>Something Else</Dropdown.Item>
                        <Dropdown.Item>Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <h4 className="header-title mt-0">Total Revenue</h4>

                <div dir="ltr">
                    <Chart options={options} series={series} type="line" height={268} className="apex-charts mt-2" />
                </div>
            </Card.Body>
        </Card>
    );
};

export default RevenueChart;
