import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdvertiserDashbaordLayout from './../Features/advertiserDashboard/components/Layout/index';
import CreateCampaign from '../Features/advertiserDashboard/pages/CreateCampaign';
import MyCampaign from "../Features/advertiserDashboard/pages/MyCampaign"
const AdvertiserDashboardRouter = () => {
  const advertiserDashboardRoutes = [
    {
      path: 'campaign/add',
      component: <CreateCampaign />,
      exact: true
    },
    {
      path: 'campaign/my-campaigns',
      component: <MyCampaign/>,
      exact: true
    }
  ]
  return (

    <Routes>
      <Route path="/advertier-dashboard/" element={<AdvertiserDashbaordLayout />} >
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