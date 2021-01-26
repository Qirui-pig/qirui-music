import { Map } from 'immutable'

import * as actionTypes from './constans'

const defaultState = Map({
  djCat: [],
  currentType: '',
  currentRecommend: [],
  currentHotDj: []
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DJ_CAT:
      return state.set('djCat', action.djCat)
    case actionTypes.CHANGE_CURRENT_TYPE:
      return state.set('currentType', action.currentType)
    case actionTypes.CHANGE_CURRENT_RECOMMEND:
      return state.set('currentRecommend', action.currentRecommend)
    case actionTypes.CHANGE_CURRENT_HOT_DJ:
      return state.set('currentHotDj', action.currentHotDj)
    default:
      return state;
  }
}

export default reducer