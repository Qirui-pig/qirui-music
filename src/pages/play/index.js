import React, { memo } from 'react'

import { SongDetailWrapper, SongDetailLeft, SongDetailRight } from './style'

export default memo(function SongDetail() {
  return (
    <SongDetailWrapper className="wrap-v2">
      <div className="content">
        <SongDetailLeft>
          123
        </SongDetailLeft>
        <SongDetailRight></SongDetailRight>
      </div>
    </SongDetailWrapper>
  )
})
