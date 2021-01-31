import * as actionTypes from './constants'
import { getNewAlbum, getAllAlbum, getAlbumDetail} from '@/api/album'

export const changeHotAlbumAction = (hotAlbum)=>({
  type:actionTypes.CHANGE_HOT_ALBUM,
  hotAlbum
})

export const changeAllAlbumAction = (allAlbum)=>({
  type:actionTypes.CHNAGE_ALL_ALBUM,
  allAlbum
})

export const changeAlbumDetailAction = (albumDetail)=>({
  type:actionTypes.CHNAGE_ALBUM_DETAIL,
  albumDetail
})

export const getHotAlbumAction = (area,type)=>{
  return dispatch=>{
    getNewAlbum(area,type).then(res=>{
      dispatch(changeHotAlbumAction(res.data.monthData.splice(0,10)))
    })
  }
}

export const getAllAlbumAction = (offset,area)=>{
  return dispatch=>{
    getAllAlbum(35,offset,area).then(res=>{
      dispatch(changeAllAlbumAction(res.data.albums))
    })
  }
}

export const getAlbumDetailAction = (id)=>{
  return dispatch=>{
    getAlbumDetail(id).then(res=>{
      console.log(res.data)
    })
  }
}