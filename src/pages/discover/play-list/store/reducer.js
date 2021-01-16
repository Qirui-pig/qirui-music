import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  playGroup:{}
})

const reducer = (state=defaultState,action)=>{
  switch (action.type) {
    case actionTypes.CHANGE_PLAY_GROUP:
      return state.set('playGroup',action.playGroup)
    default:
      return state
  }
}

export default reducer