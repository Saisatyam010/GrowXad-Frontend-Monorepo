import React from 'react'
import {Routes, Route } from 'react-router-dom'
import HomePage from '../main/pages/HomePage'
import BenefitsForAdvertiserPage from '../main/pages/BenefitsForAdvertiserPage'
const MainRouter = () => {
  const mainRoutes=[
    {
        path: '/home',
        component:<HomePage/>,
        exact: true
    },
    {
      path:'/advetisers-benefits/',
      component:<BenefitsForAdvertiserPage/>,
      exact:true
    }
  ]
  return (
    
    <Routes>
    <Route path="/" element={<HomePage/>} />
    {mainRoutes.map((route, index) => (
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

export default MainRouter