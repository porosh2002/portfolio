import React, { Component, Suspense } from 'react'
import { Switch, Route } from "react-router-dom";
import HEADER from './COMPONENTS/HEADER/HEADER.jsx'
const Home = React.lazy(() => import("./PAGES/HOME"));
export default class App extends Component {
  render() {
    return (
      <>
      <HEADER/>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route component={Error} /> */}
          </Switch>
        </Suspense>
      </>
    )
  }
}
