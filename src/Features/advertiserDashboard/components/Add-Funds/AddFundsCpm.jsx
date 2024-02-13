import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AddFundsCpm() {
  // Define an array of objects representing the content for each column
  const columns = [
    {
      imgSrc: 'https://storage.googleapis.com/multi-network-bucket/payments/wire.svg',
      title: 'Wire transfer',
      description: 'Funds will be loaded to your account in 3 working days after you proceed the payment',
    },
    {
      imgSrc: 'https://storage.googleapis.com/multi-network-bucket/payments/bitcoin.svg',
      title: 'Bitcoin',
      description: 'Funds will be loaded into your account as soon as the transaction is confirmed',
    },
    {
        imgSrc: 'https://storage.googleapis.com/multi-network-bucket/payments/capitalist.svg',
        title: 'Capitalist',
        description: 'Funds will be loaded to your account in 3 working days after you proceed the payment',
      },
      {
        imgSrc: 'https://storage.googleapis.com/multi-network-bucket/payments/usdt.svg',
        title: 'Capitalist USDT (TRC20)',
        description: 'Funds will be loaded to your account in 3 working days after you proceed the payment',
      },
      {
        imgSrc: 'https://storage.googleapis.com/multi-network-bucket/payments/credit-card.svg',
        title: 'Credit card',
        description: 'Funds will be loaded to your account in 3 working days after you proceed the payment',
      },
      {
        imgSrc: 'https://storage.googleapis.com/multi-network-bucket/payments/usdt.svg',
        title: 'USDT (TRC20 manual transfer)',
        description: 'Funds will be loaded to your account in 3 working days after you proceed the payment',
      },
      {
        imgSrc: 'https://storage.googleapis.com/multi-network-bucket/payments/payeer.png',
        title: 'Paypal',
        description: 'Funds will be loaded to your account in 3 working days after you proceed the payment',
      }
    // Add more objects for additional columns if needed
  ];

  return (
    <div>
      <Container>
        <Row>
          {/* Map over the columns array to generate the columns dynamically */}
          {columns.map((column, index) => (
            <Col key={index}  md={4} className='pt-4'>
           <div className='bg-gray-10 p-4 hover:bg-purple text-gray hover:text-white hover:shadow-lg hover:border-gray-600 rounded-lg'>
    <img src={column.imgSrc} alt={column.title} />
    <div className='py-4 text-lg'>{column.title}</div>
    <div className='pb-4 text-sm'>{column.description}</div>
</div>

            </Col>
          ))}
        </Row>


        <div style={{backgroundColor:'rgb(216,240,246',color:'#1182c9'}} className='p-4 my-4 rounded-lg'>Please, don't use direct payments within the payment system. You need to complete all of the steps started on the Clickadilla platform for loading funds, otherwise your payment would be attached to your account with a long-time delay.
<br /> <br />
Before loading funds, make sure that at least one of your campaign is approved.</div>

<div className="d-flex justify-between">
    <div className='d-flex'>
        <img src="https://app.clickadilla.com/img/visa-mastercard.1920ed68.svg" alt=""  /> &nbsp;
        Payments are processed by <a href="https://www.clickadilla.com/" target="_blank" rel="noreferrer" className="text-blue-600">growXads</a>
    </div>
    <div>Accepting Conditions</div>
</div>
      </Container>
    </div>
  );
}

export default AddFundsCpm;
