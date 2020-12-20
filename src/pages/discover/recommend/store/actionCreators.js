import * as actionTypes from './constants'

import { getTopBanner } from '@/api/recommend'

export const changeTopBannersAction = (data)=>({
  type:actionTypes.CHANGE_TOP_BANNERS,
  topBanners:data.banners
})

export const getTopBannerAction = ()=>{
  return dispatch=>{
    getTopBanner().then(res=>{
      // console.log(res)
      dispatch(changeTopBannersAction(res.data))
    })
  }
}
