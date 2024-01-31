import React from 'react'

const GrowXDashboard = () => {
<div className='w-100' style={{height:"160px",marginTop:"70px"}}>
    <div className='container-fluid '>
        <div className='row'>

            <div className='col-md-2 '>
                <Sidebar/>
                {/* <AdvSidebar/> */}
            </div>
            <div className='col-md-10 ' >
                <Outlet/>
            </div>
        </div>


    </div>
    </div>
}

export default GrowXDashboard