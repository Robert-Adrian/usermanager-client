import '../styles/App.css';
import Home from '../pages/Home';
import Register from '../pages/Register';
import React, {useState} from 'react';

function App() {
  const [routes, setRoutes] = useState("/")

  const redirect = (e) => {
    setRoutes('/adduser');
  };

  window.onhashchange = function() {
    setRoutes('/');
  };

  return (
    <div className="App">
      {routes === '/' ? <input type="button" onClick={e => redirect(e)} className="adduser-btn" value="Add user"/> : ""}
      {
        routes === '/' ? <Home /> : routes === '/adduser' ? <Register /> : ""
      }
    </div>
  );
}

export default App;
