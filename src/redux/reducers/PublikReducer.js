import { FETCH_PUBLIK_OCCURRENCES_STORIES_FAILED,
         FETCH_PUBLIK_OCCURRENCES_STORIES_SUCCESS,
         ADD_PUBLIK_OCCURRENCES_STORIES_FAILED,
         ADD_PUBLIK_OCCURRENCES_STORIES_SUCCESS,
         DELETE_PUBLIK_OCCURRENCES_STORIES_FAILED,
         DELETE_PUBLIK_OCCURRENCES_STORIES_SUCCESS,
         PUT_PUBLIK_OCCURRENCES_STORIES_FAILED,
         PUT_PUBLIK_OCCURRENCES_STORIES_SUCCESS,
} from '../Actions/PublikActions'

  const initialState = []

  export default (state = initialState, action) => {
    switch(action.type) {
      case FETCH_PUBLIK_OCCURRENCES_STORIES_SUCCESS:
        return [...action.payload]
      case FETCH_PUBLIK_OCCURRENCES_STORIES_FAILED:
        return action.payload
      case ADD_PUBLIK_OCCURRENCES_STORIES_SUCCESS:
        return [...state, action.payload]
      case ADD_PUBLIK_OCCURRENCES_STORIES_FAILED:
        return action.payload
      case DELETE_PUBLIK_OCCURRENCES_STORIES_SUCCESS:
        let deletedStory = action.payload
        return state.filter(message => message.id !== deletedStory.id)
      case DELETE_PUBLIK_OCCURRENCES_STORIES_FAILED:
        return action.payload
      case PUT_PUBLIK_OCCURRENCES_STORIES_SUCCESS:
        return [...state, action.payload]
      case PUT_PUBLIK_OCCURRENCES_STORIES_FAILED:
        return action.payload
      default:
        return state
    }
  }
