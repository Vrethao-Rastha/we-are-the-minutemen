import { combineReducers } from 'redux'
import DcrReducer from './DcrReducer'
import DcrCommentsReducer from './DcrCommentsReducer'

import PublikReducer from './PublikReducer'
import PublikCommentsReducer from './PublikCommentsReducer'

import BlogReducer from './BlogReducer'
import BlogSingleReducer from './BlogSingleReducer'
import PiperReducer from './PiperReducer'
import PiperCommentsReducer from './PiperCommentsReducer'

import MainStoryReducer from './MainStoryReducer'
import MainStoryCommentsReducer from './MainStoryCommentsReducer'

import DcrSingleReducer from './DcrSingleReducer'
import MainSingleReducer from './MainSingleReducer'
import PublikSingleReducer from './PublikSingleReducer'

import UsersReducer from './UsersReducer'
import AuthReducer from './AuthReducer'

export default combineReducers({
  dcr: DcrReducer,
  dcrSingle: DcrSingleReducer,
  dcrComments: DcrCommentsReducer,

  publik: PublikReducer,
  publikSingle: PublikSingleReducer,
  publikComments: PublikCommentsReducer,

  blog: BlogReducer,
  singleBlog: BlogSingleReducer,

  piper: PiperReducer,
  piperComments: PiperCommentsReducer,

  main: MainStoryReducer,
  mainSingle: MainSingleReducer,
  mainComments: MainStoryCommentsReducer,

  user: UsersReducer,
  auth: AuthReducer
})
