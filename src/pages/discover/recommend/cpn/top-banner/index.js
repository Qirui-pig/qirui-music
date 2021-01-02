import React, { memo, useState, useEffect, useRef,useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { Carousel } from 'antd';

// import { imageFormat } from '@/utils/format'
import { getTopBannerAction } from '../../store/actionCreators'
import { BannerWrapper, BannerLeft, BannerRight,BannerControl } from './style'

export default memo(function QRBanners() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const bannerRef = useRef()

  const dispatch = useDispatch()
  const { topBanners } = useSelector(state => ({
    topBanners: state.getIn(['recommend', 'topBanners'])
  }), shallowEqual)

  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  const bannerChange = useCallback((from,to) => {
    setTimeout(()=>{
      setCurrentIndex(to)  
    },0)
  },[],)

  const bgImage = topBanners[currentIndex] && topBanners[currentIndex].imageUrl + "?imageView&blur=40x20"

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}> 
            {
              topBanners.map(item=>{
                return (
                <div className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt={item.typeTitle}/>
                </div>)
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
      </div>
      <BannerControl>
        <button onClick={e => bannerRef.current.prev()} className="btn left"></button>
        <button onClick={e => bannerRef.current.next()} className="btn right"></button>
      </BannerControl>
    </BannerWrapper>
  )
})
