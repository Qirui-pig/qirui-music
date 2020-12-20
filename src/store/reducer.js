import { combineReducers } from 'redux'

import {reducer as recommendReducer} from '../pages/discover/recommend/store'

const cReducer = combineReducers({
  recommend:recommendReducer
})

export default cReducer