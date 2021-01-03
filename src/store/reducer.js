import { combineReducers } from 'redux-immutable'

import { reducer as recommendReducer } from '../pages/discover/recommend/store'
import { reducer as userReducer } from '../components/app-header/store'

const cReducer = combineReducers({
  recommend: recommendReducer,
  user: userReducer,
})

export default cReducer