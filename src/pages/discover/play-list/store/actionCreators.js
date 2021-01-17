import * as actionTypes from './constants'
import { getPlayGroup,getPlayListComment } from '@/api/playList'

export const changePlayGroupAction = (playGroup)=>({
  type:actionTypes.CHANGE_PLAY_GROUP,
  playGroup
})

export const changePlayListCommentAction = (playListComment)=>({
  type:actionTypes.CHANGE_PLAYLIST_COMMENT,
  playListComment
})

export const getPlayGroupAction = (id)=>{
  return (dispatch)=>{
    // debugger
    getPlayGroup(id).then(res=>{
      dispatch(changePlayGroupAction(res.data.playlist))
    })
  }
}

export const getPlayListCommentAction = (id)=>{
  return (dispatch)=>{
    getPlayListComment(id).then(res=>{
      dispatch(changePlayListCommentAction(res.data.comments))
    })
  }
}