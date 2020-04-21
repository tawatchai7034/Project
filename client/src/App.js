import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import _A1 from './pages/A1';
import _A1copy from './pages/A1_copy';
import _HomeWork from './pages/HomeWork_1';

function App() {
  return (
    <div >
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={_A1} />
          <Route path="/homesick" component={_A1copy} />
          <Route path="/homeWork" component={_HomeWork} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
