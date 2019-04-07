import React from "react";
import { Route, Switch, Router } from "react-router";
import { history } from "./store";
import Animals from "./pages/Animals";
import Layout from "./layouts";
import AnimalPage from "./pages/Animal";

const App = () => (
  <Router history={history}>
    <Layout>
      <Switch>
        <Route path="/animal/:id" component={AnimalPage} />
        <Route path="/" component={Animals} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
