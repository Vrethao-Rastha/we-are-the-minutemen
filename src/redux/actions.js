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
export const FETCH_DCR_SINGLE_SUCCESS ='FETCH_DCR_SINGLE_SUCCESS'
export const FETCH_DCR_SINGLE_FAILED ='FETCH_DCR_SINGLE_FAILED'

//DCR COMMENTS FUNCTIONALITY
export const FETCH_DCR_COMMENTS_FAILED = 'FETCH_DCR_COMMENTS_FAILED'
export const FETCH_DCR_COMMENTS_SUCCESS = 'FETCH_DCR_COMMENTS_SUCCESS'
export const ADD_DCR_COMMENTS_FAILED = 'ADD_DCR_COMMENTS_FAILED'
export const ADD_DCR_COMMENTS_SUCCESS = 'ADD_DCR_COMMENTS_SUCCESS'
export const DELETE_DCR_COMMENTS_FAILED = 'DELETE_DCR_COMMENTS_FAILED'
export const DELETE_DCR_COMMENTS_SUCCESS = 'DELETE_DCR_COMMENTS_SUCCESS'
export const PUT_DCR_COMMENTS_FAILED = 'PUT_DCR_COMMENTS_FAILED'
export const PUT_DCR_COMMENTS_SUCCESS = 'PUT_DCR_COMMENTS_SUCCESS'

//PUBLIK OCCURRENCES SECTION
export const FETCH_PUBLIK_OCCURRENCES_STORIES_FAILED = 'FETCH_PUBLIK_OCCURRENCES_STORIES_FAILED'
export const FETCH_PUBLIK_OCCURRENCES_STORIES_SUCCESS = 'FETCH_PUBLIK_OCCURRENCES_STORIES_SUCCESS'
export const ADD_PUBLIK_OCCURRENCES_STORIES_FAILED = 'ADD_PUBLIK_OCCURRENCES_STORIES_FAILED'
export const ADD_PUBLIK_OCCURRENCES_STORIES_SUCCESS = 'ADD_PUBLIK_OCCURRENCES_STORIES_SUCCESS'
export const DELETE_PUBLIK_OCCURRENCES_STORIES_FAILED = 'DELETE_PUBLIK_OCCURRENCES_STORIES_FAILED'
export const DELETE_PUBLIK_OCCURRENCES_STORIES_SUCCESS = 'DELETE_PUBLIK_OCCURRENCES_STORIES_SUCCESS'
export const PUT_PUBLIK_OCCURRENCES_STORIES_FAILED = 'PUT_PUBLIK_OCCURRENCES_STORIES_FAILED'
export const PUT_PUBLIK_OCCURRENCES_STORIES_SUCCESS = 'PUT_PUBLIK_OCCURRENCES_STORIES_SUCCESS'
export const FETCH_PUBLIK_SINGLE_SUCCESS ='FETCH_PUBLIK_SINGLE_SUCCESS'
export const FETCH_PUBLIK_SINGLE_FAILED ='FETCH_PUBLIK_SINGLE_FAILED'
//PUBLIK OCCURRENCES COMMENT FUNCTIONALITY
export const FETCH_PUBLIK_OCCURRENCES_COMMENTS_FAILED = 'FETCH_PUBLIK_OCCURRENCES_COMMENTS_FAILED'
export const FETCH_PUBLIK_OCCURRENCES_COMMENTS_SUCCESS = 'FETCH_PUBLIK_OCCURRENCES_COMMENTS_SUCCESS'
export const ADD_PUBLIK_OCCURRENCES_COMMENTS_FAILED = 'ADD_PUBLIK_OCCURRENCES_COMMENTS_FAILED'
export const ADD_PUBLIK_OCCURRENCES_COMMENTS_SUCCESS = 'ADD_PUBLIK_OCCURRENCES_COMMENTS_SUCCESS'
export const DELETE_PUBLIK_OCCURRENCES_COMMENTS_FAILED = 'DELETE_PUBLIK_OCCURRENCES_COMMENTS_FAILED'
export const DELETE_PUBLIK_OCCURRENCES_COMMENTS_SUCCESS = 'DELETE_PUBLIK_OCCURRENCES_COMMENTS_SUCCESS'
export const PUT_PUBLIK_OCCURRENCES_COMMENTS_FAILED = 'PUT_PUBLIK_OCCURRENCES_COMMENTS_FAILED'
export const PUT_PUBLIK_OCCURRENCES_COMMENTS_SUCCESS = 'PUT_PUBLIK_OCCURRENCES_COMMENTS_SUCCESS'

