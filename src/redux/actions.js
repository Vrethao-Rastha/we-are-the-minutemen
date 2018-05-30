import axios from 'axios'
//DIAMOND CITY NEWS SECTION
export const FETCH_DCR_STORIES_FAILED = 'FETCH_DCR_STORIES_FAILED'
export const FETCH_DCR_STORIES_SUCCESS = 'FETCH_DCR_STORIES_SUCCESS'
export const ADD_DCR_STORIES_FAILED = 'ADD_DCR_STORIES_FAILED'
export const ADD_DCR_STORIES_SUCCESS = 'ADD_DCR_STORIES_SUCCESS'
export const DELETE_DCR_STORIES_FAILED = 'DELETE_DCR_STORIES_FAILED'
export const DELETE_DCR_STORIES_SUCCESS = 'DELETE_DCR_STORIES_SUCCESS'
export const PUT_DCR_STORIES_FAILED = 'PUT_DCR_STORIES_FAILED'
export const PUT_DCR_STORIES_SUCCESS = 'PUT_DCR_STORIES_SUCCESS'
//PUBLIK OCCURRENCES SECTION
export const FETCH_PUBLIK_OCCURRENCES_STORIES_FAILED = 'FETCH_PUBLIK_OCCURRENCES_STORIES_FAILED'
export const FETCH_PUBLIK_OCCURRENCES_STORIES_SUCCESS = 'FETCH_PUBLIK_OCCURRENCES_STORIES_SUCCESS'
export const ADD_PUBLIK_OCCURRENCES_STORIES_FAILED = 'ADD_PUBLIK_OCCURRENCES_STORIES_FAILED'
export const ADD_PUBLIK_OCCURRENCES_STORIES_SUCCESS = 'ADD_PUBLIK_OCCURRENCES_STORIES_SUCCESS'
export const DELETE_PUBLIK_OCCURRENCES_STORIES_FAILED = 'DELETE_PUBLIK_OCCURRENCES_STORIES_FAILED'
export const DELETE_PUBLIK_OCCURRENCES_STORIES_SUCCESS = 'DELETE_PUBLIK_OCCURRENCES_STORIES_SUCCESS'
export const PUT_PUBLIK_OCCURRENCES_STORIES_FAILED = 'PUT_PUBLIK_OCCURRENCES_STORIES_FAILED'
export const PUT_PUBLIK_OCCURRENCES_STORIES_SUCCESS = 'PUT_PUBLIK_OCCURRENCES_STORIES_SUCCESS'
//PIPER FIELD REPORTING SECTION
export const FETCH_PIPER_STORIES_FAILED = 'FETCH_PIPER_STORIES_FAILED'
export const FETCH_PIPER_STORIES_SUCCESS = 'FETCH_PIPER_STORIES_SUCCESS'
export const ADD_PIPER_STORIES_FAILED = 'ADD_PIPER_STORIES_FAILED'
export const ADD_PIPER_STORIES_SUCCESS = 'ADD_PIPER_STORIES_SUCCESS'
export const DELETE_PIPER_STORIES_FAILED = 'DELETE_PIPER_STORIES_FAILED'
export const DELETE_PIPER_STORIES_SUCCESS = 'DELETE_PIPER_STORIES_SUCCESS'
export const PUT_PIPER_STORIES_FAILED = 'PUT_PIPER_STORIES_FAILED'
export const PUT_PIPER_STORIES_SUCCESS = 'PUT_PIPER_STORIES_SUCCESS'
//MAIN STORIES
export const FETCH_MAIN_STORY_FAILED = 'FETCH_MAIN_STORY_FAILED'
export const FETCH_MAIN_STORY_SUCCESS = 'FETCH_MAIN_STORY_SUCCESS'
export const ADD_MAIN_STORY_FAILED = 'ADD_MAIN_STORY_FAILED'
export const ADD_MAIN_STORY_SUCCESS = 'ADD_MAIN_STORY_SUCCESS'
export const DELETE_MAIN_STORY_FAILED = 'DELETE_MAIN_STORY_FAILED'
export const DELETE_MAIN_STORY_SUCCESS = 'DELETE_MAIN_STORY_SUCCESS'
export const PUT_MAIN_STORY_FAILED = 'PUT_MAIN_STORY_FAILED'
export const PUT_MAIN_STORY_SUCCESS = 'PUT_MAIN_STORY_SUCCESS'

