import * as actionTypes from './constants'
import { getTopList, getTopListDetail } from '@/api/ranking'

export const changeTopListAction = (topList) => ({
  type: actionTypes.CHANGE_TOPLIST,
  topList
})

export const changeTopListDetailAction = (topListDetail) => ({
  type: actionTypes.CHANGE_TOPLIST_DETAIL,
  topListDetail
})

export const getTopListAction = () => {
  return dispatch => {
    getTopList().then(res => {
      dispatch(changeTopListAction(res.data.list))
    })
  }
}

export const getTopListDetailAction = (id) => {
  return dispatch => {
    getTopListDetail(id).then(res => {
      dispatch(changeTopListDetailAction(res.data.playlist))
    })
  }
}

