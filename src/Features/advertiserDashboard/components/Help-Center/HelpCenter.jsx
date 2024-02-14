import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function HelpCenterComp() {
  return (
    <Container>
    <Row>
    <div className='text-2xl py-2 font-medium'> Help Center </div>
      <Col>
     
      <div className='text-xl text-gray-100 font-normal '>Feel free to contact your manager</div>
      <div className='d-flex py-2 align-items-center'>
    <div>
        <img src="https://cdn.pncloudfl.com/avatar/user/224/6e5/790/2246e5790fa47c63a2e8724319c734cfb0225c15.jpg" alt="" width={80} height={80} style={{ borderRadius: '50%' }} />
    </div>
    <div className='pl-3'>
        <div className='pt-2'>Name: Varvara Meshavkina</div>
        <div className='pt-2'>Skype: <span style={{color:'blue'}}>  live:.cid.51654767fc91a559 </span></div>
        <div className='pt-2'>Telegram: <span style={{color:'blue'}}>  @sonali_growxads </span></div>
        <div className='pt-2'>Email: <span style={{color:'blue'}}> s.saluja@growxads.com </span> </div>
    </div>
</div>

      </Col>
      <Col>
      <div className='text-xl text-gray-100 font-normal pb-2 '>FAQ Section</div>
      <div className='pt-2'>Visit the FAQ section or submit your issue here.</div>
      <Form className="d-flex flex-column pt-2">
  <Form.Control
    type="search"
    placeholder="Search: push notification, price model"
    className="me-2"
   style={{width:'399px'}}
    aria-label="Search"
  />
  <div className="mt-2 ">
    <Button className="focus:outline-none text-white bg-gradient-to-r from-purple to-darkPurple hover:from-darkPurple hover:to-purple focus:ring-4 px-4 focus:ring-purple-300 text-lg rounded-lg font-semibold py-2.5 mb-2 dark:bg-gradient-to-r dark:from-purple dark:to-darkPurple dark:hover:from-darkPurple dark:hover:to-purple dark:focus:ring-purple-900">
      Search
    </Button>
  </div>
</Form>

      </Col>
    </Row>
  </Container>
  )
}

export default HelpCenterComp