//BLOG OF THE GENERAL
export const FETCH_BLOG_STORIES_FAILED = 'FETCH_BLOG_STORIES_FAILED'
export const FETCH_BLOG_STORIES_SUCCESS = 'FETCH_BLOG_STORIES_SUCCESS'
export const ADD_BLOG_STORIES_FAILED = 'ADD_BLOG_STORIES_FAILED'
export const ADD_BLOG_STORIES_SUCCESS = 'ADD_BLOG_STORIES_SUCCESS'
export const DELETE_BLOG_STORIES_FAILED = 'DELETE_BLOG_STORIES_FAILED'
export const DELETE_BLOG_STORIES_SUCCESS = 'DELETE_BLOG_STORIES_SUCCESS'
export const PUT_BLOG_STORIES_FAILED = 'PUT_BLOG_STORIES_FAILED'
export const PUT_BLOG_STORIES_SUCCESS = 'PUT_BLOG_STORIES_SUCCESS'
//GET USER
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAILED = 'FETCH_USER_FAILED'
//GET ABOUT PAGE INFO
export const FETCH_ABOUT_SUCCESS = 'FETCH_ABOUT_SUCCESS'
export const FETCH_ABOUT_FAILED = 'FETCH_ABOUT_FAILED'

  export const fetchUser = () => {
    return dispatch => {
      axios.get('http://localhost:3000/api/v1/users')
      .then(res => dispatch({
        type: FETCH_USER_SUCCESS,
        payload: res.data.data
      }))
      .catch(err => dispatch({
        type: FETCH_USER_FAILED,
        payload: err
      }))
    }
  }

  export const fetchAbout = () => {
      return dispatch => {
        axios.get(`http://localhost:3000/api/v1/about`)
          .then(res => dispatch({
            type: FETCH_ABOUT_SUCCESS,
            payload: res.data.data
          }))
          .catch(err => dispatch({
            type: FETCH_ABOUT_FAILED,
            payload: err
          }))
      }
    }

  export const fetchDcrStories = () => {
    return dispatch => {
      axios.get('http://localhost:3000/api/v1/dc_rnews/')
      .then(res => dispatch({
        type: FETCH_DCR_STORIES_SUCCESS,
        payload: res.data.data
      }))
      .catch(err => dispatch({
        type: FETCH_DCR_STORIES_FAILED,
        payload: err
      }))
    }
  }

  export const fetchPublikStories = () => {
    return dispatch => {
      axios.get('http://localhost:3000/api/v1/publik_news/')
      .then(res => dispatch({
        type: FETCH_PUBLIK_OCCURRENCES_STORIES_SUCCESS,
        payload: res.data.data
      }))
      .catch(err => dispatch({
        type: FETCH_PUBLIK_OCCURRENCES_STORIES_FAILED,
        payload: err
      }))
    }
  }

  export const fetchPiperStories = () => {
    return dispatch => {
      axios.get('http://localhost:3000/api/v1/piper_news/')
      .then(res => dispatch({
        type: FETCH_PIPER_STORIES_SUCCESS,
        payload: res.data.data
      }))
      .catch(err => dispatch({
        type: FETCH_PIPER_STORIES_FAILED,
        payload: err
      }))
    }
  }

  export const fetchBlogStories = () => {
    return dispatch => {
      axios.get('http://localhost:3000/api/v1/blogs/')
      .then(res => dispatch({
        type: FETCH_BLOG_STORIES_SUCCESS,
        payload: res.data.data
      }))
      .catch(err => dispatch({
        type: FETCH_BLOG_STORIES_FAILED,
        payload: err
      }))
    }
  }

  export const fetchMainStory = () => {
    return dispatch => {
      axios.get('http://localhost:3000/api/v1/main_story/')
      .then(res => dispatch({
        type: FETCH_MAIN_STORY_SUCCESS,
        payload: res.data.data
      }))
      .catch(err => dispatch({
        type: FETCH_MAIN_STORY_FAILED,
        payload: err
      }))
    }
  }
