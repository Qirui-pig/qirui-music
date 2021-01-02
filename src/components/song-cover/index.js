import React, { memo } from 'react'

import { SongCoverWrapper } from './style'
import { imageFormat, unitFormat } from '@/utils/format'

export default memo(function SongCover(props) {
  const { info } = props

  return (
    <SongCoverWrapper>
      <div className="cover-top">
        <img src={imageFormat(info.picUrl, 140)} alt={info.name} />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {unitFormat(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom">
        {info.name}
      </div>

    </SongCoverWrapper>
  )
})
