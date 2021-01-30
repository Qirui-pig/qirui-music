import { getDjCat, getDjByType, getDjHotByType } from '@/api/djradio'
import * as actionTypes from './constans'

export const changeDjCatAction = (djCat)=>({
  type:actionTypes.CHANGE_DJ_CAT,
  djCat
})

export const changeCurrentTypeAction = (currentType)=>({
  type:actionTypes.CHANGE_CURRENT_TYPE,
  currentType
})

export const changeCurrentRecommentAction = (currentRecommend)=>({
  type:actionTypes.CHANGE_CURRENT_RECOMMEND,
  currentRecommend
})

export const changeCurrentHotDjAction = (currentHotDj)=>({
  type:actionTypes.CHANGE_CURRENT_HOT_DJ,
  currentHotDj
})


export const getDjCatAction = ()=>{
  return dispatch=>{
    getDjCat().then(res=>{
      dispatch(changeDjCatAction(res.data.categories))
    })
  }
}

export const getDjDetailByTypeAction = (type)=>{
  return dispatch=>{
    dispatch(changeCurrentTypeAction(type))

    getDjByType(type).then(res=>{
      dispatch(changeCurrentRecommentAction(res.data.djRadios))
    })

    getDjHotByType(type).then(res=>{
      dispatch(changeCurrentHotDjAction(res.data.djRadios))
    })
  }
}
