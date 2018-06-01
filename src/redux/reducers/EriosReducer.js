import { FETCH_ERIOS_FAILED,
         FETCH_ERIOS_SUCCESS,
} from '../actions'

  const initialState = []

  export default (state = initialState, action) => {
    switch(action.type) {
      case FETCH_ERIOS_SUCCESS:
        return [...action.payload]
      case FETCH_ERIOS_FAILED:
        return action.payload
      default:
        return state
    }
  }
