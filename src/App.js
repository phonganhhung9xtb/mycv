import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';

const getBasename = (path) => path.substr(0, path.lastIndexOf('/'));

function App() {
  return (
    <Router basename={getBasename(window.location.pathname)}>
      <Switch>
        <Route path='/' exact component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
