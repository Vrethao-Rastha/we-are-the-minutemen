import { FETCH_PUBLIK_OCCURRENCES_COMMENTS_FAILED,
         FETCH_PUBLIK_OCCURRENCES_COMMENTS_SUCCESS,
         ADD_PUBLIK_OCCURRENCES_COMMENTS_FAILED,
         ADD_PUBLIK_OCCURRENCES_COMMENTS_SUCCESS,
         DELETE_PUBLIK_OCCURRENCES_COMMENTS_FAILED,
         DELETE_PUBLIK_OCCURRENCES_COMMENTS_SUCCESS,
         PUT_PUBLIK_OCCURRENCES_COMMENTS_FAILED,
         PUT_PUBLIK_OCCURRENCES_COMMENTS_SUCCESS,
} from '../actions'

  const initialState = []

  export default (state = initialState, action) => {
    switch(action.type) {
      case FETCH_PUBLIK_OCCURRENCES_COMMENTS_SUCCESS:
        return [...action.payload]
      case FETCH_PUBLIK_OCCURRENCES_COMMENTS_FAILED:
        return action.payload
      case ADD_PUBLIK_OCCURRENCES_COMMENTS_SUCCESS:
        return [...state, action.payload]
      case ADD_PUBLIK_OCCURRENCES_COMMENTS_FAILED:
        return action.payload
      case DELETE_PUBLIK_OCCURRENCES_COMMENTS_SUCCESS:
        let deletedStory = action.payload
        return state.filter(message => message.id !== deletedStory.id)
      case DELETE_PUBLIK_OCCURRENCES_COMMENTS_FAILED:
        return action.payload
      case PUT_PUBLIK_OCCURRENCES_COMMENTS_SUCCESS:
        return [...state, action.payload]
      case PUT_PUBLIK_OCCURRENCES_COMMENTS_FAILED:
        return action.payload
      default:
        return state
    }
  }
