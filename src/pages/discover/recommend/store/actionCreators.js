import * as actionTypes from './constants'

import { getTopBanner, getHotRecommend,getNewAlbum} from '@/api/recommend'

export const changeTopBannersAction = (data)=>({
  type:actionTypes.CHANGE_TOP_BANNERS,
  topBanners:data.banners
})

export const changeHotRecommendAction = (data)=>({
  type:actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommend:data.result
})

export const changeNewAlbumAction = (data)=>({
  type:actionTypes.CHANGE_NEW_ALBUM,
  newAlbum:data.weekData.splice(0,10)
})

export const getTopBannerAction = ()=>{
  return dispatch=>{
    getTopBanner().then(res=>{
      // console.log(res)
      dispatch(changeTopBannersAction(res.data))
    })
  }
}

export const getHotRecommendAction = (limt)=>{
  return dispatch=>{
    getHotRecommend(limt).then(res=>{
      // console.log(res)
      dispatch(changeHotRecommendAction(res.data))
    })
  }
}

export const getNewAlbumAction = (limt)=>{
  return dispatch=>{
    getNewAlbum(limt).then(res=>{
      // console.log(res)
      dispatch(changeNewAlbumAction(res.data))
    })
  }
}
