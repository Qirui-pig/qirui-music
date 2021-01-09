import { getCurrentSong } from '@/api/song'
import * as actionTypes from './constants'

export const changeCurrentSongAction = (currentSong)=>({
  type:actionTypes.CHANGE_CURRENT_SONG,
  currentSong
})

export const getCurrentSongAction = (ids)=>{
  return (dispatch)=>{
    getCurrentSong(ids).then(res=>{
      dispatch(changeCurrentSongAction(res.data.songs[0]))
    })
  }
}