import React, { memo, useEffect } from 'react'
import { useDispatch,useSelector,shallowEqual } from 'react-redux'
// import {connect} from 'react-redux'

import { getTopBannerAction } from './store/actionCreators'

function QRRecommend(props) {
  // const { getBanners } = props
  const dispatch = useDispatch()
  const {topBanners} = useSelector(state => ({
    topBanners:state.recommend.topBanners
  }),shallowEqual)

  useEffect(()=>{
    dispatch(getTopBannerAction())
  },[dispatch])

  return (
    <div>
      {topBanners.length}
    </div>
  )
}
// const mapStateToProps = (state)=>({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = (dispatch)=>({
//   getBanners:()=>{
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps,mapDispatchToProps)(memo(QRRecommend));

export default memo(QRRecommend)