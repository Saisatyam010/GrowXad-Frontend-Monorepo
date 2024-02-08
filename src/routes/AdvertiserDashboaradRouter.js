import React from 'react'
import {Routes, Route } from 'react-router-dom'
import HomePage from '../main/pages/HomePage'
import BenefitsForAdvertiserPage from '../main/pages/BenefitsForAdvertiserPage'
const AdvertiserDashboardRouter = () => {
  const advertiserDashboardRoutes=[
    {
        path: '/advertiser-benefits',
        component:<BenefitsForAdvertiserPage/>,
        exact: true
    }
  ]
  return (
    
    <Routes>
    <Route path="/advertier" element={<HomePage/>} />
    {advertiserDashboardRoutes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        element={route.component}
        exact={route.exact}
      />
      
    ))}
  </Routes>
  )
}

export default AdvertiserDashboardRouter