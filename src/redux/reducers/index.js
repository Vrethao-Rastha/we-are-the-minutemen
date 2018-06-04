import { combineReducers } from 'redux'
import DcrReducer from './DcrReducer'
import DcrCommentsReducer from './DcrCommentsReducer'

import PublikReducer from './PublikReducer'
import PublikCommentsReducer from './PublikCommentsReducer'

import BlogReducer from './BlogReducer'
import PiperReducer from './PiperReducer'
import PiperCommentsReducer from './PiperCommentsReducer'

import MainStoryReducer from './MainStoryReducer'
import MainStoryCommentsReducer from './MainStoryCommentsReducer'

import ScrollerReducer from './ScrollerReducer'


export default combineReducers({
  dcr: DcrReducer,
  dcrComments: DcrCommentsReducer,

  publik: PublikReducer,
  publikComments: PublikCommentsReducer,

  blog: BlogReducer,
  piper: PiperReducer,
  piperComments: PiperCommentsReducer,

  main: MainStoryReducer,
  mainComments: MainStoryCommentsReducer,

  scroller: ScrollerReducer

})
