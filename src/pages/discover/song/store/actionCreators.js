import { getCatList,getSongList } from '@/api/playList'
import * as actionTypes from './constans'

export const changeCatListAction = (catList)=>({
  type:actionTypes.CHANGE_CATLIST,
  catList
})

export const changeSongListAction = (songList)=>({
  type:actionTypes.CHANGE_SONGLIST,
  songList
})

export const changeTotalListAction = (total)=>({
  type:actionTypes.CHANGE_TOTAL,
  total
})


export const getCatListAction  = ()=>{
  return dispatch=>{
    getCatList().then(res=>{
      dispatch(changeCatListAction(res.data.sub))
    })
  }
}

export const getSongListAction = (type,limit=35,offset)=>{
  return dispatch=>{
    getSongList(type,limit,offset).then(res=>{
      dispatch(changeSongListAction(res.data.playlists))
      dispatch(changeTotalListAction(res.data.total))
    })
  }
}