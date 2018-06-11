import { FETCH_PIPER_COMMENTS_FAILED,
         FETCH_PIPER_COMMENTS_SUCCESS,
         ADD_PIPER_COMMENTS_FAILED,
         ADD_PIPER_COMMENTS_SUCCESS,
         DELETE_PIPER_COMMENTS_FAILED,
         DELETE_PIPER_COMMENTS_SUCCESS,
         PUT_PIPER_COMMENTS_FAILED,
         PUT_PIPER_COMMENTS_SUCCESS,
} from '../Actions/PiperActions'

  const initialState = []

  export default (state = initialState, action) => {
    switch(action.type) {
      case FETCH_PIPER_COMMENTS_SUCCESS:
        return [...action.payload]
      case FETCH_PIPER_COMMENTS_FAILED:
        return action.payload
      case ADD_PIPER_COMMENTS_SUCCESS:
        return [...state, action.payload]
      case ADD_PIPER_COMMENTS_FAILED:
        return action.payload
      case DELETE_PIPER_COMMENTS_SUCCESS:
        let deletedStory = action.payload
        return state.filter(message => message.id !== deletedStory.id)
      case DELETE_PIPER_COMMENTS_FAILED:
        return action.payload
      case PUT_PIPER_COMMENTS_SUCCESS:
        return [...state, action.payload]
      case PUT_PIPER_COMMENTS_FAILED:
        return action.payload
      default:
        return state
    }
  }
