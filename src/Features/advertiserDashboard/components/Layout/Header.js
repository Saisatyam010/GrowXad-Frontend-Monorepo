import { useEffect, useState } from 'react';
// import './Layout.css';
import { Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { IoWalletSharp } from "react-icons/io5";
import { Dropdown } from 'flowbite-react';
import { MdCircleNotifications, MdLogout, MdOutlineSettings, } from "react-icons/md";
import { FaRegUser, FaUser, FaBell } from "react-icons/fa";
// import { getLocalStorageItem } from '../../AllGrowXStorage/AllGrowXStorage';
import { useTheme } from "@mui/material";
import styles from './Layout.module.css';


const Header = () => {

    const theme = useTheme();

    const [user, setUser] = useState('');
    // const users = getLocalStorageItem("user");

    // const getWalletAmount = async () => {
    //     const res = getWalletBalance(users);
    //     const result = JSON.stringify(res);
    // }

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    useEffect(() => {
        // getWalletAmount()
    }, []);

    return (
        <>
            <Container fluid className='border-b-0 '>
                <Row className='h-100'>
                    <Col md={4} >
                        <div className='text-grey-700 d-flex align-items-center'>
                            <div>
                                <Link to='/advertiserdashboard'>
                                    <div className='ps-10'><img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/ab168248-e66b-449d-6d5d-06c26aa56d00/public" height={100} width={140}></img></div>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                    </Col>
                    <Col md={5}>
                        <div className="d-flex justify-content-end align-items-center pt-3 pb-3">
                            <div className="me-5 " >
                                <Link to="/advertiserdashboard/campaign/createcampaign">
                                    <button type='submit' formAction='' className={`${styles.ab_btndh} ${styles.ab_pointer}`}>Create Campaign </button>
                                </Link>
                            </div>

                            <div className={` ${styles.ab_pointer} ${styles.ab_balance} me-4 d-flex justify-content-center align-items-center`}><IoWalletSharp className={`${styles.ab_greydiv} fs-1 me-2`} /><span className={``}> $0.00</span></div>

                            <div className={` ${styles.ab_pointer} ${styles.ab_iconsizedh}  ms-2 me-3 `}><span><FaBell className={`${styles.ab_greydiv} fs-1`} /></span></div>


                            <div className="me-2 ">
                                <Dropdown className={`${styles.ab_pointer} ${styles.ab_ditbtn} d-flex justify-content-center align-items-center `} label="" dismissOnClick={false} renderTrigger={() => <span ><FaUser className={`${styles.ab_pointer} ${styles.ab_greydiv} fs-1 me-2 `} /></span>}>

                                    <Dropdown.Item className="ps-1 fs-6"><FaRegUser className='me-2' />{user != "" ? user?.data?.fullName : 'guest'}</Dropdown.Item>
                                    <Dropdown.Item className="ps-1 fs-6"><MdOutlineSettings className="me-2" />Settings</Dropdown.Item>
                                    <Dropdown.Item className={`${styles.ab_color} ps-1 fs-6`}><MdLogout className="me-2" />Logout</Dropdown.Item>
                                </Dropdown>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default Header