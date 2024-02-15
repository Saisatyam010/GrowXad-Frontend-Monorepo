import Table from 'react-bootstrap/Table';
import styles from './Finance.module.css';

function PaymentData() {
    return (
        <>
            <div>
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
                        <tr>
                            <td>1</td>
                            <td>01-02-2024</td>
                            <td>$0.00</td>
                            <td>$0.00</td>
                            <td>$0.00</td>
                            <td>$0.00</td>
                            <td>$0.00</td>

                        </tr>
                        <tr>
                            <td>2</td>
                            <td>02-02-2024</td>
                            <td>$0.00</td>
                            <td>$0.00</td>
                            <td>$0.00</td>
                            <td>$0.00</td>
                            <td>$0.00</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>03-02-2024</td>
                            <td>$0.00</td>
                            <td>$0.00</td>
                            <td>$0.00</td>
                            <td>$0.00</td>
                            <td>$0.00</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>04-02-2024</td>
                            <td>$0.00</td>
                            <td>$0.00</td>
                            <td>$0.00</td>
                            <td>$0.00</td>
                            <td>$0.00</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>05-02-2024</td>
                            <td>$0.00</td>
                            <td>$0.00</td>
                            <td>$0.00</td>
                            <td>$0.00</td>
                            <td>$0.00</td>
                        </tr>

                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default PaymentData;