//PIPER FIELD REPORTING SECTION
export const FETCH_PIPER_STORIES_FAILED = 'FETCH_PIPER_STORIES_FAILED'
export const FETCH_PIPER_STORIES_SUCCESS = 'FETCH_PIPER_STORIES_SUCCESS'
export const ADD_PIPER_STORIES_FAILED = 'ADD_PIPER_STORIES_FAILED'
export const ADD_PIPER_STORIES_SUCCESS = 'ADD_PIPER_STORIES_SUCCESS'
export const DELETE_PIPER_STORIES_FAILED = 'DELETE_PIPER_STORIES_FAILED'
export const DELETE_PIPER_STORIES_SUCCESS = 'DELETE_PIPER_STORIES_SUCCESS'
export const PUT_PIPER_STORIES_FAILED = 'PUT_PIPER_STORIES_FAILED'
export const PUT_PIPER_STORIES_SUCCESS = 'PUT_PIPER_STORIES_SUCCESS'
//PIPER FIELD REPORTS COMMENTS
export const FETCH_PIPER_COMMENTS_FAILED = 'FETCH_PIPER_COMMENTS_FAILED'
export const FETCH_PIPER_COMMENTS_SUCCESS = 'FETCH_PIPER_COMMENTS_SUCCESS'
export const ADD_PIPER_COMMENTS_FAILED = 'ADD_PIPER_COMMENTS_FAILED'
export const ADD_PIPER_COMMENTS_SUCCESS = 'ADD_PIPER_COMMENTS_SUCCESS'
export const DELETE_PIPER_COMMENTS_FAILED = 'DELETE_PIPER_COMMENTS_FAILED'
export const DELETE_PIPER_COMMENTS_SUCCESS = 'DELETE_PIPER_COMMENTS_SUCCESS'
export const PUT_PIPER_COMMENTS_FAILED = 'PUT_PIPER_COMMENTS_FAILED'
export const PUT_PIPER_COMMENTS_SUCCESS = 'PUT_PIPER_COMMENTS_SUCCESS'

//MAIN STORIES
export const FETCH_MAIN_STORY_FAILED = 'FETCH_MAIN_STORY_FAILED'
export const FETCH_MAIN_STORY_SUCCESS = 'FETCH_MAIN_STORY_SUCCESS'
export const ADD_MAIN_STORY_FAILED = 'ADD_MAIN_STORY_FAILED'
export const ADD_MAIN_STORY_SUCCESS = 'ADD_MAIN_STORY_SUCCESS'
export const DELETE_MAIN_STORY_FAILED = 'DELETE_MAIN_STORY_FAILED'
export const DELETE_MAIN_STORY_SUCCESS = 'DELETE_MAIN_STORY_SUCCESS'
export const PUT_MAIN_STORY_FAILED = 'PUT_MAIN_STORY_FAILED'
export const PUT_MAIN_STORY_SUCCESS = 'PUT_MAIN_STORY_SUCCESS'
export const FETCH_MAIN_SINGLE_SUCCESS ='FETCH_MAIN_SINGLE_SUCCESS'
export const FETCH_MAIN_SINGLE_FAILED ='FETCH_MAIN_SINGLE_FAILED'
//MAIN STORY COMMENTS
export const FETCH_MAIN_STORY_COMMENTS_FAILED = 'FETCH_MAIN_STORY_COMMENTS_FAILED'
export const FETCH_MAIN_STORY_COMMENTS_SUCCESS = 'FETCH_MAIN_STORY_COMMENTS_SUCCESS'
export const ADD_MAIN_STORY_COMMENTS_FAILED = 'ADD_MAIN_STORY_COMMENTS_FAILED'
export const ADD_MAIN_STORY_COMMENTS_SUCCESS = 'ADD_MAIN_STORY_COMMENTS_SUCCESS'
export const DELETE_MAIN_STORY_COMMENTS_FAILED = 'DELETE_MAIN_STORY_COMMENTS_FAILED'
export const DELETE_MAIN_STORY_COMMENTS_SUCCESS = 'DELETE_MAIN_STORY_COMMENTS_SUCCESS'
export const PUT_MAIN_STORY_COMMENTS_FAILED = 'PUT_MAIN_STORY_COMMENTS_FAILED'
export const PUT_MAIN_STORY_COMMENTS_SUCCESS = 'PUT_MAIN_STORY_COMMENTS_SUCCESS'

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
//CREATE USER
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
export const CREATE_USER_FAILED = 'CREATE_USER_FAILED'
//GET ABOUT PAGE INFO
export const FETCH_ABOUT_SUCCESS = 'FETCH_ABOUT_SUCCESS'
export const FETCH_ABOUT_FAILED = 'FETCH_ABOUT_FAILED'

