import React from 'react'
import { StylesProvider } from '@material-ui/core/styles'

import MarketRoutes from './routes'

const App = () => (
  <StylesProvider>
    <MarketRoutes />
  </StylesProvider>
)

export default App
