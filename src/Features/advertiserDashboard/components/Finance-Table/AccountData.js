import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { DateRangePicker } from 'rsuite';
import styles from './Finance.module.css';



function AccountData() {

    const [dateRange, setDateRange] = useState([]);

    const handleDateRangeChange = (range) => {
        setDateRange(range);
    };
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    return (
        <>
            <div>
                <DateRangePicker
                    placeholder="Select Date Range"
                    value={dateRange}
                    onChange={handleDateRangeChange}
                    className="d-flex justify-end py-2 px-2 "
                />
                <div className={`${styles.abc} py-3 px-2`}>
                    <h3 className='text-white'>Account Data</h3>
                </div>

                <Table striped bordered hover variant="light">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Debit</th>
                            <th>Credit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>01-02-2024</td>
                            <td>$0.00</td>
                            <td>$0.00</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>02-02-2024</td>
                            <td>$0.00</td>
                            <td>$0.00</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>03-02-2024</td>
                            <td>$0.00</td>
                            <td>$0.00</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>04-02-2024</td>
                            <td>$0.00</td>
                            <td>$0.00</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>05-02-2024</td>
                            <td>$0.00</td>
                            <td>$0.00</td>
                        </tr>

                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default AccountData;