import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import StatisticsWidget1 from '../../../components/StatisticsWidget1';
import StatisticsWidget2 from '../../../components/StatisticsWidget2';

// Define types for loan application data
interface LoanApplication {
    idLoanApplication: number;
    status: 'Accepted' | 'Rejected' | 'In Process';
    // Include other relevant fields from your data model
}

// API URL
const API_URL = 'http://localhost:3001/loanApplication';

// API service functions
const getAllLoanApplications = async () => {
    return axios.get<LoanApplication[]>(`${API_URL}/getAllLoanApplications`);
};

// Statistics component
const Statistics: React.FC = () => {
    const [loanApplications, setLoanApplications] = useState<LoanApplication[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllLoanApplications();
                if (response.data) {
                    setLoanApplications(response.data);
                } else {
                    console.error('Response data is undefined');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const totalLoans = loanApplications.length;
    const loansAccepted = loanApplications.filter(loan => loan.status === 'Accepted').length;
    const loansRejected = loanApplications.filter(loan => loan.status === 'Rejected').length;
    const loansInProcess = loanApplications.filter(loan => loan.status === 'In Process').length;

    return (
        <Row>
            <Col xl={3} md={6}>
                <StatisticsWidget1
                    title="Total Loans"
                    data={totalLoans}
                    stats={totalLoans}
                    color={'#0FC56A'}
                    subTitle="Total Loans"
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
                <StatisticsWidget1
                    title="Loans Rejected"
                    color={'#FF5B5B'}
                    data={loansRejected}
                    stats={loansRejected}
                    subTitle="Loans Rejected"
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
    );
};

export default Statistics;
