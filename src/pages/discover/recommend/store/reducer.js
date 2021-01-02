import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  topBanners:[],
  hotRecommend:[],
})

function reducer(state=defaultState,action){
  switch(action.type){
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set("topBanners",action.topBanners)
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommend",action.hotRecommend)
    default:
      return state
  }
}

export default reducer