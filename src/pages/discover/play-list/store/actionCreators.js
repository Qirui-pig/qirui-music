import * as actionTypes from './constants'
import { getPlayGroup } from '@/api/playList'

export const changePlayGroupAction = (playGroup)=>({
  type:actionTypes.CHANGE_PLAY_GROUP,
  playGroup
})

export const getPlayGroupAction = (id)=>{
  return (dispatch)=>{
    getPlayGroup(id).then(res=>{
      dispatch(changePlayGroupAction(res.data.playlist))
    })
  }
}