import React from 'react'
import {Routes, Route } from 'react-router-dom'
import HomePage from '../main/pages/HomePage'
import BenefitsForAdvertiserPage from '../main/pages/BenefitsForAdvertiserPage'
import CreateCampaign from '../features/advertiserDashboard/pages/CreateCampaign'
const AdvertiserDashboardRouter = () => {
  const advertiserDashboardRoutes=[
    {
        path: '/advertiser-benefits',
        component:<BenefitsForAdvertiserPage/>,
        exact: true
    },
    {
        path: '/create-campaign',
        component:<CreateCampaign/>,
        exact: true
    }
  ]
  return (
    
    <Routes>
    <Route path="/advertiser" element={<HomePage/>} />
    <Route path="/advertiser/create-campaign" element={<CreateCampaign/>} />
    {/* {advertiserDashboardRoutes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        element={route.component}
        exact={route.exact}
      />
      
    ))} */}
  </Routes>
  )
}

export default AdvertiserDashboardRouter