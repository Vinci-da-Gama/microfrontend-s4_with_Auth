import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import MarketingMiniApp from './miniapp-compos/MarketingMiniApp'
import Header from './compos/Header'

const App = () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'container-app'
  })

  return (
    <Router>
      <StylesProvider generateClassName={generateClassName}>
        <Header />
        <MarketingMiniApp />
      </StylesProvider>
    </Router>
  )
}

export default App
