import { combineReducers } from 'redux-immutable'

import { reducer as userReducer } from '../components/app-header/store'
import { reducer as recommendReducer } from '../pages/discover/recommend/store'
import { reducer as songReducer } from '../pages/play/store'
import { reducer as playListReducer } from '../pages/discover/play-list/store'
import { reducer as rankingReducer } from '../pages/discover/ranking/store'
import { reducer as songListReducer } from '../pages/discover/song/store'

const cReducer = combineReducers({
  // 推荐
  recommend: recommendReducer,
  // 用户
  user: userReducer,
  // 歌曲播放
  song: songReducer,
  // 歌单 一部分
  playGroup:playListReducer,
  // 排行榜
  ranking:rankingReducer,
  // 歌单 详细
  songList:songListReducer
})

export default cReducer