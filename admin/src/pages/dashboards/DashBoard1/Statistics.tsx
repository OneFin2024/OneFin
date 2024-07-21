import { Col, Row } from 'react-bootstrap';

// component
import StatisticsWidget1 from '../../../components/StatisticsWidget1';
import StatisticsWidget2 from '../../../components/StatisticsWidget2';

const Statistics = () => {
    return (
        <Row>
            <Col xl={3} md={6}>
                <StatisticsWidget1
                    title="Total Loans"
                    data={58}
                    stats={256}
                    color={'#0FC56A'}
                    subTitle="Revenue today"
                />
            </Col>
            <Col xl={3} md={6}>
                <StatisticsWidget2
                    variant="success"
                    title="Loans Accepted"
                    trendValue="32%"
                    trendIcon="mdi mdi-trending-up"
                    stats={8451}
                    subTitle="Revenue today"
                    progress={77}
                />
            </Col>
            <Col xl={3} md={6}>
                <StatisticsWidget1
                    title="Loans Rejected"
                    color={'#FF5B5B'}
                    data={80}
                    stats={4569}
                    subTitle="Revenue today"
                />
            </Col>
            <Col xl={3} md={6}>
                <StatisticsWidget2
                    variant="pink"
                    title="Loans in Process"
                    trendValue="32%"
                    trendIcon="mdi mdi-trending-up"
                    stats={158}
                    subTitle="Revenue today"
                    progress={77}
                />
            </Col>
        </Row>
    );
};

export default Statistics;
