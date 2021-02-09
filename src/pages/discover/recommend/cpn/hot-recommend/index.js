import React, { memo, useEffect } from 'react'
import { useSelector,useDispatch,shallowEqual } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { Skeleton } from 'antd'

import { getHotRecommendAction } from '../../store/actionCreators'
import { HotRecommendWrpper } from './style'
import ThemeHeader from '@/components/theme-header'
import SongCover from '@/components/song-cover'


export default memo(function HotRecommend() {
  // const keywords = ["华语","流行","摇滚","民谣","电子"]

  const dispatch = useDispatch()

  const { hotRecommend } = useSelector(state => ({
    hotRecommend:state.getIn(['recommend','hotRecommend'])
  }),shallowEqual)

  useEffect(() => {
    dispatch(getHotRecommendAction(8))
  }, [dispatch])

  return (
    <HotRecommendWrpper>
      <ThemeHeader title="热门推荐" link="/discover/songs" />
      <div className="recommend-list">
        {
          hotRecommend?(hotRecommend.map(item=>{
            return (
              <NavLink to={{pathname:"/discover/playGroup",state:{id:item.id}}} key={item.picUrl}>
                <SongCover info={item} /> 
              </NavLink>
            )
          })):<Skeleton active paragraph={{ rows: 4 }}/>
        }
      </div>
    </HotRecommendWrpper>
  )
})
