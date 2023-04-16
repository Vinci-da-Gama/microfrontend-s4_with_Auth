import React from 'react'
import { BrowserRouter as BsRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import MarketingMiniApp from './miniapp-compos/MarketingMiniApp'
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
        <MarketingMiniApp browserHistory={history} />
      </StylesProvider>
    </BsRouter>
  )
}

export default App
