import { combineReducers } from 'redux'
import DcrReducer from './DcrReducer'
import PublikReducer from './PublikReducer'
import BlogReducer from './BlogReducer'
import PiperReducer from './PiperReducer'
import MainStoryReducer from './MainStoryReducer'

export default combineReducers({
  dcr: DcrReducer,
  publik: PublikReducer,
  blog: BlogReducer,
  piper: PiperReducer,
  main: MainStoryReducer
})
