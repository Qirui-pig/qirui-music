import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import LazyLoad from 'react-lazyload'

import { Image,Spin,Skeleton } from 'antd'

import ThemeHeader from '@/components/theme-header2'
import { getTopListAction } from '../../store/actionCreators'
import { getCurrentSongAction } from '@/pages/play/store'
import { RankingWrapper, TopListWrapper } from './style'
import { imageFormat } from '@/utils/format'

export default memo(function RecommendRanking() {

  const dispatch = useDispatch()
  let { topList, newList, originList } = useSelector(state => ({
    topList: state.getIn(['recommend', 'topList']),
    newList: state.getIn(['recommend', 'newList']),
    originList: state.getIn(['recommend', 'originList'])
  }), shallowEqual)

  useEffect(() => {
    dispatch(getTopListAction())
  }, [dispatch])

  return (
    <RankingWrapper>
      <ThemeHeader title="榜单" link="/discover/ranking" />
      {
        topList?(
          <div className="top">
            <TopList info={topList} tracks={topList.tracks} />
            <TopList info={newList} tracks={newList.tracks} />
            <TopList info={originList} tracks={originList.tracks} />
          </div>
        ):<Skeleton active paragraph={{ rows: 8 }}/>
      }
    </RankingWrapper>
  )
})


const TopList = memo(function TopList(props) {
  const { info, tracks } = props

  const dispatch = useDispatch()

  const PlaySong=(item)=>{
    dispatch(getCurrentSongAction(item.id))
    // console.log(item)
  }
  return (
    <TopListWrapper>
      <div className="header">
        <div className="image">
          <LazyLoad height={80} offset={100}>
            <Image src={imageFormat(info.coverImgUrl,80)} width={80} height={80} preview={false} placeholder={<Spin style={{padding:'30px'}} />} />
          </LazyLoad>
          <NavLink to={{pathname:"/discover/ranking",state:{id:info.id}}} className="image_cover">ranking</NavLink>
        </div>
        <div className="info">
          <NavLink to={{pathname:"/discover/ranking",state:{id:info.id}}}>{info.name}</NavLink>
          <div className="btn paly sprite_02"></div>
          <div className="btn favor sprite_02"></div>
        </div>
      </div>
      <div className="list">
        {
          tracks && tracks.slice(0, 10).map((item, index) => {
            return (
              <div className="list-item" key={item.id}>
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <span className="name text-nowrap">{item.name}</span>
                  <div className="operate">
                    <button className="btn sprite_02 play" onClick={e=>PlaySong(item)}></button>
                    <button className="btn sprite_icon2 addto"></button>
                    <button className="btn sprite_02 favor"></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="footer">
        <NavLink to={{pathname:"/discover/ranking",state:{id:info.id}}} >查看全部</NavLink>
      </div>
    </TopListWrapper>
  )
})
