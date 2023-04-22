import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
// import { createBrowserHistory } from 'history'

const AuthMiniApp = lazy(() => import("../miniapp-compos/AuthMiniApp"));
const MarketingMiniApp = lazy(() => import("../miniapp-compos/MarketingMiniApp"));

// const history = createBrowserHistory();

const ContainerRoutes = () => (
  <Suspense fallback={<div>container - Loading...</div>}>
    <Routes>
      <Route path={'/auth/*'} element={<AuthMiniApp />} />
      <Route path={'/*'} element={<MarketingMiniApp />} />
    </Routes>
  </Suspense>
)

export default ContainerRoutes
