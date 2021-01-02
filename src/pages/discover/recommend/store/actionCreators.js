import * as actionTypes from './constants'

import { getTopBanner, getHotRecommend} from '@/api/recommend'

export const changeTopBannersAction = (data)=>({
  type:actionTypes.CHANGE_TOP_BANNERS,
  topBanners:data.banners
})

export const changeHotRecommendAction = (data)=>({
  type:actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommend:data.result
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
