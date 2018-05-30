import { FETCH_MAIN_STORY_FAILED,
         FETCH_MAIN_STORY_SUCCESS,
         ADD_MAIN_STORY_FAILED,
         ADD_MAIN_STORY_SUCCESS,
         DELETE_MAIN_STORY_FAILED,
         DELETE_MAIN_STORY_SUCCESS,
         PUT_MAIN_STORY_FAILED,
         PUT_MAIN_STORY_SUCCESS,
} from '../actions'

  const initialState = []

  export default (state = initialState, action) => {
    switch(action.type) {
      case FETCH_MAIN_STORY_SUCCESS:
        return [...action.payload]
      case FETCH_MAIN_STORY_FAILED:
        return action.payload
      case ADD_MAIN_STORY_SUCCESS:
        return [...state, action.payload]
      case ADD_MAIN_STORY_FAILED:
        return action.payload
      case DELETE_MAIN_STORY_SUCCESS:
        let deletedStory = action.payload
        return state.filter(message => message.id !== deletedStory.id)
      case DELETE_MAIN_STORY_FAILED:
        return action.payload
      case PUT_MAIN_STORY_SUCCESS:
        return [...state, action.payload]
      case PUT_MAIN_STORY_FAILED:
        return action.payload
      default:
        return state
    }
  }
