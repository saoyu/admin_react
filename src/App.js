import React from 'react';
import './App.scss';
import { Link, BrowserRouter as Router, Route, HashRouter, Switch } from 'react-router-dom';
import Home from "./page/home";
import MyLayout from "./component/layout";

function App() {
  return (
    <Router>
      <MyLayout>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </MyLayout>
    </Router>
  );
}

export default App;
