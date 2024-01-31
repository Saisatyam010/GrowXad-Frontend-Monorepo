import React from 'react'
import './CreateCampaign.css'

function Preview() {
    const [preview, setPreview] = React.useState(false);
  return (
    <div className='SSA_Campagin_Sticky'>
         <div className="bg-white  py-4 px-4  my-4 SSA_CAmpaign_border">
              <div className="d-flex justify-content-between " onClick={()=>setPreview(!preview)} >
                <div className='SSA_campaign_1remFont pb-3'>
Preview
                </div>
                <div>
            {!preview ? (
              <>
                <i class="fas fa-chevron-up "></i> <h5 className="SSA_campaign_0remFont">Show More</h5>
              </>
            ) : (
              <>
                <i class="fas fa-chevron-down"></i> <h5 className="SSA_campaign_0remFont">Hide</h5>{" "}
              </>
            )}
          </div>
              </div>
              {preview ? <>
              <div className='SSA_Campaign_SmallText2'> <b>Required settings</b> </div>
             
              <div className='SSA_Campaign_SmallText2 pt-3'> <b>Campaign Name:</b> </div>
              <div className=''> <b className='SSA_Campaign_SmallText2 '>Connection Type:</b><span className='SSA_Campaign_SmallText'> ALL Traffic</span> </div>
              <div > <b className='SSA_Campaign_SmallText2 '>Pricing Type:</b> <span className='SSA_Campaign_SmallText'> CPA</span> </div>
              <div className=''> <b className='SSA_Campaign_SmallText2 '>AdUnit Category:</b><span className='SSA_Campaign_SmallText'> Popunder</span> </div>
              <div > <b className='SSA_Campaign_SmallText2 '>Traffic type:</b> <span className='SSA_Campaign_SmallText'> Mainstream</span> </div>
              <div className=''> <b className='SSA_Campaign_SmallText2 '>Landing URL:</b> </div>
              <div > <b className='SSA_Campaign_SmallText2 '>Device format:</b> <span className='SSA_Campaign_SmallText'> Desktop</span> </div>
              <div className=''> <b className='SSA_Campaign_SmallText2 '>Connection Type:</b><span className='SSA_Campaign_SmallText'> ALL Traffic</span> </div>
              <div > <b className='SSA_Campaign_SmallText2 '>Pricing Type:</b> <span className='SSA_Campaign_SmallText'>CPA</span> </div>
              <div className=''> <b className='SSA_Campaign_SmallText2 '>Connection Type:</b><span className='SSA_Campaign_SmallText'> ALL Traffic</span> </div>
              <div > <b className='SSA_Campaign_SmallText2 '>Pricing Type:</b> <span className='SSA_Campaign_SmallText'>CPA</span> </div>
           
              <div className='SSA_Campaign_SmallText2 py-3'> <b>Campaign Name:</b> </div>
              <div className=''> <b className='SSA_Campaign_SmallText2 '>Connection Type:</b><span className='SSA_Campaign_SmallText'> ALL Traffic</span> </div>
              <div > <b className='SSA_Campaign_SmallText2 '>Pricing Type:</b> <span className='SSA_Campaign_SmallText'> CPA</span> </div>
              <div className=''> <b className='SSA_Campaign_SmallText2 '>AdUnit Category:</b><span className='SSA_Campaign_SmallText'> Popunder</span> </div>
              <div > <b className='SSA_Campaign_SmallText2 '>Traffic type:</b> <span className='SSA_Campaign_SmallText'> Mainstream</span> </div>
            

              </>:<></>}
            </div>
    </div>
  )
}

export default Preview