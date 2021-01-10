import React, { memo, useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { SongTopWrapper } from './style'
import { imageFormat } from '@/utils/format'


export default memo(function SongTop() {

  const { currentSong, lyric } = useSelector(state => ({
    currentSong: state.getIn(['song', 'currentSong']),
    lyric: state.getIn(['song', 'lyric'])
  }), shallowEqual)

  const imgUrl = (currentSong.al && currentSong.al.picUrl) || ''
  const songName = (currentSong.al && currentSong.al.name) || ''
  const artist = (currentSong.ar && currentSong.ar[0].name) || ''

  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <SongTopWrapper isShowMore={isShowMore}>
      <div className="song-top">
        <div className="image">
          <img src={imageFormat(imgUrl, 130)} alt="" />
          <span className="sprite_covor"></span>
        </div>
        <div className="song-content">
          <div className="title">{songName}</div>
          <p className="p1">歌手：<a href="/">{artist}</a> </p>
          <p className="p1">所属专辑：<a href="/">{songName}</a> </p>
          <div className="lyric-list">
            {
              lyric.map(item => {
                return (
                  <p className="list-item" key={item.time}>{item.content}</p>
                )
              })
            }
          </div>
          <div className="show-more" onClick={e=>{setIsShowMore(!isShowMore)}}>{isShowMore?'收回':'展开'}</div>
        </div>
      </div>
    </SongTopWrapper>
  )
})
