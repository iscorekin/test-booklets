import React from "react";
import { Route, Switch, Router } from "react-router";
import { history } from "./store";
import Animals from "./pages/Animals";
import Layout from "./layouts";
import AnimalPage from "./pages/Animal";
import NoMatch from "./pages/NoMatch";

const App = () => (
  <Router history={history}>
    <Layout>
      <Switch>
        <Route path="/" exact component={Animals} />
        <Route path="/animal/:id" component={AnimalPage} />
        <Route component={NoMatch} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
