import React, { memo } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'

import { SimilarSongWrapper } from './style'
import { getCurrentSongAction } from '../../store/actionCreators'

export default memo(function SimilarSong() {

  const dispatch = useDispatch()

  const { similarSongList } = useSelector(state => ({
    similarSongList: state.getIn(['song', 'similarSongList'])
  }), shallowEqual)

  const playSong = (item) => {
    dispatch(getCurrentSongAction(item.id))
  }

  return (
    <SimilarSongWrapper>
      <div className="title">相似歌曲</div>
      {
        similarSongList.map(item => {
          return (
            <div className="item" key={item.id}>
              <div className="info">
                <p className="song-name">{item.name}</p>
                <p className="artist">{item.artists[0].name}</p>
              </div>
              <div className="operate">
                <button className="play sprite_icon" onClick={e => playSong(item)}></button>
                <button className="add sprite_icon2"></button>
              </div>
            </div>
          )
        })
      }

    </SimilarSongWrapper>
  )
})
