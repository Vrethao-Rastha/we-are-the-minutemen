import { FETCH_BLOG_STORIES_FAILED,
         FETCH_BLOG_STORIES_SUCCESS,
         ADD_BLOG_STORIES_FAILED,
         ADD_BLOG_STORIES_SUCCESS,
         DELETE_BLOG_STORIES_FAILED,
         DELETE_BLOG_STORIES_SUCCESS,
         PUT_BLOG_STORIES_FAILED,
         PUT_BLOG_STORIES_SUCCESS,
} from '../actions'

  const initialState = []

  export default (state = initialState, action) => {
    switch(action.type) {
      case FETCH_BLOG_STORIES_SUCCESS:
        return [...action.payload]
      case FETCH_BLOG_STORIES_FAILED:
        return action.payload
      case ADD_BLOG_STORIES_SUCCESS:
        return [...state, action.payload]
      case ADD_BLOG_STORIES_FAILED:
        return action.payload
      case DELETE_BLOG_STORIES_SUCCESS:
        let deletedPost = action.payload
        return state.filter(message => message.id !== deletedPost.id)
      case DELETE_BLOG_STORIES_FAILED:
        return action.payload
      case PUT_BLOG_STORIES_SUCCESS:
        return [...state, action.payload]
      case PUT_BLOG_STORIES_FAILED:
        return action.payload
      default:
        return state
    }
  }
