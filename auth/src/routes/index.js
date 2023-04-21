import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import ROUTE_PATHS from '../constants/routePaths'
import CustomRouter from './CustomRouter'
import useCustRoutes from './useCustRoutes'
// if use lazy load, first time will be fail, when has time, keep debugging...
/* const Signin = lazy(() => import("../components/Signin"));
const Signup = lazy(() => import("../components/Signup")); */
import Signin from '../components/Signin'
import Signup from '../components/Signup'

/* const routes = Object.entries({
  [ROUTE_PATHS.signin]: <Signin />,
  [ROUTE_PATHS.signup]: <Signup />,
}).map(([path, element]) => ({ path, element })); */

const AuthRoutes = ({ history }) => {
  console.log('20 -- marketing routes index.js react-router-dom: ', require('react-router-dom'))

  return (
    <CustomRouter history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={ROUTE_PATHS.signin} element={<Signin />} />
          <Route path={ROUTE_PATHS.signup} element={<Signup />} />
        </Routes>
      </Suspense>
    </CustomRouter>
  )
}
// {useCustRoutes(routes)}

export default AuthRoutes
