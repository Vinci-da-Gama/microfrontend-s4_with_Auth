import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import ROUTE_PATHS from '../constants/routePaths'
import CustomRouter from './CustomRouter'
import useCustRoutes from './useCustRoutes'
// if use lazy load, first time will be fail, when has time, keep debugging...
/* const Landing = lazy(() => import("../components/Landing"));
const Pricing = lazy(() => import("../components/Pricing")); */
import Landing from '../components/Landing'
import Pricing from '../components/Pricing'

const routes = Object.entries({
  [ROUTE_PATHS.landing]: <Landing />,
  [ROUTE_PATHS.pricing]: <Pricing />,
}).map(([path, element]) => ({ path, element }));

const MarketRoutes = ({ history }) => {
  console.log('19 -- marketing routes index.js react-router-dom: ', require('react-router-dom'))

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CustomRouter history={history}>
        <Routes>
            {/* <Route exact path={ROUTE_PATHS.landing} element={<Landing />} />
            <Route exact path={ROUTE_PATHS.pricing} element={<Pricing />} /> */}
            {useCustRoutes(routes)}
        </Routes>
      </CustomRouter>
    </Suspense>
  )
}


export default MarketRoutes
