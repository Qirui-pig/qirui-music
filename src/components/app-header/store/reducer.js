import { Map } from 'immutable'

import * as actionTypes from './constants'

const defualtState = Map({
  userInfo: {}
})

function reducer(state = defualtState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_USERINFO:
      return state.set('userInfo',action.userInfo)
    default:
      return state;
  }
}

export default reducer