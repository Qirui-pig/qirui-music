import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  topList: [],
  topListDetail:{}
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TOPLIST:
      return state.set('topList', action.topList)
    case actionTypes.CHANGE_TOPLIST_DETAIL:
      return state.set('topListDetail', action.topListDetail)
    default:
      return state
  }
}

export default reducer