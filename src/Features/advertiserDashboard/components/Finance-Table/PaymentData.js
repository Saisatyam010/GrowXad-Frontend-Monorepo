import React from 'react';
import { useMemo } from 'react';
import styles from "./Payment.module.css";
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';

function PaymentData() {
    //nested data is ok, see accessorKeys in ColumnDef below
    const data = [

        {
            amount: 'Joshua',
            auto_payment: 'Rolluffs',
            payment_method: 'payment_method',
            Comment: 'Comment',
            created_at: 'created_at',
            download_invoice: 'created_at',
            paid_at: 'created_at',
        },
        {
            amount: 'Joshua',
            auto_payment: 'Rolluffs',
            payment_method: 'payment_method',
            Comment: 'Comment',
            created_at: 'created_at',
            download_invoice: 'created_at',
            paid_at: 'created_at',
        },

    ];

    //should be memoized or stable
    const columns = useMemo(
        () => [
            {
                accessorKey: 'amount', //access nested data with dot notation
                header: 'Amount',
                size: 150,
            },
            {
                accessorKey: 'auto_payment',
                header: 'Auto Payment',
                size: 150,
            },
            {
                accessorKey: 'payment_method', //normal accessorKey
                header: 'Payment Method',
                size: 200,
            },
            {
                accessorKey: 'Comment',
                header: 'Comment',
                size: 150,
            },
            {
                accessorKey: 'created_at',
                header: 'Created at',
                size: 150,
            },
            {
                accessorKey: 'download_invoice',
                header: 'Download Invoice',
                size: 150,
            },
            {
                accessorKey: 'paid_at',
                header: 'Paid at',
                size: 150,
            },
        ],
        [],
    );

    const table = useMaterialReactTable({
        columns,
        data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    });


    return (
        <div className={`${styles.ab_background}`}>
            <MaterialReactTable table={table} />
        </div>
    )
};

export default PaymentData;