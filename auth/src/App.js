import React from 'react'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import AuthRoutes from './routes'

const App = ({ onSignIn, history }) => {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'auth-mini-app'
  })
  /* const [isolationLocation, setIsolationLocation] = useState(history.location);
  if (!location) {
    history.listen(({ location }) => setIsolationLocation(location));
  } */

  return (
    <StylesProvider generateClassName={generateClassName}>
      <AuthRoutes onSignIn={onSignIn} history={history} />
    </StylesProvider>
  )
}

export default App
