import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdvertiserDashbaordLayout from './../features/AdvertiserDashboard/components/Layout/index';
import CreateCampaign from '../features/AdvertiserDashboard/pages/CreateCampaign';
import MyCampaign from '../features/AdvertiserDashboard/pages/MyCampaign'

import HelpCenter from '../features/AdvertiserDashboard/pages/HelpCenter'
import AddFunds from '../features/AdvertiserDashboard/pages/AddFunds'
import MyCampaign from './../features/AdvertiserDashboard/pages/MyCampaign';
import Overview from '../features/AdvertiserDashboard/pages/Overview';

const AdvertiserDashboardRouter = () => {
  const advertiserDashboardRoutes = [
    {
      path: 'campaign/add',
      component: <CreateCampaign />,
      exact: true
    },
    {
      path: 'help-center',
      component: <HelpCenter />,
      exact: true
    },
    {
      path: 'add-funds',
      component: <AddFunds />,
      exact: true
    },
    {
      path: 'campaigns',
      component: <MyCampaign />,
      exact: true
    },
    {
      path: 'overview',
      component: <Overview />,
      exact: true
    }
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