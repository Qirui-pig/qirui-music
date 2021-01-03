import * as actionTypes from './constants'

import { getTopBanner, getHotRecommend, getNewAlbum, getTopList,getTopListDetail } from '@/api/recommend'

export const changeTopBannersAction = (data) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: data.banners
})

export const changeHotRecommendAction = (data) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommend: data.result
})

export const changeNewAlbumAction = (data) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbum: data.weekData.splice(0, 10)
})

export const changeTopListAction = (data) => ({
  type: actionTypes.CHANGE_TOP_LIST,
  topList: data
})
export const changeNewListAction = (data) => ({
  type: actionTypes.CHANGE_NEW_LIST,
  newList: data
})
export const changeOriginListAction = (data) => ({
  type: actionTypes.CHANGE_ORIGIN_LIST,
  originList: data
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanner().then(res => {
      // console.log(res)
      dispatch(changeTopBannersAction(res.data))
    })
  }
}

export const getHotRecommendAction = (limt) => {
  return dispatch => {
    getHotRecommend(limt).then(res => {
      // console.log(res)
      dispatch(changeHotRecommendAction(res.data))
    })
  }
}

export const getNewAlbumAction = (limt) => {
  return dispatch => {
    getNewAlbum(limt).then(res => {
      // console.log(res)
      dispatch(changeNewAlbumAction(res.data))
    })
  }
}

export const getTopListAction = () => {
  return dispatch => {
    getTopList().then(res => {
      const listId = []
      let ids = res.data.list.splice(0,3)
      ids.map(item=>listId.push(item.id))
      // console.log(listId)

      getTopListDetail(listId[0]).then(res=>{
        dispatch(changeTopListAction(res.data.playlist))
      })
      getTopListDetail(listId[1]).then(res=>{
        dispatch(changeNewListAction(res.data.playlist))
      })
      getTopListDetail(listId[2]).then(res=>{
        dispatch(changeOriginListAction(res.data.playlist))
      })
      // console.log(rankingList)
    })
  }
}
