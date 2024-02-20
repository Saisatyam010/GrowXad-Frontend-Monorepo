import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Overview.module.css';

function StatsData() {

    const divData = [
        {
            divnumber: "0.00",
            divtext: "Spend today, $",
        },
        {
            divnumber: "2,343.88",
            divtext: "Spend this month, $",
        },
        {
            divnumber: "0.00",
            divtext: "Impressions today",
        },
        {
            divnumber: "1,63,613",
            divtext: "Impressions this month",
        },
        {
            divnumber: "0.00",
            divtext: "Click today",
        },
        {
            divnumber: "0.00",
            divtext: "Click this month",
        },
        {
            divnumber: "0.00",
            divtext: "Spend yesterday, $",
        },
        {
            divnumber: "5,022.61",
            divtext: "Spend last month",
        },
        {
            divnumber: "0.00",
            divtext: "Impressions yesterday",
        },
        {
            divnumber: "3,22,604",
            divtext: "Impressions last yesterday",
        },
        {
            divnumber: "0.00",
            divtext: "Click yesterday",
        },
        {
            divnumber: "0.00",
            divtext: "Click last month",
        },]

    return (
        <Container className={` ${styles.ab_divbackground} `}>
            <Row >
                <div>
                    <h2 className="text-black font-medium text-2xl ml-4 my-4">Overview</h2>
                </div>
                {divData.map((divData, index) => (
                    <Col md={2} >
                        <div key={index} className={`${styles.ab_divbox} border border-solid border-gray-100`} >
                            <h3 className={styles.ab_divnumber}>{divData.divnumber}</h3>
                            <p className={styles.ab_divtext} > {divData.divtext}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default StatsData;