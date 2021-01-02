import React, { memo, useEffect } from 'react'
import { useSelector,useDispatch,shallowEqual } from 'react-redux'

import { getHotRecommendAction } from '../../store/actionCreators'

import { HotRecommendWrpper } from './style'
import ThemeHeader from '@/components/theme-header'
import SongCover from '@/components/song-cover'


export default memo(function HotRecommend() {
  const keywords = ["华语","流行","摇滚","民谣","电子"]

  const dispatch = useDispatch()

  const { hotRecommend } = useSelector(state => ({
    hotRecommend:state.getIn(['recommend','hotRecommend'])
  }),shallowEqual)

  useEffect(() => {
    dispatch(getHotRecommendAction(8))
  }, [dispatch])

  return (
    <HotRecommendWrpper>
      <ThemeHeader title="热门推荐" keywords={keywords} />
      <div className="recommend-list">
        {
          hotRecommend.map(item=>{
            return (
              <SongCover key={item.picUrl} info={item} />
            )
          })
        }
      </div>
    </HotRecommendWrpper>
  )
})
