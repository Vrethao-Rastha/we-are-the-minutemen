import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import './index.css';
import App from './App';
import { fetchAbout } from './redux/Actions/AboutActions'
import { fetchPiperStories, fetchPiperComments, } from './redux/Actions/PiperActions'
import { fetchPublikStories, fetchPublikComments } from './redux/Actions/PublikActions'
import { fetchMainStoryComments, fetchMainStory } from './redux/Actions/MainActions'
import { fetchDcrStories, fetchDcrComments } from './redux/Actions/DcrActions'
import { fetchBlogStories, fetchBlogSingle } from './redux/Actions/BlogActions'

let newStore = store()
//newStore.dispatch(fetchBlogSingle())
newStore.dispatch(fetchAbout())
newStore.dispatch(fetchDcrStories())
newStore.dispatch(fetchPublikStories())
newStore.dispatch(fetchPiperStories())
newStore.dispatch(fetchMainStory())
newStore.dispatch(fetchDcrComments())
newStore.dispatch(fetchPublikComments())
newStore.dispatch(fetchPiperComments())
newStore.dispatch(fetchMainStoryComments())
newStore.dispatch(fetchBlogStories())


ReactDOM.render(
  <Provider store={newStore}>
    <App />
  </Provider>,
   document.getElementById('root'));
