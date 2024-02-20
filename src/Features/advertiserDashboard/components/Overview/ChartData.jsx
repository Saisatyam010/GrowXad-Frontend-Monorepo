import { Col, Container, Row } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import { AgChartsReact } from "ag-charts-react";
import styles from './Overview.module.css';

function ChartData() {

    const [options, setOptions] = useState(null);

    useEffect(() => {
        const data = [
            { hour: '00-02', male: 1480, female: 3843, exportedTonnes: 105311 },
            { hour: '02-05', male: 1480, female: 3843, exportedTonnes: 105311 },
            { hour: '05-09', male: 1480, female: 3843, exportedTonnes: 105311 },
            { hour: '09-12', male: 1440, female: 3868, exportedTonnes: 112260 },
            { hour: '12-14', male: 1457, female: 3900, exportedTonnes: 100491 },
            { hour: '14-16', male: 1460, female: 3895, exportedTonnes: 110428 },
            { hour: '16-18', male: 1456, female: 3891, exportedTonnes: 105601 },
            { hour: '18-21', male: 1425, female: 3837, exportedTonnes: 110508 },
            { hour: '21-24', male: 1371, female: 3775, exportedTonnes: 135198 },
        ];

        setOptions({
            data: data,
            // title: {
            //     text: "Cattle Holdings and Beef Exports (UK)",
            //     fontSize: 18,
            // },
            // subtitle: {
            //     text: "Source: Department for Environment, Food & Rural Affairs",
            // },
            series: [
                {
                    type: "bar",
                    xKey: "hour",
                    yKey: "male",
                    yName: "Impressions",
                },
                {
                    type: "bar",
                    xKey: "hour",
                    yKey: "female",
                    yName: "Clicks",
                },
                {
                    type: "line",
                    xKey: "hour",
                    yKey: "exportedTonnes",
                    yName: "Spends ",
                    strokeWidth: 5,
                    marker: {
                        enabled: false,
                    },
                },
            ],
            axes: [
                {
                    type: "category",
                    position: "bottom",
                },
                {
                    type: "number",
                    position: "left",
                    keys: ["male", "female"],
                    title: {
                        text: "Clicks",
                    },
                    label: {
                        formatter: (params) => {
                            return params.value / 1000 + "M";
                        },
                    },
                },
                {
                    type: "number",
                    position: "right",
                    keys: ["exportedTonnes"],
                    title: {
                        enabled: true,
                        text: "Spends",
                    },
                    label: {
                        formatter: (params) => {
                            return params.value / 1000 + "k";
                        },
                    },
                },
            ],
            legend: {
                item: {
                    marker: {
                        shape: "square",
                        strokeWidth: 0,
                    },
                },
            },
        });
    }, []);

    return (
        <Container className={`p-4 ${styles.ab_divbackground}`}>
            <Row className='mt-4'>
                <Col>
                    <div style={{ height: "400px" }}>
                        {options && <AgChartsReact options={options} />}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ChartData;