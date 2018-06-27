import axios from 'axios'
//DIAMOND CITY NEWS SECTION


//DCR COMMENTS FUNCTIONALITY


//PUBLIK OCCURRENCES SECTION

//PIPER FIELD REPORTING SECTION


//MAIN STORIES


//BLOG OF THE GENERAL


//GET USER
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAILED = 'FETCH_USER_FAILED'
//CREATE USER
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
export const CREATE_USER_FAILED = 'CREATE_USER_FAILED'
//GET ABOUT PAGE INFO





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
