import { combineReducers } from 'redux-immutable'

import { reducer as userReducer } from '../components/app-header/store'
import { reducer as recommendReducer } from '../pages/discover/recommend/store'
import { reducer as songReducer } from '../pages/play/store'

const cReducer = combineReducers({
  recommend: recommendReducer,
  user: userReducer,
  song: songReducer
})

export default cReducer