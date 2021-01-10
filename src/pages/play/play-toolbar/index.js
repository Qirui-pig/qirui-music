import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Slider, message, Popover } from 'antd'

import { imageFormat, songFormat, formatDate } from '@/utils/format'
import { PlayToolBarWrapper, Control, PlayInfo, Operator,PlayListWrapper } from './style'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { changeCurrentLyricIndexAction, changeRuleAction, changeSongeAction, getCurrentSongAction } from '../store/actionCreators'

export default memo(function PlayToolBar() {

  const dispatch = useDispatch()
  const { currentSong, rule, playList, lyric, currentLyricIndex } = useSelector(state => ({
    currentSong: state.getIn(['song', 'currentSong']),
    rule: state.getIn(['song', 'rule']),
    playList: state.getIn(['song', 'playList']),
    lyric: state.getIn(['song', 'lyric']),
    currentLyricIndex: state.getIn(['song', 'currentLyricIndex']),
  }), shallowEqual)

  const [isPlay, setIsPlay] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isSlider, setIsSlider] = useState(false);

  useEffect(() => {
    //默认请求一首歌 要不然是白的
    dispatch(getCurrentSongAction(522647397))
  }, [dispatch])

  useEffect(() => {
    // dispatch(getCurrentSongAction(522647397))
    if (currentSong.id !== '') {
      audioRef.current.src = songFormat(currentSong.id)
      audioRef.current.play()
      setIsPlay(true)
    }
  }, [dispatch, currentSong.id])


  const imgUrl = (currentSong.al && currentSong.al.picUrl) || ''
  const singerName = (currentSong.ar && currentSong.ar[0].name) || ''
  const duration = currentSong.dt || 0;
  const showDuration = formatDate(duration, "mm:ss");
  const showCurrentTime = formatDate(currentTime, "mm:ss");

  const audioRef = useRef()
  // 歌曲播放
  const playSong = useCallback(() => {
    if (!isPlay) {
      audioRef.current.play()
      setIsPlay(true)
    } else {
      audioRef.current.pause()
      setIsPlay(false)
    }
  }, [isPlay])
  // 播放发生改变 时间同步改变
  const timeUpdate = (e) => {
    const currentTime = e.target.currentTime
    if (!isSlider) {
      setCurrentTime(currentTime * 1000)
      // console.log(currentTime * 1000 / duration*100)
      setProgress(currentTime * 1000 / duration * 100)
    }

    // 时间改变 歌词改变
    let i = lyric.findIndex(item => currentTime * 1000 < item.time)

    if (currentLyricIndex !== i - 1) {
      dispatch(changeCurrentLyricIndexAction(i - 1))

      let content = lyric[i - 1] && lyric[i - 1].content
      message.open({
        key: "lyric",
        content: content,
        duration: 0,
        className: 'lyric-class'
      })
    }
  }

  // 滑块改变时 时间发生改变 滑块开始移动
  const sliderChange = useCallback((value) => {
    setIsSlider(true)
    const CurrentTime = value / 100 * duration
    setCurrentTime(CurrentTime)
    setProgress(value)
  }, [duration])

  // 移动后 开始播放当前位置歌曲
  const sliderAfterChange = useCallback((value) => {
    const CurrentTime = value / 100 * duration
    audioRef.current.currentTime = CurrentTime / 1000
    setCurrentTime(CurrentTime)
    setIsSlider(false)
    // 如果暂停 需要播放
    if (!isPlay) {
      playSong()
    }
  }, [duration, isPlay, playSong])

  // 切换歌曲
  const changeSong = (val) => {
    if (rule === 2) {
      audioRef.current.currentTime = 0
    } else {
      dispatch(changeSongeAction(val))
    }
  }
  // 播放规则
  const changeRule = () => {
    console.log(rule)
    let currentRule = rule + 1
    if (currentRule > 2) {
      currentRule = 0
    }
    dispatch(changeRuleAction(currentRule))
  }
  // 歌曲播放完毕
  const songEnded = () => {
    // debugger
    // 循环则把进度调为0
    if (rule === 2 || playList.length === 1) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    } else {
      // 否则播放下一首歌曲
      dispatch(changeSongeAction(1))
    }
  }


  const content = (
    <PlayListWrapper>
      {
        playList.map(item => {
          return (
            <div className="item" key={item.id}>
              <span>{item.name}</span>
              <span>{item.ar[0].name}</span>
              <span>{formatDate(item.dt, "mm:ss")}</span>
            </div>
          )
        })
      }
    </PlayListWrapper>
  );
  return (
    <PlayToolBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlay={isPlay}>
          <button className="prev sprite_player" onClick={e => changeSong(-1)}></button>
          <button className="play sprite_player" onClick={playSong}></button>
          <button className="next sprite_player" onClick={e => changeSong(1)}></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/detail">
              <img src={imageFormat(imgUrl, 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="/" className="songer-name">{singerName}</a>
            </div>
            <div className="progress">
              <Slider value={progress} onChange={sliderChange} onAfterChange={sliderAfterChange} />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator rule={rule}>
          <div className="left">
            <button className="favor btn sprite_player"></button>
            <button className="share btn sprite_player"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop" onClick={e => changeRule()}></button>
            <Popover content={content} title="歌曲列表"  trigger="click">
              <button className="sprite_player btn playlist">{playList.length}</button>
            </Popover>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={e => timeUpdate(e)} onEnded={e => songEnded()}></audio>
    </PlayToolBarWrapper>
  )
})
