import React, { Component } from 'react';
import TopLevel from './components/NewsSection/TopLevel'
import PipersPage from './components/PipersSection/PipersPage'
import BlogPage from './components/BlogSection/BlogPage'
import Splash from './components/Splash'
import Register from './components/Register'
import PublikStoryDetail from './components/NewsSection/PublikStoryDetail'
import DcrStoryDetail from './components/NewsSection/DcrStoryDetail'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component = { Splash } />
            <Route path="/Register" component = { Register } />
            <Route path="/NewsMain" component = { TopLevel } />
            <Route path="/PipersPage" component = { PipersPage } />
            <Route path="/BlogPage" component = { BlogPage } />
            <Route path="/DcrDetails" component = { DcrStoryDetail } />
            <Route path="/PublikDetails" component = { PublikStoryDetail } />
            <Route path="/Erios" component = {() => window.location = 'http://localhost:1701' } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
