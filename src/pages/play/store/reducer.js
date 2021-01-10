import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  currentSong: {},
  playList: [],
  currentIndex: 0,
  // 循环规则
  rule: 0,
  lyric: [],
  currentLyricIndex: 0,
  // 评论
  comments: []
})

function reducer(state = defaultState, aciton) {
  switch (aciton.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set('currentSong', aciton.currentSong)
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set('playList', aciton.playList)
    case actionTypes.CHANGE_CURRENT_INDEX:
      return state.set('currentIndex', aciton.currentIndex)
    case actionTypes.CHANGE_RULE:
      return state.set('rule', aciton.rule)
    case actionTypes.CHANGE_LYRIC:
      return state.set('lyric', aciton.lyric)
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set('currentLyricIndex', aciton.currentLyricIndex)
    case actionTypes.CHANGE_COMMENT:
      return state.set('comments', aciton.comments)
    default:
      return state
  }
}

export default reducer