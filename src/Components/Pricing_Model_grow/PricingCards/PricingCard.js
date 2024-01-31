import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import './PricingCard.css';
const PricingCard = () => {
  return (
    <>
      <div style={{ padding: "30px 0px" }}>

        <Container className="">

          <Row >

            <Col xs={12} md={4} lg={4} className="  py-5  sk_border" >

              <div className='card p-2 rounded-md'>               <div className='d-flex justify-content-center  '>
                <div>
                  <  img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/c94f6f62-ac4d-4453-8cd9-8b1b47913500/public' alt='advertisercaed' />
                  {/* <h1 className='text-white p-2 fs-2'><strong>Advertisers</strong></h1> */}
                </div>
              </div>
                <div className=''>
                  <h4 className='fs-5'>Protect budgets and win hearts with CPM-based smart campaign tests</h4>

                  <p className=' p-2 fs-6'>Forget about hit-or-miss tactics. Before
                    running your CPA campaign at full
                    blast, we test in on a CPM base with a
                    test budget. It allows you to estimate
                    how engaging your offer is and adjust
                    the creatives before launching the
                    campaign. For Web-Push and Social
                    Bar formats, you can A/B test up to 15
                    creatives to pick the most beneficial</p>
                  {/* <div className="p-3 d-flex text-white" > 
                   
                 <p className='pe-2'>  Learn More</p> <div className=' fs-6 pt-1'><FaArrowRight /></div></div> */}
                </div>
              </div>



            </Col>

            <Col xs={12} md={4} lg={4} className=" py-5  sk_border" >

              <div className='card p-2 rounded-md'>               <div className='d-flex justify-content-center '>
                <div>
                  <  img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/91d7e27a-b078-4993-07e6-d65676024e00/public' alt='advertisercaed' />
                  {/* <h1 className='text-white p-2 fs-2'><strong>Advertisers</strong></h1> */}
                </div>
              </div>
                <div>
                  <h4 className=''>Nurture and retain users with Smart Retargeting Tool</h4>

                  <p className=' p-2 fs-6'>Available on a CPM, CPC or CPA base, smart retargeting helps convert leads that have seen your ads but haven’t purchased yet. Adsterra’s pixel contributes to customer retention and better ad personalization, cause you are showing ads to those who are interested in it.</p>
                  {/* <div className="p-3 d-flex text-white" > 
                   
                 <p className='pe-2'>  Learn More</p> <div className=' fs-6 pt-1'><FaArrowRight /></div></div> */}
                </div>
              </div>



            </Col>


            <Col xs={12} md={4} lg={4} className=" py-5  sk_border" >

              <div className='card p-2 rounded-md'>               <div className='d-flex justify-content-center '>
                <div>
                  <  img src='https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/aecca63c-51d6-489c-a6ba-a1f15f047b00/public' alt='advertisercaed' />
                  {/* <h1 className='text-white p-2 fs-2'><strong>Advertisers</strong></h1> */}
                </div>
              </div>
                <div>
                  <h4 className=''>Buy CPM traffic via RTB to win the most wanted ad placements</h4>

                  <p className=' p-2 fs-6'>Our demand RTB partners profit from the fastest multiple campaigns launch and managing massive traffic volumes. With OpenRTB integration, you can use all auctions including header bidding. All GEOs, mobile&desktop traffic, and advanced targeting options provided.</p>
                  {/* <div className="p-3 d-flex text-white" > 
                
              <p className='pe-2'>  Learn More</p> <div className=' fs-6 pt-1'><FaArrowRight /></div></div> */}
                </div>
              </div>



            </Col>


          </Row>
        </Container>



      </div>

    </>
  )
}

export default PricingCard