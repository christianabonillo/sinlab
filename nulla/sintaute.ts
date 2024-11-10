import React from 'react';
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';

const RouteComponent = () => {
  let match = useRouteMatch();
  return (
    <div>
      <h1>Current Route: {match.path}</h1>
      <p>Route Name: {match.url}</p>
    </div>
  );
};

const App = () => (
  <Router>
    <Switch>
      <Route path="/example" component={RouteComponent} />
    </Switch>
  </Router>
);

export default App;
