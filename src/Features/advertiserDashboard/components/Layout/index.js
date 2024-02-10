import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
// import Sidebar from './Sidebar'
 
const AdvertiserDashbaordLayout = () => {
    return (
        <>
            <div>
                <div className=''>
                    <Header/>
                </div>
                <div className='container-fluid p-0 m-0 '>
                    <div className='  p-0 m-0' style={{ display: 'flex', overflowX: "hidden" }}>
                        <div style={{ position: "sticky", top: "10", height: "85vh" }}>
                            {/* <Sidebar/> */}
                        </div>
                        <div style={{ height: "86vh", width: "100%", overflowY: "scroll" }} className='p-3'>
                            <Outlet />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default AdvertiserDashbaordLayout