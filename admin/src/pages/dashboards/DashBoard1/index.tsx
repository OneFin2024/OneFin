import React, { useEffect, useState } from 'react';
import { Col, Row, Card, Dropdown } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import StatisticsWidget1 from '../../../components/StatisticsWidget1';
import StatisticsWidget2 from '../../../components/StatisticsWidget2';
import Users from './Users';
import Inbox from './Inbox';
import Projects from './Projects';
import { messages, projectDetails } from './data';
import SalesChart from './SalesChart';
import RevenueChart from './RevenueChart';
import StatisticsChart from './StatisticsChart';

// Define types for loan application data
interface LoanApplication {
    idLoanApplication: number;
    status: 'Accepted' | 'Rejected' | 'In Process' | 'Need Documents';
    loanProcessor: string;
}

// Dummy data
const dummyLoanApplications: LoanApplication[] = [
    { idLoanApplication: 1, status: 'Accepted', loanProcessor: 'Processor A' },
    { idLoanApplication: 2, status: 'Rejected', loanProcessor: 'Processor B' },
    { idLoanApplication: 3, status: 'In Process', loanProcessor: 'Processor A' },
    { idLoanApplication: 4, status: 'Need Documents', loanProcessor: 'Processor C' },
    { idLoanApplication: 5, status: 'Accepted', loanProcessor: 'Processor A' },
    { idLoanApplication: 6, status: 'Rejected', loanProcessor: 'Processor D' },
    { idLoanApplication: 7, status: 'In Process', loanProcessor: 'Processor B' },
    { idLoanApplication: 8, status: 'Need Documents', loanProcessor: 'Processor E' },
    { idLoanApplication: 9, status: 'Accepted', loanProcessor: 'Processor C' },
    { idLoanApplication: 10, status: 'In Process', loanProcessor: 'Processor A' },
];

const DashBoard1: React.FC = () => {
    const [loanApplications, setLoanApplications] = useState<LoanApplication[]>(dummyLoanApplications);
    const [loading, setLoading] = useState(false); // Set to false to simulate immediate loading

    useEffect(() => {
        // Simulating a delay as if fetching data
        const fetchData = () => {
            setLoading(true);
            setTimeout(() => {
                setLoanApplications(dummyLoanApplications);
                setLoading(false);
            }, 500); // Simulating network delay
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const totalUsers = 1000; // Static value for demonstration
    const totalApplications = loanApplications.length;
    const loansAccepted = loanApplications.filter(loan => loan.status === 'Accepted').length;
    const loansRejected = loanApplications.filter(loan => loan.status === 'Rejected').length;
    const loansInProcess = loanApplications.filter(loan => loan.status === 'In Process').length;
    const loansNeedDocuments = loanApplications.filter(loan => loan.status === 'Need Documents').length;

    const applicationStatusData = [loansRejected, loansAccepted, loansInProcess, loansNeedDocuments];
    const loanProcessors = Array.from(new Set(loanApplications.map(loan => loan.loanProcessor)));
    const loanProcessorData = loanProcessors.map(processor => ({
        processor,
        count: loanApplications.filter(loan => loan.loanProcessor === processor).length,
    }));

    const barChartOpts: ApexOptions = {
        chart: {
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                columnWidth: '40%',
                borderRadius: 5,
            },
        },
        dataLabels: {
            enabled: true,
        },
        xaxis: {
            categories: loanProcessorData.map(item => item.processor),
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

    const barChartData = [
        {
            name: 'Processors',
            data: loanProcessorData.map(item => item.count),
        },
    ];

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
                            formatter: (val: string) => val,
                            offsetY: 4,
                            color: '#98a6ad',
                        },
                        value: {
                            show: true,
                            formatter: (val: string) => val,
                            color: '#98a6ad',
                        },
                    },
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ['#ff5b5b', '#28a745', '#17a2b8', '#ffc107'],
        legend: {
            show: true,
            position: 'bottom',
            height: 40,
            labels: {
                useSeriesColors: true,
            },
        },
        labels: ['Rejected', 'Accepted', 'In Process', 'Need Documents'],
        tooltip: {
            enabled: true,
        },
    };

    return (
        <>
            <Row>
                <Col xl={3} md={6}>
                    <StatisticsWidget1
                        title="Total Users"
                        data={totalUsers}
                        stats={totalUsers}
                        color={'#0FC56A'}
                        subTitle="Total Users"
                    />
                </Col>
                <Col xl={3} md={6}>
                    <StatisticsWidget1
                        title="Total Applications"
                        data={totalApplications}
                        stats={totalApplications}
                        color={'#35b8e0'}
                        subTitle="Total Applications"
                    />
                </Col>
                <Col xl={3} md={6}>
                    <StatisticsWidget2
                        variant="success"
                        title="Loans Accepted"
                        trendValue="32%"
                        trendIcon="mdi mdi-trending-up"
                        stats={loansAccepted}
                        subTitle="Loans Accepted"
                        progress={77}
                    />
                </Col>
                <Col xl={3} md={6}>
                    <StatisticsWidget2
                        variant="pink"
                        title="Loans in Process"
                        trendValue="32%"
                        trendIcon="mdi mdi-trending-up"
                        stats={loansInProcess}
                        subTitle="Loans in Process"
                        progress={77}
                    />
                </Col>
            </Row>

            <Row>
                <Col xl={4}>
                    <SalesChart />
                </Col>
                <Col xl={4}>
                    <StatisticsChart />
                </Col>
                <Col xl={4}>
                    <RevenueChart />
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
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

                            <h4 className="header-title mt-0">Applications by Status</h4>

                            <div dir="ltr">
                                <Chart options={apexOpts} series={applicationStatusData} type="donut" height={302} className="apex-charts mt-2" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
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

                            <h4 className="header-title mt-0">Applications by Loan Processor</h4>

                            <div dir="ltr">
                                <Chart options={barChartOpts} series={barChartData} type="bar" height={268} className="apex-charts mt-2" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* <Users /> */}
            <Row>
                
                <Col xl={19}>
                    <Projects projectDetails={projectDetails} />
                </Col>
            </Row>
        </>
    );
};

export default DashBoard1;
