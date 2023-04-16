import React, { useState } from 'react'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import MarketRoutes from './routes'

const App = ({ history, location }) => {
  console.log('7 -- marketing app.jsx history: ', history)
  console.log('8 -- marketing app.jsx location: ', location)
  const generateClassName = createGenerateClassName({
    productionPrefix: 'marketing-mini-app'
  })
  const [isolationLocation, setIsolationLocation] = useState(history.location);

  if (!location) {
    history.listen(({ location }) => setIsolationLocation(location));
  }

  return (
    <StylesProvider generateClassName={generateClassName}>
      <MarketRoutes location={ location } history={history} />
    </StylesProvider>
  )
}

export default App
