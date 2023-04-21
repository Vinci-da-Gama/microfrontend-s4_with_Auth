import React, { lazy, Suspense } from 'react'
import { BrowserRouter as BsRouter, Routes, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

// import MarketingMiniApp from './miniapp-compos/MarketingMiniApp'
const MarketingMiniApp = lazy(() => import("./miniapp-compos/MarketingMiniApp"));
import Header from './compos/Header'

const history = createBrowserHistory();

const App = () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'container-app'
  })

  return (
    <BsRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header />
        <Routes>
          <Route path={'/*'} element={<MarketingMiniApp />} />
        </Routes>
      </StylesProvider>
    </BsRouter>
  )
}

export default App
