import React from 'react';
import PaymentData from '../components/Finance-Table/PaymentData';
import AccountData from '../components/Finance-Table/AccountData';



function Finance() {
    return (
        <>
            <div>
                <h3>Account Details</h3>
                <AccountData />
            </div>
            <div className='p-2 bg-danger mt-3'>
                <h3>Account Details</h3>
                <PaymentData />
            </div>
        </>
    )
}

export default Finance;