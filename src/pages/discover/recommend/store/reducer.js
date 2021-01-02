import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  topBanners:[],
  hotRecommend:[],
  newAlbum:[]
})

function reducer(state=defaultState,action){
  switch(action.type){
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set("topBanners",action.topBanners)
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommend",action.hotRecommend)
    case actionTypes.CHANGE_NEW_ALBUM:
        return state.set("newAlbum",action.newAlbum)
    default:
      return state
  }
}

export default reducer