import { FETCH_SCROLLER_FAILED,
         FETCH_SCROLLER_SUCCESS,
} from '../actions'

  const initialState = []

  export default (state = initialState, action) => {
    switch(action.type) {
      case FETCH_SCROLLER_SUCCESS:
        return [...action.payload]
      case FETCH_SCROLLER_FAILED:
        return action.payload
      default:
        return state
    }
  }
