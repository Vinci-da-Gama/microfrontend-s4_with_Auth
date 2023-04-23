import React, { lazy } from 'react'
import { Routes, Route, Redirect } from 'react-router-dom'
// import { createBrowserHistory } from 'history'

const AuthMiniApp = lazy(() => import("../miniapp-compos/AuthMiniApp"));
const MarketingMiniApp = lazy(() => import("../miniapp-compos/MarketingMiniApp"));
const DashboardMiniApp = lazy(() => import("../miniapp-compos/DashboardMiniApp"));

// const history = createBrowserHistory();

const ContainerRoutes = ({ isSignedIn, onSignIn }) => {
  return (<Routes>
    <Route path={'/auth/*'} element={<AuthMiniApp onSignIn={onSignIn} />} />
    <Route path={'/*'} element={<MarketingMiniApp />} />
    <Route path={'/dashboard/*'} element={<DashboardMiniApp />} />
  </Routes>
)}

export default ContainerRoutes
