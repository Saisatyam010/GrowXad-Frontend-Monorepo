import React from 'react';
import './TrackingApi.css';
import { Col, Container, Row } from 'react-bootstrap';

const TrackingApi = () => {
  return (
    <>
      <Container>
        <Row >
          <Row className='mt-4'>
            <Col className='d-flex justify-content-center'>
              <div>
                <h2>Current Token API</h2>
              </div>
            </Col>
          </Row>
          <Row className='mt-4'>
            <Col className='d-flex justify-content-center'>
              <div>
                <button type='submit' className='ab-btntapi'>GENERATE NEW TOKEN</button>
              </div>
            </Col>
          </Row>
          <Row className='mt-5 mb-4'>
            <Col className='d-flex justify-content-center'>
              <div>
                <p ><a href='#' className='ab-paratapi '>Developer API documentation</a></p>
              </div>
            </Col>
          </Row>

          <Row className='mt-4'>
            <Col className='d-flex justify-content-center'>
              <div>
                <h2>Token History</h2>
              </div>
            </Col>
          </Row>

          <Row className='mt-4'>
            <Col className='d-flex justify-content-center'>
              <div className='me-5'>
                <h6>Date</h6>
                <p>No Data</p>
              </div>
              <div>
                <h6>Token</h6>
                <p>No Data</p>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  )
}

export default TrackingApi;