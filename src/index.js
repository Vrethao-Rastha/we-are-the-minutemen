import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import './index.css';
import App from './App';
import { fetchUser, fetchAbout, fetchDcrStories, fetchPublikStories, fetchPiperStories, fetchBlogStories, fetchMainStory, fetchDcrComments, fetchPublikComments, fetchPiperComments, fetchMainStoryComments, fetchBlogSingle } from './redux/actions'

let newStore = store()
//newStore.dispatch(fetchBlogSingle())
//newStore.dispatch(fetchAbout())
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
