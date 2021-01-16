import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  playGroup: {},
  playListComment: []
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_PLAY_GROUP:
      return state.set('playGroup', action.playGroup)
    case actionTypes.CHANGE_PLAYLIST_COMMENT:
      return state.set('playListComment', action.playListComment)
    default:
      return state
  }
}

export default reducer