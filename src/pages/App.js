import '../styles/App.css';
import Home from '../pages/Home';
import Register from '../pages/Register';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/adduser">
              <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
