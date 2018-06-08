import { FETCH_BLOG_SINGLE_FAILED,
         FETCH_BLOG_SINGLE_SUCCESS,
} from '../actions'

  const initialState = []

  export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_BLOG_SINGLE_SUCCESS:
          return action.payload
        case FETCH_BLOG_SINGLE_FAILED:
          return action.payload
      default:
        return state
    }
  }
