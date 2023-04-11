import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes } from 'react-router-dom'

import ROUTE_PATHS from '../constants/routePaths'
import useCustRoutes from './useCustRoutes'
const Landing = lazy(() => import("../components/Landing"));
const Pricing = lazy(() => import("../components/Pricing"));

const routes = Object.entries({
  [ROUTE_PATHS.landing]: <Landing />,
  [ROUTE_PATHS.pricing]: <Pricing />,
}).map(([path, element]) => ({ path, element }));

const MarketRoutes = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {useCustRoutes(routes)}
      </Routes>
    </Suspense>
  </Router>
)

export default MarketRoutes
