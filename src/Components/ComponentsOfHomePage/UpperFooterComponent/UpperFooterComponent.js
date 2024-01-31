import React from 'react'
import { Container } from 'react-bootstrap'
import { BsPeopleFill } from 'react-icons/bs'
import { LuCircleDollarSign } from "react-icons/lu";
import { BiDollarCircle } from "react-icons/bi";
import { IoIosStar, IoMdDesktop } from 'react-icons/io'

import Col5Section from '../Col5Section/Col5Section'
import { Link } from 'react-router-dom';
const UpperFooterComponent = () => {
  return (
 <>
 
 
 <div >
    <div className='container-fluid  bg-light'>
      <div className='row '>
        <div className='col-md-12'>
        <div className='d-flex align-items-center justify-content-center gap-3 mt-3'>
        <div className='d-flex gap-2'>
              <div className='d-flex justify-content-center fs-3'>
          <IoIosStar className='text-warning '/>        
          </div>
          <h1 className='fs-2 text-black'>Advertize</h1>
             </div>
             <div className='d-flex gap-2'>
           
           <div className='d-flex justify-content-center fs-3'>
           {/* <LuCircleDollarSign /> */}
           <LuCircleDollarSign className='text-warning' />
       </div>

       <h1 className='fs-2  text-black'>
Monetize
</h1>       
          </div>
</div>
        </div>
        <div className='col-md-12'>
        <div className='  d-flex align-items-center justify-content-center'>
            {/* <button className='btn  text-white fs-4 font-[900] text-center w-60 bg-black '  >RTB</button> */}
          </div>
          <h1 className='text-center fs-2 font-[900] text-black text-[45px]'>Real Time Bidding</h1>
          
      
        </div>
      </div>
      
      
    </div>
   
    
    
        <div  className='p-5 bg-light'>

    <div className='container-fluid'>
     
        <div className='row'>
           
         
<div className='col-md-12'>
<div >
<div style={{position: 'relative', paddingTop: '56.25%'}}>
  <iframe src="https://customer-b0uja279jrdjd4ih.cloudflarestream.com/73b387c34ed3d99b8e85fb4689377401/iframe?preload=true&loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-b0uja279jrdjd4ih.cloudflarestream.com%2F73b387c34ed3d99b8e85fb4689377401%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&controls=false" style={{border: 'none', position: 'absolute', top: 0, left: 0, height: '100%', width: '100%'}} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen="true" />
</div>

</div>


</div>

<div className='col-md-12'>
<div>
        <div className="container py-5  my-5" style={{
  background: 'transparent',
  color: 'white',
  borderRadius: '10px',

}}>

          <h1 className='pb-4 text-center text-black'> Well-Proven Technology</h1>
          <div class="row justify-content-center">
  <div class="col-md-2 col-6 text-center pt-3">
    <div class="d-flex flex-column align-items-center">
      <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/4d0b58e6-5861-45a3-a690-bfe931030b00/public" alt="" width={50} height={100} /> 
      <div className='pt-2 text-black'>All Ad Formats</div>
    </div>
  </div>
  <div class="col-md-2 col-6 text-center  pt-3">
    <div class="d-flex flex-column align-items-center">
      <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/0271b844-a37b-4de0-5bfb-a5c3e5fe8300/public" alt="" width={50}/>
      <div className='pt-2 text-black'>Global Reach</div>
    </div>
  </div>
  <div class="col-md-2 col-6 text-center  pt-3">
  <div class="d-flex flex-column align-items-center">
      <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/57ffeed5-6ec2-461d-9a55-ec3cb525f600/public" alt="" width={50} />
      <div className='pt-2 text-black'>Acquire an Audience</div>
    </div>
  </div>
  <div class="col-md-2 col-6 text-center  pt-3">
  <div class="d-flex flex-column align-items-center">
      <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/9113e613-1d84-4ced-b5ed-b224f6c6d800/public" alt="" width={50}/>
      <div className='pt-2 text-black'>Safe-Guarded</div>
    </div>
  </div>
  <div class="col-md-2 col-6 text-center  pt-3">
  <div class="d-flex flex-column align-items-center">
      <img src="https://imagedelivery.net/f5tF3V4WaB6L98qcq1rX5w/2c5e3ba2-8b35-4fca-c2eb-cfdd46a70a00/public" alt="" width={50}/>
      <div className='pt-2 text-black'>Customer Query</div>
    </div>
  </div>
</div>
<div className=" justify-content-center mt-4 text-center">
<Link to="/adveriserauthlogin" className='text-white no-underline hover:no-underline'><button className="btn text-bold btn-light ssa_btnShadow mt-4 mr-2 px-4 py-2 bg-black text-white" style={{fontWeight:'500',fontSize:'18px'}}>
    
    Advertiser
    
    </button></Link>
    <Link to="/adveriserauthlogin" className='text-white no-underline hover:no-underline'><button className='btn btn-light font-bold ssa_btnShadow  text-dark mt-4 px-4 py-2 bg-black text-white' style={{fontWeight:'500',fontSize:'18px'}}>
  Publisher
     </button></Link>
</div>

        </div>
    </div>
</div>
        </div>


       {/* <Col5section/> */}
    </div>

    
    </div>
    </div>
   
    
    
       
    </>

  
  )
}

export default UpperFooterComponent