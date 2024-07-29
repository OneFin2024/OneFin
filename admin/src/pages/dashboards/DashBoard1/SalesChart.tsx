import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const SalesChart: React.FC = () => {
    const apexOpts: ApexOptions = {
        chart: {
            type: 'donut',
        },
        plotOptions: {
            pie: {
                expandOnClick: true,
                donut: {
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            formatter: (val: string) => {
                                return val;
                            },
                            offsetY: 4,
                            color: '#98a6ad',
                        },
                        value: {
                            show: true,
                            formatter: (val: string) => {
                                return val;
                            },
                            color: '#98a6ad',
                        },
                    },
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ['#6658dd', '#ff8acc', '#35b8e0'],
        legend: {
            show: true,
            position: 'bottom',
            height: 40,
            labels: {
                useSeriesColors: true,
            },
        },
        labels: ['Rejected Loans', 'Accepted Loans'],
        tooltip: {
            enabled: false,
        },
    };

    // Sample data
    const apexData = [45, 55]; // 45% Rejected, 55% Accepted

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

                <h4 className="header-title mt-0">Loans Prequalify Charts</h4>

                <div dir="ltr">
                    <Chart
                        options={apexOpts}
                        series={apexData}
                        type="donut"
                        height={302}
                        className="apex-charts mt-2"
                    />
                </div>
            </Card.Body>
        </Card>
    );
};

export default SalesChart;
