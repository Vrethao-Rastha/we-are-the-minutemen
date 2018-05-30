import React, { Component } from 'react';
import NewsMain from './components/NewsSection/NewsMain'
import PipersPage from './components/PipersSection/PipersPage'
import BlogPage from './components/BlogSection/BlogPage'
import Erios from './components/Erios/Erios'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Login from './components/Login'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component = { Login } />
            <Route path="/NewsMain" component = { NewsMain } />
            <Route path="/PipersPage" component = { PipersPage } />
            <Route path="/BlogPage" component = { BlogPage } />
            <Route path="/Erios" component = { Erios } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
