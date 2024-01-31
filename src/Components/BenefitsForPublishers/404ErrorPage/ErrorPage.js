import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../../Layout/Layout'

export const ErrorPage = () => {
  return (
    <>
      <Layout>
        <Container fluid>
          <Row>
            <Col md={12} style={{height:"100vh",marginTop:"50px"}}>
              <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/fc04aeda-faad-4f2c-44d1-cd0297291000/public" alt='' width="100%" height="100%">
              </img>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}