export const DCR_REDIRECT_PENDING = 'REDIRECT_PENDING'
export const PUBLIK_REDIRECT_PENDING = 'REDIRECT_PENDING'
export const MAIN_REDIRECT_PENDING = 'REDIRECT_PENDING'



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

  export const fetchDcrSingle = (id, history) => {
    console.log('fire 2', id, history)
    return async dispatch => {
      try{
        dispatch({type: DCR_REDIRECT_PENDING})
      console.log('im in the dcr dispatch!')
      let res = await fetch(`http://localhost:3000/api/v1/dc_rnews/${id}`)
      let userObj = await res.json()
      dispatch({
        type: FETCH_DCR_SINGLE_SUCCESS,
        payload: userObj.data
      })
      history.push(`/DcrDetails/${id}`)
    }catch(err){
     dispatch({
        type: FETCH_DCR_SINGLE_FAILED,
        payload: err
      })
    }
  }
}

  export const fetchDcrComments = () => {
    return dispatch => {
      axios.get('http://localhost:3000/api/v1/dcr_comments/')
      .then(res => dispatch({
        type: FETCH_DCR_COMMENTS_SUCCESS,
        payload: res.data.data
      }))
      .catch(err => dispatch({
        type: FETCH_DCR_COMMENTS_FAILED,
        payload: err
      }))
    }
  }

  export const addDcrComments = (name, comment, avatar) => {
    return dispatch => {
      axios.post('http://localhost:3000/api/v1/dcr_comments/', {name, comment, avatar})
      .then(res => dispatch({
        type: ADD_DCR_COMMENTS_SUCCESS,
        payload: res.data.data
      }))
      .catch(err => dispatch({
        type: ADD_DCR_COMMENTS_FAILED,
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

  export const fetchPublikSingle = (id, history) => {
    console.log('fire 2', id, history)
    return async dispatch => {
      try{
        dispatch({type: PUBLIK_REDIRECT_PENDING})
      console.log('im in publik the dispatch!')
      let res = await fetch(`http://localhost:3000/api/v1/publik_news/${id}`)
      let userObj = await res.json()
      dispatch({
        type: FETCH_PUBLIK_SINGLE_SUCCESS,
        payload: userObj.data
      })
      history.push(`/PublikDetails/${id}`)
    }catch(err){
     dispatch({
        type: FETCH_PUBLIK_SINGLE_FAILED,
        payload: err
      })
    }
  }
}

  export const fetchPublikComments = () => {
    return dispatch => {
      axios.get('http://localhost:3000/api/v1/publik_comments/')
      .then(res => dispatch({
        type: FETCH_PUBLIK_OCCURRENCES_COMMENTS_SUCCESS,
        payload: res.data.data
      }))
      .catch(err => dispatch({
        type: FETCH_PUBLIK_OCCURRENCES_COMMENTS_FAILED,
        payload: err
      }))
    }
  }

  export const addPublikComments = (name, comment, avatar) => {
    return dispatch => {
      axios.post('http://localhost:3000/api/v1/publik_comments/', {name, comment, avatar})
      .then(res => dispatch({
        type: ADD_PUBLIK_OCCURRENCES_COMMENTS_SUCCESS,
        payload: res.data.data
      }))
      .catch(err => dispatch({
        type: ADD_PUBLIK_OCCURRENCES_COMMENTS_FAILED,
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

  export const fetchPiperComments = () => {
    return dispatch => {
      axios.get('http://localhost:3000/api/v1/piper_comments/')
      .then(res => dispatch({
        type: FETCH_PIPER_COMMENTS_SUCCESS,
        payload: res.data.data
      }))
      .catch(err => dispatch({
        type: FETCH_PIPER_COMMENTS_FAILED,
        payload: err
      }))
    }
  }

  export const addPiperComments = (name, comment, avatar) => {
    return dispatch => {
      axios.post('http://localhost:3000/api/v1/piper_comments/', {name, comment, avatar})
      .then(res => dispatch({
        type: ADD_PIPER_COMMENTS_SUCCESS,
        payload: res.data.data
      }))
      .catch(err => dispatch({
        type: ADD_PIPER_COMMENTS_FAILED,
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

  export const fetchMainSingle = (id, history) => {
    console.log('fire 2', id, history)
    return async dispatch => {
      try{
        dispatch({type: MAIN_REDIRECT_PENDING})
      console.log('im in publik the dispatch!')
      let res = await fetch(`http://localhost:3000/api/v1/main_story/${id}`)
      let userObj = await res.json()
      dispatch({
        type: FETCH_MAIN_SINGLE_SUCCESS,
        payload: userObj.data
      })
      history.push(`/MainDetails/${id}`)
    }catch(err){
     dispatch({
        type: FETCH_MAIN_SINGLE_FAILED,
        payload: err
      })
    }
  }
}

  export const fetchMainStoryComments = () => {
    return dispatch => {
      axios.get('http://localhost:3000/api/v1/main_story_comments/')
      .then(res => dispatch({
        type: FETCH_MAIN_STORY_COMMENTS_SUCCESS,
        payload: res.data.data
      }))
      .catch(err => dispatch({
        type: FETCH_MAIN_STORY_COMMENTS_FAILED,
        payload: err
      }))
    }
  }

  export const addMainStoryComments = (name, comment, avatar) => {
    return dispatch => {
      axios.post('http://localhost:3000/api/v1/main_story_comments/', {name, comment, avatar})
      .then(res => dispatch({
        type: ADD_MAIN_STORY_COMMENTS_SUCCESS,
        payload: res.data.data
      }))
      .catch(err => dispatch({
        type: ADD_MAIN_STORY_COMMENTS_FAILED,
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
