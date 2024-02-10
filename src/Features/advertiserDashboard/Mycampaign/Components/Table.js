import React, { useState } from "react";
import { PiCurrencyDollarLight } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";
import { BiTargetLock } from "react-icons/bi";
import { LuArrowUpDown } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp, MdOutlineModeEdit, MdOutlineDeleteForever, MdOutlineFileCopy } from "react-icons/md";
import { Dropdown } from 'flowbite-react';
import styles from './Table.module.css';


const tableData = [
    {
        name: "Deepak",
        type: "RON",
        details: "I",
        geo: "IN",
        redirects: 0,
        conversions: 0,
        spent: "$0.00",
        payout: "$0.00",
        profit: "$0.00",
        roi: "0%",
        eCPA: "0%",
        eCPC: "T",
        bid: "0.01",
        winRatio: "--",
        dailyCap: "--",
        status: "topUpNeeded",

    },
    {
        name: "Anand kumar",
        type: "RON",
        details: "I",
        geo: "UAE",
        redirects: 0,
        conversions: 0,
        spent: "$0.00",
        payout: "$0.00",
        profit: "$0.00",
        roi: "0%",
        eCPA: "0%",
        eCPC: "T",
        bid: "0.01",
        winRatio: "--",
        dailyCap: "--",
        status: "topUpNeeded",

    },
    {
        name: "Rahul",
        type: "RON",
        details: "I",
        geo: "USA",
        redirects: 0,
        conversions: 0,
        spent: "$0.00",
        payout: "$0.00",
        profit: "$0.00",
        roi: "0%",
        eCPA: "0%",
        eCPC: "T",
        bid: "0.01",
        winRatio: "--",
        dailyCap: "--",
        status: "topUpNeeded",
    },
    // Add more data here
];

const Table = () => {
    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('')

    const handleSort = (column) => {
        if (sortBy === column) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(column);
            setSortOrder('asc');
        }
    };

    const filteredData = tableData.filter((row) => {
        return row.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const sortedData = filteredData.sort((a, b) => {
        if (sortBy) {
            const comparison = a[sortBy].localeCompare(b[sortBy]);
            return sortOrder === 'asc' ? comparison : -comparison;
        }
        return 0;
    });

    return (

        <div className={styles.table_container}>
            <div className={styles.ab_tablecontainerbox}>
                <div className={styles.table_header}>
                    <div className={styles.header_left}>
                        <h4 className="d-flex align-items-center"><BiTargetLock className={`${styles.abc} me-2 fs-3`} /> Campaigns</h4>
                    </div>
                    <div className={styles.header_right}>
                        <div className={styles.bulk_actions}>
                            <div className={styles.filter_container}>
                                <input
                                    type="text"
                                    placeholder="Search by name"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                {/* <select name="filter-by">
                                <option value="idea">Idea</option>
                            </select> */}
                            </div>
                            <button>Bulk actions</button>
                            <button>Export to CSV (all)</button>
                        </div>
                        <div className={styles.table_info}>{`Showing ${tableData.length} of ${tableData.length} campaigns`}</div>
                    </div>
                </div>

                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th onClick={() => handleSort('name')} > <div className="flex items-center justify-between" >Name <LuArrowUpDown /> </div></th>
                            <th onClick={() => handleSort('type')}  >Type</th>
                            <th onClick={() => handleSort('details')} >Details</th>
                            <th onClick={() => handleSort('geo')} >Geo</th>
                            <th onClick={() => handleSort('redirects')} >Redirects</th>
                            <th onClick={() => handleSort('conversions')} >Conv.</th>
                            <th onClick={() => handleSort('spent')} >Spent</th>
                            <th onClick={() => handleSort('payout')} >Payout</th>
                            <th onClick={() => handleSort('profit')} >Profit</th>
                            <th onClick={() => handleSort('roi')} >ROI</th>
                            <th onClick={() => handleSort('eCPA')} >eCPA</th>
                            <th onClick={() => handleSort('eCPC')} >eCPC</th>
                            <th onClick={() => handleSort('bid')} >BID</th>
                            <th onClick={() => handleSort('winRatio')} >Win Ratio</th>
                            <th onClick={() => handleSort('dailyCap')} >Daily Cap</th>
                            <th onClick={() => handleSort('status')} >Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((row, index) => (
                            <tr key={index}>
                                <td>{row.name}</td>
                                <td>{row.type}</td>
                                <td>{row.details}</td>
                                <td>{row.geo}</td>
                                <td>{row.redirects}</td>
                                <td>{row.conversions}</td>
                                <td>{row.spent}</td>
                                <td>{row.payout}</td>
                                <td>{row.profit}</td>
                                <td>{row.roi}</td>
                                <td>{row.eCPA}</td>
                                <td>{row.eCPC}</td>
                                <td>
                                    <button className={`${styles.ab_btnradius} flex items-center`}>
                                        <span className={`${styles.ab_spanborderright} ${styles.ab_m_right}`}><PiCurrencyDollarLight /></span>
                                        {row.bid}
                                        <span className={`${styles.ab_spanborderleft} ${styles.ab_m_left}`}><MdOutlineKeyboardArrowDown /></span>
                                        <span className={styles.ab_spanborderleft}><MdOutlineKeyboardArrowUp /></span>
                                    </button>
                                </td>
                                <td>{row.winRatio}</td>
                                <td>{row.dailyCap}</td>
                                <td>
                                    <div className="flex">
                                        <button className={`${styles.ab_btnred} flex items-center`}>
                                            {row.status}
                                            <span className={`${styles.ab_spanborderleft} ${styles.ab_m_left}`}><PiCurrencyDollarLight /></span>
                                        </button>
                                        <span className={styles.ab_ditbtn}>
                                            <Dropdown className="p-0 m-0 " label="" dismissOnClick={false} renderTrigger={() => <span><BsThreeDots /></span>}>

                                                <Dropdown.Item className="ps-2"><MdOutlineModeEdit className="me-2" />Edit</Dropdown.Item>
                                                <Dropdown.Item className="ps-2"><MdOutlineFileCopy className="me-2" />Copy Campaign</Dropdown.Item>
                                                <Dropdown.Item className="text-danger ps-2"><MdOutlineDeleteForever className="me-2" />Delete</Dropdown.Item>
                                            </Dropdown>
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Table;