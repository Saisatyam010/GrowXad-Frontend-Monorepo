import React, { useState } from "react";
import { BiTargetLock } from "react-icons/bi";
import { MdOutlineSettings, MdOutlineModeEdit, MdOutlineDeleteForever, MdOutlineFileCopy, MdPowerSettingsNew, MdMenu } from "react-icons/md";
import { Dropdown, Tooltip } from 'flowbite-react';
import styles from './Table.module.css';
import { TablePagination } from '@mui/material';
import { FaFilter } from "react-icons/fa";

const tableData = [

    {
        name: "Deepak Parashar",
        today: "-",
        yesterday: "-",
        type: "popunder desktop	",
        capping: "1/12",
        rates: "1.37 USD",
        dailyimpressionlimit: "-",
        dailybudgetlimit: "-",
        totalbudgetlimit: "ADD",
        status: "",
    },
    {
        name: "Anand kumar",
        today: "-",
        yesterday: "-",
        type: "popup ad",
        capping: "1/12",
        rates: "1.37 USD",
        dailyimpressionlimit: "-",
        dailybudgetlimit: "-",
        totalbudgetlimit: "ADD",
        status: "",
    },
    {
        name: "Rahul",
        today: "-",
        yesterday: "-",
        type: "Native ",
        capping: "1/12",
        rates: "1.37 USD",
        dailyimpressionlimit: "-",
        dailybudgetlimit: "-",
        totalbudgetlimit: "ADD",
        status: "",
    },
    {
        name: "Rahul",
        today: "-",
        yesterday: "-",
        type: "Native ",
        capping: "1/12",
        rates: "1.37 USD",
        dailyimpressionlimit: "-",
        dailybudgetlimit: "-",
        totalbudgetlimit: "ADD",
        status: "",
    },
    {
        name: "Rahul",
        today: "-",
        yesterday: "-",
        type: "Native ",
        capping: "1/12",
        rates: "1.37 USD",
        dailyimpressionlimit: "-",
        dailybudgetlimit: "-",
        totalbudgetlimit: "ADD",
        status: "",
    },
    {
        name: "Rahul",
        today: "-",
        yesterday: "-",
        type: "Native ",
        capping: "1/12",
        rates: "1.37 USD",
        dailyimpressionlimit: "-",
        dailybudgetlimit: "-",
        totalbudgetlimit: "ADD",
        status: "",
    },
    {
        name: "Rahul",
        today: "-",
        yesterday: "-",
        type: "Native ",
        capping: "1/12",
        rates: "1.37 USD",
        dailyimpressionlimit: "-",
        dailybudgetlimit: "-",
        totalbudgetlimit: "ADD",
        status: "",
    },


    // Add more data here
];

const Table = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
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

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div className={styles.table}>
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
                                        className={`${styles.ab_inputsearch}`}
                                        style={{
                                            "--tw-ring-shadow": "none",
                                        }}
                                    />
                                    {/* <select name="filter-by">
                                <option value="idea">Idea</option>
                            </select> */}
                                </div>
                                <button className="d-flex gap-2"><MdMenu className=" mt-1" />Tools</button>
                                <button className="d-flex gap-2"><FaFilter className=" mt-1" />Filter</button>
                            </div>
                            {/* <div className={styles.table_info}>{`Showing ${tableData.length} of ${tableData.length} campaigns`}</div> */}
                        </div>
                    </div>

                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th onClick={() => handleSort('name')} className={styles.ab_tableheading} > Name</th>
                                <th onClick={() => handleSort('today')} className={styles.ab_tableheading} >Today</th>
                                <th onClick={() => handleSort('yesterday')} className={styles.ab_tableheading}>Yesterday</th>
                                <th onClick={() => handleSort('type')} className={styles.ab_tableheading}>Type</th>
                                <th onClick={() => handleSort('capping')} className={styles.ab_tableheading}>Capping</th>
                                <th onClick={() => handleSort('rates')} className={styles.ab_tableheading}>Rates</th>
                                <th onClick={() => handleSort('dailyimpressionlimit')} className={styles.ab_tableheading}>Daily impressions limit</th>
                                <th onClick={() => handleSort('dailybudgetlimit')} className={styles.ab_tableheading} >Daily budget limit, USD</th>
                                <th onClick={() => handleSort('totalbudgetlimit')} className={styles.ab_tableheading}>Total budget limit, USD</th>
                                <th onClick={() => handleSort('status')} className={styles.ab_tableheading}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(rowsPerPage > 0
                                ? sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : sortedData
                            ).map((row, index) => (
                                <tr key={index}>
                                    <td className="text-start">{row.name}
                                        <div className="d-flex">
                                            <Tooltip className="w-72" content="Campaign is pending approval by manager">
                                                <span className={styles.ab_pendingbtn} >PENDING</span>
                                            </Tooltip>
                                            <Tooltip className="w-72" content="Campaign is Not getting traffic. Passible reasons are: traffic disable by manager, campaign turned off, etc.">
                                                <span className={styles.ab_trafficbtn} >TRAFFIC OFF</span>
                                            </Tooltip>
                                        </div>
                                    </td>
                                    <td className="">{row.today}</td>
                                    <td>{row.yesterday}</td>
                                    <td>{row.type}</td>
                                    <td>{row.capping}</td>
                                    <td>{row.rates}</td>
                                    <td>{row.dailyimpressionlimit}</td>
                                    <td>{row.dailybudgetlimit}</td>
                                    <td>{row.totalbudgetlimit}</td>
                                    <td>
                                        <div className="flex">
                                            <button className={styles.ab_statusbtn}>
                                                <MdPowerSettingsNew />
                                            </button>
                                            <button className={styles.ab_ditbtn}>

                                                <Dropdown className="p-0 m-0 " label="" dismissOnClick={false} renderTrigger={() => <span><MdOutlineSettings /></span>}>

                                                    <Dropdown.Item className="ps-2"><MdOutlineModeEdit className="me-2 fs-6" />Edit</Dropdown.Item>
                                                    <Dropdown.Item className="ps-2"><MdOutlineFileCopy className="me-2 fs-6" />Copy Campaign</Dropdown.Item>
                                                    <Dropdown.Item className="text-danger ps-2"><MdOutlineDeleteForever className="me-2 fs-6" />Delete</Dropdown.Item>
                                                </Dropdown>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className={`${styles.pagination} `}>
                    <TablePagination

                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={sortedData.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </div>
            </div>
        </div>
    );
};

export default Table;