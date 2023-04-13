import React from 'react'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import MarketRoutes from './routes'

const generateClassName = createGenerateClassName({
  productionPrefix: 'marketing-mini-app'
})

const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <MarketRoutes />
    </StylesProvider>
  )
}

export default App
