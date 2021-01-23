import { Map } from 'immutable'

import * as actionTypes from './constans'

const defaultState = Map({
  artistList: []
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_ARTIST_LIST:
      return state.set('artistList',action.artistList)
    default:
      return state
  }
}

export default reducer