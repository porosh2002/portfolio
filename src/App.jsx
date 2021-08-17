import React, { Component, Suspense } from 'react'
import { Switch, Route } from "react-router-dom";
import HEADER from './COMPONENTS/HEADER/HEADER.jsx'
import TOP_HEADER from './COMPONENTS/HEADER/TOP_HEADER.jsx';
const Home = React.lazy(() => import("./PAGES/HOME"));
const Services = React.lazy(() => import("./PAGES/SERVICES"));
const Works = React.lazy(() => import("./PAGES/WORKS"));
const Contact = React.lazy(() => import("./PAGES/CONTACT"));
const NotFound = React.lazy(() => import("./PAGES/404"));
export default class App extends Component {
  render() {
    return (
      <>
      <TOP_HEADER />
      <HEADER/>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/works" component={Works} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </>
    )
  }
}
