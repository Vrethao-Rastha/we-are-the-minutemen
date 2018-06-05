import { FETCH_MAIN_SINGLE_FAILED,
         FETCH_MAIN_SINGLE_SUCCESS
} from '../actions'

  const initialState = []

  export default (state = initialState, action) => {
    switch(action.type) {
      case FETCH_MAIN_SINGLE_SUCCESS:
        return [...action.payload]
      case FETCH_MAIN_SINGLE_FAILED:
        return action.payload
      default:
        return state
    }
  }
