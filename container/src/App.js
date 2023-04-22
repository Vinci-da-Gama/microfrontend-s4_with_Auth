import React, { Suspense } from 'react'
import { BrowserRouter as BsRouter } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

// import MarketingMiniApp from './miniapp-compos/MarketingMiniApp'
import Header from './compos/Header'
import Progress from './compos/Progress'
import ContainerRoutes from './routes'

const App = () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'container-app'
  })

  return (
    <BsRouter>
      <Suspense fallback={<Progress />}>
        <StylesProvider generateClassName={generateClassName}>
          <Header />
          <ContainerRoutes />
        </StylesProvider>
      </Suspense>
    </BsRouter>
  )
}

export default App
