import { Map } from 'immutable'

import * as actionTypes from './constans'

const defaultState = Map({
  artistList: [],
  artistSong: [],
  artistAlbum: [],
  artistDesc: {},
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_ARTIST_LIST:
      return state.set('artistList', action.artistList)
    case actionTypes.CHANGE_ARTIST_SONG:
      return state.set('artistSong', action.artistSong)
    case actionTypes.CHANGE_ARTIST_ALBUM:
      return state.set('artistAlbum', action.artistAlbum)
    case actionTypes.CHANGE_ARTIST_DESC:
      return state.set('artistDesc', action.artistDesc)
    default:
      return state
  }
}

export default reducer