import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
// import { createBrowserHistory } from 'history'

const AuthMiniApp = lazy(() => import("../miniapp-compos/AuthMiniApp"));
const MarketingMiniApp = lazy(() => import("../miniapp-compos/MarketingMiniApp"));

// const history = createBrowserHistory();

const ContainerRoutes = ({onSignIn}) => (
  <Routes>
    <Route path={'/auth/*'} element={<AuthMiniApp onSignIn={onSignIn} />} />
    <Route path={'/*'} element={<MarketingMiniApp />} />
  </Routes>
)

export default ContainerRoutes
