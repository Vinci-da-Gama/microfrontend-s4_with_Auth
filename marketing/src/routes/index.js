import React, { lazy, Suspense } from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Router, Routes, Route } from 'react-router-dom'
// todo: use Router not BrowserRouter

import ROUTE_PATHS from '../constants/routePaths'
import CustomRouter from './CustomRouter'
// import useCustRoutes from './useCustRoutes'
/* const Landing = lazy(() => import("../components/Landing"));
const Pricing = lazy(() => import("../components/Pricing")); */
import Landing from '../components/Landing'
import Pricing from '../components/Pricing'

/* const routes = Object.entries({
  [ROUTE_PATHS.landing]: <Landing />,
  [ROUTE_PATHS.pricing]: <Pricing />,
}).map(([path, element]) => ({ path, element })); */

const MarketRoutes = ({ history, location }) => {
  console.log('19 -- marketing route index.jsx history: ', history)
  console.log('20 -- react-router-dom: ', require('react-router-dom'))

  return(
    // <Router location={location} history={history} navigationType={history.action}>
    <CustomRouter history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path={ROUTE_PATHS.landing} element={<Landing />} />
          <Route path={ROUTE_PATHS.pricing} element={<Pricing />} />
        </Routes>
      </Suspense>
    </CustomRouter>
  )
}

// {useCustRoutes(routes)}

export default MarketRoutes
