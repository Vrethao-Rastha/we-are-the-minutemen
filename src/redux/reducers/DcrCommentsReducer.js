import { FETCH_DCR_COMMENTS_FAILED,
         FETCH_DCR_COMMENTS_SUCCESS,
         ADD_DCR_COMMENTS_FAILED,
         ADD_DCR_COMMENTS_SUCCESS,
         DELETE_DCR_COMMENTS_FAILED,
         DELETE_DCR_COMMENTS_SUCCESS,
         PUT_DCR_COMMENTS_FAILED,
         PUT_DCR_COMMENTS_SUCCESS,
} from '../actions'

  const initialState = []

  export default (state = initialState, action) => {
    switch(action.type) {
      case FETCH_DCR_COMMENTS_SUCCESS:
        return [...action.payload]
      case FETCH_DCR_COMMENTS_FAILED:
        return action.payload
      case ADD_DCR_COMMENTS_SUCCESS:
        return [...state, action.payload]
      case ADD_DCR_COMMENTS_FAILED:
        return action.payload
      case DELETE_DCR_COMMENTS_SUCCESS:
        let deletedStory = action.payload
        return state.filter(message => message.id !== deletedStory.id)
      case DELETE_DCR_COMMENTS_FAILED:
        return action.payload
      case PUT_DCR_COMMENTS_SUCCESS:
        return [...state, action.payload]
      case PUT_DCR_COMMENTS_FAILED:
        return action.payload
      default:
        return state
    }
  }
