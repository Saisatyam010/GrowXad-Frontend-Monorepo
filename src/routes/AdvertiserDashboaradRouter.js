import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdvertiserDashbaordLayout from './../features/advertiserDashboard/components/Layout/index';
import CreateCampaign from '../features/advertiserDashboard/pages/CreateCampaign';

const AdvertiserDashboardRouter = () => {
  const advertiserDashboardRoutes = [
    {
      path: 'campaign/add',
      component: <CreateCampaign />,
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