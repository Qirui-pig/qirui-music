import { combineReducers } from 'redux-immutable'

import { reducer as userReducer } from '../components/app-header/store'
import { reducer as recommendReducer } from '../pages/discover/recommend/store'
import { reducer as songReducer } from '../pages/play/store'
import { reducer as playListReducer } from '../pages/discover/play-list/store'
import { reducer as rankingReducer } from '../pages/discover/ranking/store'

const cReducer = combineReducers({
  recommend: recommendReducer,
  user: userReducer,
  song: songReducer,
  playGroup:playListReducer,
  ranking:rankingReducer
})

export default cReducer