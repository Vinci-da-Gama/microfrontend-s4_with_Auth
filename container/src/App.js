import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import MarketingMiniApp from './miniapp-compos/MarketingMiniApp'
import Header from './compos/Header'

const App = () => {
  return (
    <Router>
      <Header />
      <MarketingMiniApp />
    </Router>
  )
}

export default App
