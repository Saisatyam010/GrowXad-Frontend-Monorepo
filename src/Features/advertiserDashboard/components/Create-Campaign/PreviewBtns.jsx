import { Button } from '@mui/material'
import React from 'react'

function PreviewBtns() {
  return (
    <div className='py-4 px-3  bg-white ' style={{border:'1px solid #d9d9d9'}}>
        <p>
  <div class="form-check flex gap-2">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked/>
  <label class="form-check-label text-sm" for="flexCheckDefault">
  I declare & guaruntee that my campaign meets the Quality Guidelines.
  </label>
</div> .</p>
<div style={{textAlign:'right ' }} className='pt-3 text-sm'>
<Button
          className={`  font-semibold text-sm px-4 py-1 `}
          style={{
            background: "linear-gradient(180deg, #73035B 0%, #46133B 100%",
            padding: "8px 25px 8px 25px",
          }}
          variant="contained"
          color="primary"
         
          type="submit"
        >
          Submit
        </Button>
</div>


    </div>
  )
}

export default PreviewBtns