import { Map } from 'immutable'
import * as actionTypes from './constans'

const defaultState = Map({
  catList: [],
  songList: [],
  total: 0
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SONGLIST:
      return state.set('songList', action.songList)
    case actionTypes.CHANGE_CATLIST:
      return state.set('catList', action.catList)
    case actionTypes.CHANGE_TOTAL:
      return state.set('total', action.total)
    default:
      return state
  }
}

export default reducer