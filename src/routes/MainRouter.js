import React from 'react'
import {Routes, Route } from 'react-router-dom'
import HomePage from '../main/pages/HomePage'
import BenefitsForAdvertiserPage from '../main/pages/BenefitsForAdvertiserPage'
import ForgotPass from '../main/pages/ForgotPass'
import LoginComp from '../main/components/Login/LoginComp'
import SignupComp from '../main/components/Signup/SignupComp'

import ResetPass from '../main/pages/ResetPass'

const MainRouter = () => {
  const mainRoutes=[
    {
        path: '/home',
        component:<HomePage/>,
        exact: true
    },
    {
      path:'/advetisers-benfits/',
      component:<BenefitsForAdvertiserPage/>,
      exact:true
    },
    {
      path:'/forgot-password',  
      component:<ForgotPass/>,
      exact:true

    },{
      path:'/login',
      component:<LoginComp/>,

    },
    {
      path:'/reset-password',
      component:<ResetPass/>,

      exact:true
    },{
      path:'/signup',
      component:<SignupComp/>,
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