import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const MarketingMiniApp = lazy(() => import("../miniapp-compos/MarketingMiniApp"));

const ContainerRoutes = () => (
  <Routes>
    <Route path={'/*'} element={<MarketingMiniApp />} />
  </Routes>
)

export default ContainerRoutes
