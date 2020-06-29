import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from "./views/Home";
import Demo from "./views/Demo";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
    <Switch>
      <Route exact path="/" component={Home}>
        {/* <Home/> */}
      </Route>

      <Route path='/demo'>
        <Demo/>
      </Route>
    </Switch>

    </Router>
    </div>
  )
  ;
}

export default App;









