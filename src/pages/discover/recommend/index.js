import React, { memo } from 'react'
// import {connect} from 'react-redux'

import QRBanners from './cpn/top-banner'
import HotRecommend from './cpn/hot-recommend'
import { RecommendWrapper,Content,RecommendLeft,RecommendRight } from './style'

function QRRecommend(props) {
  // const { getBanners } = props

  return (
    <RecommendWrapper>
      <QRBanners/>
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend/>
        </RecommendLeft>
        <RecommendRight>
          
        </RecommendRight>
      </Content>
    </RecommendWrapper>
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