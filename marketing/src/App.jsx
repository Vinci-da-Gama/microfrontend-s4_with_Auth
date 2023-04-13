import React from 'react'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import MarketRoutes from './routes'

const App = () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'marketing-mini-app'
  })

  return (
    <StylesProvider generateClassName={generateClassName}>
      <MarketRoutes />
    </StylesProvider>
  )
}

export default App
