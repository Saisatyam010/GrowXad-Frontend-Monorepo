import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { TablePagination } from '@mui/material'; // Import TablePagination from Material-UI
import styles from './Finance.module.css'; // Assuming you have defined styles for your component

function PaymentData() {
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [page, setPage] = useState(0);
    const data = [
        { id: 1, amount: '$0.00', autoPayment: '01-02-2024', paymentMethod: '$0.00', comment: '$0.00', createdAt: '$0.00', downloadInvoice: '$0.00', paidAt: '$0.00' },
        { id: 2, amount: '$0.00', autoPayment: '02-02-2024', paymentMethod: '$0.00', comment: '$0.00', createdAt: '$0.00', downloadInvoice: '$0.00', paidAt: '$0.00' },
        { id: 3, amount: '$0.00', autoPayment: '03-02-2024', paymentMethod: '$0.00', comment: '$0.00', createdAt: '$0.00', downloadInvoice: '$0.00', paidAt: '$0.00' },
        { id: 4, amount: '$0.00', autoPayment: '04-02-2024', paymentMethod: '$0.00', comment: '$0.00', createdAt: '$0.00', downloadInvoice: '$0.00', paidAt: '$0.00' },
        { id: 4, amount: '$0.00', autoPayment: '04-02-2024', paymentMethod: '$0.00', comment: '$0.00', createdAt: '$0.00', downloadInvoice: '$0.00', paidAt: '$0.00' },
        { id: 4, amount: '$0.00', autoPayment: '04-02-2024', paymentMethod: '$0.00', comment: '$0.00', createdAt: '$0.00', downloadInvoice: '$0.00', paidAt: '$0.00' },
        { id: 5, amount: '$0.00', autoPayment: '05-02-2024', paymentMethod: '$0.00', comment: '$0.00', createdAt: '$0.00', downloadInvoice: '$0.00', paidAt: '$0.00' }
    ];

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
        <div className='mt-3'>
            <div className={`${styles.abc} py-3 px-2`}>
                <h3>Payments</h3>
            </div>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Auto Payment</th>
                        <th>Payment Method</th>
                        <th>Comment</th>
                        <th>Created at</th>
                        <th>Download invoice</th>
                        <th>Paid at</th>
                    </tr>
                </thead>
                <tbody>
                    {slicedData.map((row) => (
                        <tr key={row.id}>
                            <td>{row.amount}</td>
                            <td>{row.autoPayment}</td>
                            <td>{row.paymentMethod}</td>
                            <td>{row.comment}</td>
                            <td>{row.createdAt}</td>
                            <td>{row.downloadInvoice}</td>
                            <td>{row.paidAt}</td>
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

export default PaymentData;
