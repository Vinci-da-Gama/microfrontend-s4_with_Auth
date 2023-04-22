import React from 'react'
import { BrowserRouter as BsRouter } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

// import MarketingMiniApp from './miniapp-compos/MarketingMiniApp'
import Header from './compos/Header'
import ContainerRoutes from './routes'

const App = () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'container-app'
  })

  return (
    <BsRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header />
        <ContainerRoutes />
      </StylesProvider>
    </BsRouter>
  )
}

export default App
