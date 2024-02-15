import React from 'react';
import PaymentData from '../components/Finance-Table/PaymentData';
import AccountData from '../components/Finance-Table/AccountData';

function Finance() {
    return (
        <>
            <div >
                <AccountData />
                <PaymentData />
            </div>
        </>
    )
}

export default Finance;