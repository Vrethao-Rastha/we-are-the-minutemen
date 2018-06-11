import { FETCH_DCR_SINGLE_FAILED,
         FETCH_DCR_SINGLE_SUCCESS
} from '../Actions/DcrActions'

  const initialState = []

  export default (state = initialState, action) => {
    switch(action.type) {
      case FETCH_DCR_SINGLE_SUCCESS:
        return action.payload
      case FETCH_DCR_SINGLE_FAILED:
        return action.payload
      default:
        return state
    }
  }
