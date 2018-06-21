import { FETCH_MAIN_POST_COMMENTS_FAILED,
FETCH_MAIN_POST_COMMENTS_SUCCESS,
ADD_MAIN_POST_COMMENTS_FAILED,
ADD_MAIN_POST_COMMENTS_SUCCESS,
DELETE_MAIN_POST_COMMENTS_FAILED,
DELETE_MAIN_POST_COMMENTS_SUCCESS,
FETCH_MAIN_SINGLE_POST_COMMENTS_SUCCESS,
FETCH_MAIN_SINGLE_POST_COMMENTS_FAILED,

} from '../Actions/MainPostCommentsActions'

  const initialState = []

  export default (state = initialState, action) => {
    switch(action.type) {
      case FETCH_MAIN_POST_COMMENTS_SUCCESS:
        return [...action.payload]
      case FETCH_MAIN_POST_COMMENTS_FAILED:
        return action.payload
      case ADD_MAIN_POST_COMMENTS_SUCCESS:
        return [...state, action.payload]
      case ADD_MAIN_POST_COMMENTS_FAILED:
        return action.payload
      case DELETE_MAIN_POST_COMMENTS_SUCCESS:
        let deletedStory = action.payload
        return state.filter(message => message.id !== deletedStory.id)
      case DELETE_MAIN_POST_COMMENTS_FAILED:
        return action.payload
      default:
        return state
    }
  }
