import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  hotAlbum: [],
  allAlbum: [],
  albumDetail: {}
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOT_ALBUM:
      return state.set('hotAlbum', action.hotAlbum)
    case actionTypes.CHNAGE_ALL_ALBUM:
      return state.set('allAlbum', action.allAlbum)
    case actionTypes.CHNAGE_ALBUM_DETAIL:
      return state.set('albumDetail', action.albumDetail)
    default:
      return state
  }
}

export default reducer