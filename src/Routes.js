import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
const People = React.lazy(() => import('pages/People'))
const HelloWorld = React.lazy(() => import('pages/HelloWorld'))


const Routes = props => (
  <Suspense fallback="Loading...">
    <Switch>
      <Route
        exact
        path='/People'
        component={routerProps => <People {...routerProps} {...props} />} />

      <Route
        exact
        path='/HelloWorld'
        component={routerProps => <HelloWorld {...routerProps} {...props} />} />
    </Switch>
  </Suspense>
)

export default Routes
