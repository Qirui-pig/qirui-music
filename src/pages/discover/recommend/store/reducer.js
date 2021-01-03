import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  topBanners: [],
  hotRecommend: [],
  newAlbum: [],
  topList: [],
  newList:[],
  originList:[],
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners)
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommend", action.hotRecommend)
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set("newAlbum", action.newAlbum)
    case actionTypes.CHANGE_TOP_LIST:
      return state.set("topList", action.topList)
    case actionTypes.CHANGE_NEW_LIST:
      return state.set("newList", action.newList)
    case actionTypes.CHANGE_ORIGIN_LIST:
      return state.set("originList", action.originList)
    default:
      return state
  }
}

export default reducer