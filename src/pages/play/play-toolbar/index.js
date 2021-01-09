import React, { memo, useEffect } from 'react'

import { Slider } from 'antd'

import { imageFormat } from '@/utils/format'
import { PlayToolBarWrapper, Control, PlayInfo, Operator } from './style'
import { getCurrentSongAction } from '../store/actionCreators'
import { useDispatch,useSelector,shallowEqual } from 'react-redux'

export default memo(function PlayToolBar() {

  const dispatch = useDispatch()
  const {currentSong} = useSelector(state => ({
    currentSong:state.getIn(['song','currentSong'])
  }),shallowEqual)

  useEffect(() => {
    dispatch(getCurrentSongAction(522647397))
  }, [dispatch])

  const imgUrl = (currentSong.al && currentSong.al.picUrl) || ''
  const singerName = (currentSong.ar && currentSong.ar[0].name) || ''


  return (
    <PlayToolBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlay={false}>
          <button className="prev sprite_player"></button>
          <button className="play sprite_player"></button>
          <button className="next sprite_player"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <img src={imageFormat(imgUrl, 35)} alt="" />
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="/" className="songer-name">{singerName}</a>
            </div>
            <div className="progress">
              <Slider />
              <div className="time">
                <span className="now-time">00:00</span>
                <span className="divider">/</span>
                <span className="duration">00:00</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="favor btn sprite_player"></button>
            <button className="share btn sprite_player"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop" sequence={0}></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
    </PlayToolBarWrapper>
  )
})
