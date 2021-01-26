import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getDjCatAction } from './store/actionCreators'

import { DjRadioWrapper } from './style'

export default memo(function QRDjRadio () {

  const dispatch = useDispatch()

  const { djCat } = useSelector(state => ({
    djCat: state.getIn(['djRadio', 'djCat'])
  }), shallowEqual)

  useEffect(() => {
    dispatch(getDjCatAction())
  }, [dispatch])

  console.log(djCat)
  return (
    <DjRadioWrapper className="wrap-v2">
      {/* todo tab切换栏 */}
      
      {/* 判断current-type是否存在 如果不存在 就是默认radio推荐页 在则是另外一个组件 */}
      
    </DjRadioWrapper>
  )
})
