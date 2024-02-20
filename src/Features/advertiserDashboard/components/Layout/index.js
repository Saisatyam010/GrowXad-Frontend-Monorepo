import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

const AdvertiserDashbaordLayout = () => {
    return (
        <>
            <div>
                {/* <div className=''>
                    <Header />
                </div> */}
                <div className='container-fluid p-0 m-0 '>
                    <div className=' p-0 m-0' style={{ display: 'flex', overflowX: "hidden" }}>
                        <div style={{ position: "sticky",zIndex:50, top: "10", height: "100vh" }}>
                            <Sidebar />
                        </div>
                       
                        <div style={{ height: "100vh", width: "100%", overflowY: "scroll" }} >
                            <Header />
                            <div className='bg-[#fcfcfc] px-12 py-2.5 m-0'>
                            <Outlet />
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default AdvertiserDashbaordLayout