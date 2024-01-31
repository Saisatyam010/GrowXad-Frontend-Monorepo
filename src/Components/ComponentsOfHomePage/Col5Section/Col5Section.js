import React from 'react'
import '../../MainHomePage/MainHomePage.css'

function Col5Section() { 
  return (
    <div>
        <div className="container py-5  my-5" style={{
  background: 'transparent',
  color: 'white',
  borderRadius: '10px',

  borderImage: 'linear-gradient(to left, rgb(148, 86, 225), rgb(112, 65, 164), rgb(75, 21, 96))',
  borderImageSlice: '1',
  // borderWidth: '2px',
  // borderStyle: 'solid'
}}>

          <h1 className='pb-4 text-center'> Well-Proven Technology</h1>
          <div class="row justify-content-center">
  <div class="col-md-2 col-6 text-center pt-3">
    <div class="d-flex flex-column align-items-center">
      <img src="https://clickadilla.com/img/svg/ico_rtb1.svg" alt="" width={50} /> 
      <div className='pt-2'>All Ad Formats</div>
    </div>
  </div>
  <div class="col-md-2 col-6 text-center  pt-3">
    <div class="d-flex flex-column align-items-center">
      <img src="https://clickadilla.com/img/svg/ico_rtb2.svg" alt="" width={50}/>
      <div className='pt-2'>Global Reach</div>
    </div>
  </div>
  <div class="col-md-2 col-6 text-center  pt-3">
  <div class="d-flex flex-column align-items-center">
      <img src="https://clickadilla.com/img/svg/ico_rtb3.svg" alt="" width={50} />
      <div className='pt-2'>Acquire an Audience</div>
    </div>
  </div>
  <div class="col-md-2 col-6 text-center  pt-3">
  <div class="d-flex flex-column align-items-center">
      <img src="https://clickadilla.com/img/svg/ico_rtb4.svg" alt="" width={50}/>
      <div className='pt-2'>Safe-Guarded</div>
    </div>
  </div>
  <div class="col-md-2 col-6 text-center  pt-3">
  <div class="d-flex flex-column align-items-center">
      <img src="https://clickadilla.com/img/svg/ico_rtb5.svg" alt="" width={50}/>
      <div className='pt-2'>Safe-Guarded</div>
    </div>
  </div>
</div>
<div className=" justify-content-center mt-4 text-center">
  <button className="btn text-bold btn-light ssa_btnShadow mt-4 mr-2 px-4 py-2 bg-black text-white" style={{fontWeight:'500',fontSize:'18px'}}>Advertize</button>
  <button className='btn btn-light font-bold ssa_btnShadow  text-dark mt-4 px-4 py-2 bg-black text-white' style={{fontWeight:'500',fontSize:'18px'}}>Demo Request </button>
</div>

        </div>
    </div>
  )
}

export default Col5Section