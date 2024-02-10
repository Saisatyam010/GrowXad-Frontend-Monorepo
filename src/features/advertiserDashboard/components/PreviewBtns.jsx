import React from 'react'

function PreviewBtns() {
  return (
    <div className='py-4 px-3  bg-white ' style={{border:'1px solid #d9d9d9'}}>
        <p><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked/>
  <label class="form-check-label" for="flexCheckDefault">
  I declare & guaruntee that my campaign meets the Quality Guidelines.
  </label>
</div> .</p>
<div style={{textAlign:'right ' }} className='pt-3'><button
  style={{
    background: "linear-gradient(180deg, #73035B 0%, #46133B 100%",
    padding: "8px 25px 8px 25px",
    color: 'white',
    marginLeft: 'auto', // Align to the right
    marginTop: '2px', // Adjust the top margin as needed
  }}
>
  Start Campaign
</button></div>


    </div>
  )
}

export default PreviewBtns