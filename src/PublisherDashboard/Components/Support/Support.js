import React from 'react'
import './Support.css'

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Col, Container, Row, Table } from 'react-bootstrap';


export const Support = () => {
  return (
    <Container >
      <Row className='p-4'>
        <Row className='px-5 py-3 bg-light ab-divbrodersupport'>
          <Col>
            <div>
              <h2>Support</h2>
            </div>
            <div>
              <p>Any questions? You can get in touch via the live chat that big red button over there in the lower right corner.<br />
                However, if you need anything from your old tickets — they will still be here.</p>
            </div>
            <div className="ab-table-responsivesupport">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th className='py-3'>Created On</th>
                    <th className='py-3'>Updated On</th>
                    <th className='py-3'>Type</th>
                    <th className='py-3'>Status</th>
                    <th className='py-3'>Subject</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="5" className="text-center py-4">
                      No record Found
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="5" className=" text-end py-2">
                      <label className='me-3'>0-0 of 0</label><MdKeyboardArrowLeft /> <MdOutlineKeyboardArrowRight />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
        <Row className='px-5 py-3 mt-4 bg-light ab-divbrodersupport'>
          <Col>
            <div>
              <h4>You can get more information in <a href='#' className='ab-tagcolor'>FAQ</a> or our <a href='#' className='ab-tagcolor'>Blog</a></h4>
            </div>
            <div>
              <a href='#' className='ab-tagcolorsuport'>Step-By-Step Onboarding</a>
              <a href='#' className='ab-tagcolorsuport'>Getting Started</a>
              <a href='#' className='ab-tagcolorsuport'>Ad Units and Code Snippets</a>
              <a href='#' className='ab-tagcolorsuport'>Payouts</a>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  )
}
