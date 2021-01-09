import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

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
      <ThemeHeader title="榜单" />
      <div className="top">
        <TopList info={topList} tracks={topList.tracks} />
        <TopList info={newList} tracks={newList.tracks} />
        <TopList info={originList} tracks={originList.tracks} />
      </div>
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
  // console.log(info,tracks)
  return (
    <TopListWrapper>
      <div className="header">
        <div className="image">
          <img src={imageFormat(info.coverImgUrl,80)} alt="info.name" />
          <a href="/" className="image_cover">ranking</a>
        </div>
        <div className="info">
          <a href="/">{info.name}</a>
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
        <a href="/">查看全部</a>
      </div>
    </TopListWrapper>
  )
})
