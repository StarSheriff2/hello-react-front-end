import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Greeting from './features/greeting/Greeting';

const App = () => (
  <>
    <Router>
      <Switch>
          <Route exact path="/" component={Greeting} />
      </Switch>
    </Router>
  </>
);

export default App;
