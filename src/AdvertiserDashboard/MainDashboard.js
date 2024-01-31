import React from 'react'
import AdvSidebar from './AdvSidebar/AdvSidebar'
import { Outlet } from 'react-router-dom'
import Sidebar from "./global/Sidebar";
// import AdvSidebar from './AdvSidebar/AdvSidebar'

import DashboardHeader from './DashboardHeader/DashboardHeader'
const MainDashboard = () => {
    return (
        <>
            <div>
                <div className=''>
                    <DashboardHeader />
                </div>
                <div className='container-fluid p-0 m-0 '>
                    <div className='  p-0 m-0' style={{ display: 'flex', overflowX: "hidden" }}>
                        <div style={{ position: "sticky", top: "10", height: "85vh" }}>
                            <AdvSidebar />
                        </div>
                        <div style={{ height: "86vh",width:"100%", overflowY: "scroll" }} className='p-3'>
                            <Outlet />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default MainDashboard



// import React, { useState } from "react";
// import AdvSidebar from "./AdvSidebar/AdvSidebar";
// import { Outlet } from "react-router-dom";
// import DashboardHeader from "./DashboardHeader/DashboardHeader";
// import Sidebar from "./global/Sidebar";
// import Topbar from "./global/Topbar";

// const MainDashboard = () => {
//     const [isSidebar, setIsSidebar] = useState(true);
//     return (
//         <>
//             <div>
//                 <div className="">
//                     <DashboardHeader />
//                 </div>
//                 <div className="container-fluid p-0 m-0 ">
//                     <div className="row  p-0 m-0">
//                         <div className="col-md-2 bg-black  p-0 m-0">
//                             <div style={{ position: "fix", top: "10", height: "140vh" }}>
//                                 <Sidebar />
//                             </div>
//                         </div>
//                         <div className="col-md-10 m-0 p-0">
//                             <div style={{ height: "140vh", overflowY: "scroll", overflowX: "hidden" }} className="p-3">
//                                 <Outlet />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default MainDashboard;
