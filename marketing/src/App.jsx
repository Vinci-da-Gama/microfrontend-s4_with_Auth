import React from 'react'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import MarketRoutes from './routes'

const App = ({ history }) => {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'marketing-mini-app'
  })
  /* const [isolationLocation, setIsolationLocation] = useState(history.location);
  if (!location) {
    history.listen(({ location }) => setIsolationLocation(location));
  } */

  return (
    <StylesProvider generateClassName={generateClassName}>
      {/* location={ location } */}
      <MarketRoutes history={history} />
    </StylesProvider>
  )
}

export default App
