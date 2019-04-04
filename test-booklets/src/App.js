import React from "react";
import { Route, Switch, Router } from "react-router";
import { history } from "./store";
import Animals from "./pages/Animals";
import Animal from "./pages/Animal";
import Layout from "./layouts";

const App = () => (
  <Router history={history}>
    <Layout>
      <Switch>
        <Route path="/" component={Animals} />
        <Route path="/animal/:id" component={Animal} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
