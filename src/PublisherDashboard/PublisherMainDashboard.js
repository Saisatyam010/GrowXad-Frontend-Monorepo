import React from 'react'
import './PublisherMainDashboard.css'
import { Outlet } from 'react-router-dom'
import DashboardHeader from './DashboardHeader/DashboardHeader'
import { PublisherSidebar } from './PublisherSidebar/PublisherSidebar'

export const PublisherMainDashboard = () => {
    return (
        <>

            <div>
                <div className='container-fluid p-0 m-0 '>
                    <div className=''>
                        <DashboardHeader />
                    </div>
                    <div className='row'>

                        <div className='col-md-2  '>
                            {/* <Sidebar/> */}
                            <div style={{ position: "sticky", top: "10", height: "140vh" }}>
                                <PublisherSidebar />
                            </div>
                        </div>
                        <div className='col-md-10' >
                            <div style={{ height: "140vh", overflowY: "scroll", overflowX: "hidden" }}>
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
