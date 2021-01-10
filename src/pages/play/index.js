import React, { memo } from 'react'

import { SongDetailWrapper, SongDetailLeft, SongDetailRight } from './style'
import SongTop from './cpn/song-top'
import SongComment from './cpn/song-comment'

export default memo(function SongDetail() {
  return (
    <SongDetailWrapper className="wrap-v2">
      <div className="content">
        <SongDetailLeft>
          <SongTop/>
          <SongComment/>
        </SongDetailLeft>
        <SongDetailRight></SongDetailRight>
      </div>
    </SongDetailWrapper>
  )
})
