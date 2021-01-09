import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  currentSong:{},
})

function reducer(state=defaultState,aciton){
  switch (aciton.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set('currentSong',aciton.currentSong)
    default:
      return state
  }
}

export default reducer