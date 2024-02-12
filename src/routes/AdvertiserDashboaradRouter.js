import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdvertiserDashbaordLayout from './../features/AdvertiserDashboard/components/Layout/index';
import CreateCampaign from '../features/AdvertiserDashboard/pages/CreateCampaign';
import HelpCenter from '../features/AdvertiserDashboard/pages/HelpCenter'

const AdvertiserDashboardRouter = () => {
  const advertiserDashboardRoutes = [
    {
      path: 'campaign/add',
      component: <CreateCampaign />,
      exact: true
    },
    {
      path: 'help-center',
      component:<HelpCenter/>,
      exact:true
    }
    // {
    //   path: 'campaign/my-campaigns',
    //   component: <MyCampaign/>,
    //   exact: true
    // }
  ]
  return (

    <Routes>
      <Route path="/advertiser-dashboard/" element={<AdvertiserDashbaordLayout />} >
        {advertiserDashboardRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.component}
            exact={route.exact}
          />

        ))}
      </Route>
    </Routes>
  )
}

export default AdvertiserDashboardRouter