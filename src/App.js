import React, { Component } from 'react';
import TopLevel from './components/NewsSection/TopLevel'
import PipersPage from './components/PipersSection/PipersPage'
import BlogPage from './components/BlogSection/BlogPage'
import Splash from './components/Splash'
import Register from './components/Register'
import LoginFail from './components/LoginFail'
import PublikStoryDetail from './components/NewsSection/PublikStoryDetail'
import DcrStoryDetail from './components/NewsSection/DcrStoryDetail'
import MainStoryDetail from './components/NewsSection/MainStoryDetail'
import CheckAuth from './components/CheckAuth'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>

          <Switch>
            <Route exact path="/" component = { Splash } />
            <Route path="/Register" component = { Register } />
            <Route path="/LoginFail" component = { LoginFail } />
            <Route path="/NewsMain" component = { CheckAuth(TopLevel) } />
            <Route path="/PipersPage" component = { CheckAuth(PipersPage) } />
            <Route path="/BlogPage" component = { CheckAuth(BlogPage) } />
            <Route path="/DcrDetails" component = { CheckAuth(DcrStoryDetail) } />
            <Route path="/PublikDetails" component = { CheckAuth(PublikStoryDetail) } />
            <Route path="/MainDetails" component = { CheckAuth(MainStoryDetail) } />
            <Route path="/Erios" component = {() => window.location = 'http://localhost:1701' } />
          </Switch>
      </Router>
    );
  }
}

export default App;
