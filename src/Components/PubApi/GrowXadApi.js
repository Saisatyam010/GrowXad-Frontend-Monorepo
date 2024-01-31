import { Col, Container, Row } from "react-bootstrap";
import "./GrowXadApi.css";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

export default function GrowXadApi() {
    return (
        <>
            <Layout>

                <Container fluid >
                    <Row className="ab-api-1bg p-5 mb-5 py-3 text-white ab-SSA_Benefit_bg_img_main">
                        <Col md={6} className="d-flex justify-content-center align-items-center">
                            <div>
                                <div>
                                    <h2 className="text-white fs-1">GrowAds API</h2>
                                    <h3>Streamline your performance marketing with <b>GrowAds
                                        ad network API</b></h3>
                                </div>
                                <div className="mt-5">
                                    <Link to="/adveriserauthLogin" className='no-underline hover:no-underline'>
                                        <button className="ab-api-btn1"> Learn More</button>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="d-flex justify-content-center ab-apiimg">
                                <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/58562c7e-bb9b-4e8d-4e63-9dc43239c400/public" className=" " width={500} />
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container>

                    <Row >
                        <Col >
                            <div>
                                <h2>GrowAds <span className="text-danger">API</span></h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col md={6}>
                            <div className=" ab-api-card card">
                                <p>Integrate with GrowAds advertising and traffic monetization solutions to seamlessly manage ad campaigns and receive highly customizable
                                    data for your analytic reports.</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className=" ab-api-card">
                                <p>Whether you are an online marketer who launches a lot of campaigns and uses numerous ad networks, or you are an adtech developer who seeks the best
                                    programmatic solution to build your own product, GrowAds API is what you need.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-4 mb-4">
                        <Col md={3} className="d-flex justify-content-center">
                            <div>
                                <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/8a0993dc-f51e-4df0-bdff-626e38c8ba00/public" width={150} />
                            </div>
                        </Col>
                        <Col md={9} className="d-flex align-items-center">
                            <div className="ab-api-ad-pb">
                                <p>Using Adsterra’s API, <b>Advertisers</b> are able to launch and stop campaigns, monitor filters and settings, blacklist zones,
                                    request financial info and check the stats.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-4 mb-4">
                        <Col md={9} className="d-flex align-items-center">
                            <div className="ab-api-ad-pb">
                                <p><b>Publishers</b> can monitor real-time statistics to measure their traffic monetization success. Connect with us to receive and
                                    process the data in your own way to make the right decisions.</p>
                            </div>
                        </Col>
                        <Col md={3} className="d-flex justify-content-center">
                            <div>
                                <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/16f42624-95f1-4f7d-7e0d-d8af1782e200/public" width={150} />
                            </div>
                        </Col>
                    </Row>
                    <Row className="m-5">
                        <Col >
                            <div >
                                <h2 className="d-flex justify-content-center">To get started, you’ll have to apply for access and an API Key.</h2>
                                <h2 className="d-flex justify-content-center">The setup process is simple and straightforward.</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-4 mb-5">
                        <Col md={6}>
                            <div>
                                <h2>FOR ADVERTISERS:</h2>
                                <ul>
                                    <li>Go to Tracking-API section of your dashboard</li>
                                    <li>Read Developer API documentation</li>
                                    <li>Generate your own token and start working with us</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div>
                                <h2>FOR PUBLISHERS:</h2>
                                <ul>
                                    <li>Please ask your personal manager or send us a message via the online chat to receive a token.</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row className="ab-apibg-last d-flex align-items-center my-5">
                        <Col sm={12} md={12}>
                            <div className="text-light" >
                                <h3 className="d-flex justify-content-center">Integrate with us</h3>
                                <p className="d-flex justify-content-center text-align-center">You’re only a few minutes away from tons of unique converting traffic. Don’t hesitate - register and start working right now</p>
                            </div>
                            <div className="d-flex justify-content-center mt-4">
                                <div>
                                    <Link to="/adveriserauthLogin" className='no-underline hover:no-underline'>
                                        <button className="ab-api-btn"> Advertiser API</button>
                                    </Link>
                                </div>

                                <div>
                                    <Link to="/adveriserauthLogin" className='no-underline hover:no-underline'>
                                        <button className="ab-api-btn">Publisher API</button>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>




            </Layout >
        </>

    )
}