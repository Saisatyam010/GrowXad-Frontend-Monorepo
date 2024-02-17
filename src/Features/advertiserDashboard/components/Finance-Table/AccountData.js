import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';
import { TablePagination } from '@mui/material';
import styles from './Finance.module.css'; // Assuming you have defined styles for your component

function AccountData() {
    const [dateRange, setDateRange] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(0);
    const data = [
        { id: 1, date: '01-02-2024', debit: '$0.00', credit: '$0.00' },
        { id: 2, date: '02-02-2024', debit: '$0.00', credit: '$0.00' },
        { id: 3, date: '03-02-2024', debit: '$0.00', credit: '$0.00' },
        { id: 4, date: '04-02-2024', debit: '$0.00', credit: '$0.00' },
        { id: 4, date: '04-02-2024', debit: '$0.00', credit: '$0.00' },
        { id: 4, date: '04-02-2024', debit: '$0.00', credit: '$0.00' },
        { id: 5, date: '05-02-2024', debit: '$0.00', credit: '$0.00' },
        { id: 5, date: '05-02-2024', debit: '$0.00', credit: '$0.00' },
        { id: 5, date: '05-02-2024', debit: '$0.00', credit: '$0.00' },
    ];

    const handleDateRangeChange = (range) => {
        setDateRange(range);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const rowsPerPageOptions = [5, 10, 25];
    const slicedData = data.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

    return (
        <div className='mb-3'>
            <div className='mb-3'>
                <DateRangePicker
                    placeholder="Select Date Range"
                    value={dateRange}
                    onChange={handleDateRangeChange}
                    className={styles.ab_datepicker}
                    style={{ boxShadow: 'none', border: 'none' }}   
                />
            </div>
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
                    {slicedData.map((row, index) => (
                        <tr key={row.id}>
                            <td>{index + 1}</td>
                            <td>{row.date}</td>
                            <td>{row.debit}</td>
                            <td>{row.credit}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div>
                <TablePagination
                    rowsPerPageOptions={rowsPerPageOptions}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </div>
        </div>
    );
}

export default AccountData;
