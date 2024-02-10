import { useEffect, useState } from 'react';
import './Layout.css';
import { Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
 
// import { getLocalStorageItem } from '../../AllGrowXStorage/AllGrowXStorage';
import { MdCircleNotifications, MdBrightness5, MdBrightness4 } from "react-icons/md";
import { useTheme } from "@mui/material";
import { useContext } from "react";


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
            <Container fluid className='bg-black '>
                <Row >
                    <Col md={4} >
                        <div className='text-white d-flex align-items-center  h-100'>
                            <div>
                                <Link to='/advertiserdashboard'>
                                    <div className='ps-10'><img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/f0bd1f38-fc5d-4730-c377-f87f375fa900/public" height={100} width={140}></img></div>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                    </Col>
                    <Col md={5}>
                        <div className="d-flex justify-content-center align-items-center p-3">
                            <div className="me-3">
                                <Link to="/advertiserdashboard/campaign/createcampaign">
                                    <button type='submit' formAction='' className='ab-btndh'>CREATE CAMPAIGN </button>
                                </Link>
                            </div>

                            {/* <div className="ab-iconsizedh ms-3 me-3">
                                <p className='text-white' onClick={colorMode.toggleColorMode}>
                                    {theme.palette.mode === "dark" ? (
                                        <MdBrightness5 />
                                    ) : (
                                        <MdBrightness4 />
                                    )}
                                </p>
                            </div> */}
                            <div className="me-3"><p className='text-white'>Balance: $0.00</p></div>
                            <div className="ab-iconsizedh ms-3 me-3"><p className='text-white'><MdCircleNotifications /></p></div>
                            <div className="ms-3"><p className='text-white'>User:{user != "" ? user?.data?.fullName : 'guest'}</p></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Header