import { getCurrentSong, getLyric, getComment,getSimilarSongList } from '@/api/song'
import * as actionTypes from './constants'
import { parseLyric } from '@/utils/format'

export const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong
})

export const changeCurrentIndexAction = (currentIndex) => ({
  type: actionTypes.CHANGE_CURRENT_INDEX,
  currentIndex
})

export const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList
})

export const changeRuleAction = (rule) => ({
  type: actionTypes.CHANGE_RULE,
  rule
})

export const changeLyricAction = (lyric) => ({
  type: actionTypes.CHANGE_LYRIC,
  lyric
})

export const changeCurrentLyricIndexAction = (currentLyricIndex) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  currentLyricIndex
})

export const changeCommentAction = (comments) => ({
  type: actionTypes.CHANGE_COMMENT,
  comments
})

export const changeSimilarSongListAction = (similarSongList) => ({
  type: actionTypes.CHANGE_SIMILAR_SONG_LIST,
  similarSongList
})

// 切换歌曲
export const changeSongeAction = (val) => {
  return (dispatch, state) => {
    // debugger
    // const currentSong = state().getIn(['song','currentSong'])
    const playList = state().getIn(['song', 'playList'])
    const rule = state().getIn(['song', 'rule'])
    let currentIndex = state().getIn(["song", "currentIndex"]);


    switch (rule) {
      case 1:
        let randomIndex = Math.floor(Math.random() * playList.length)
        while (randomIndex === currentIndex) {
          randomIndex = Math.floor(Math.random() * playList.length)
        }
        currentIndex = randomIndex
        break;
      case 2:
        // currentIndex = currentIndex
        break;
      default:
        currentIndex += val
        if (currentIndex >= playList.length) {
          currentIndex = 0
        } else if (currentIndex < 0) {
          currentIndex = playList.length - 1
        }
    }

    const currentSong = playList[currentIndex]
    dispatch(changeCurrentSongAction(currentSong))
    dispatch(changeCurrentIndexAction(currentIndex))

    //下一首 也需要请求歌词
    dispatch(getLyricAction(currentSong.id))
    dispatch(getCommentAction(currentSong.id))
    dispatch(getSimilarSongListAction(currentSong.id))


  }
}

export const getCurrentSongAction = (ids) => {
  return (dispatch, state) => {
    // debugger
    // const currentSong = state().getIn(['song','currentSong'])
    const playList = state().getIn(['song', 'playList'])
    const songIndex = playList.findIndex(item => item.id === ids)

    let song = null
    // 等于-1没有查到 添加歌曲
    if (songIndex === -1) {
      getCurrentSong(ids).then(res => {
        song = res.data.songs[0]
        //假如没有歌曲则返回
        if (!song) return

        let newPlayList = [...playList]
        newPlayList.push(song)

        dispatch(changeCurrentSongAction(res.data.songs[0]))
        dispatch(changeCurrentIndexAction(newPlayList.length - 1))
        dispatch(changePlayListAction(newPlayList))

        dispatch(getLyricAction(song.id))
        dispatch(getCommentAction(song.id))
        dispatch(getSimilarSongListAction(song.id))
        
      })
    } else {
      dispatch(changeCurrentSongAction(playList[songIndex]))
      dispatch(changeCurrentIndexAction(songIndex))
    }

  }
}

export const getLyricAction = (id) => {
  return (dispatch) => {
    getLyric(id).then(res => {
      let Lyric = parseLyric(res.data.lrc.lyric)
      // console.log(Lyric)
      dispatch(changeLyricAction(Lyric))
    })
  }
}

export const getCommentAction = (id) => {
  return (dispatch, state) => {

    getComment(id, 15).then(res => {
        // console.log(res.data.comments)
        dispatch(changeCommentAction(res.data.comments))
    })
  }
}

export const getSimilarSongListAction = (id)=>{
  return (dispatch)=>{
    getSimilarSongList(id).then(res=>{
      dispatch(changeSimilarSongListAction(res.data.songs))
    })
  }
}