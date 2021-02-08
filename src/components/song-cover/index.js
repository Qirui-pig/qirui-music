import React, { memo } from 'react'

import { SongCoverWrapper } from './style'
import { unitFormat } from '@/utils/format'
import LoadImage from '@/components/loading-image'

export default memo(function SongCover(props) {
  const { info } = props

  return (
    <SongCoverWrapper>
      <div className="cover-top">
        <LoadImage src={info.picUrl} width={140}/>
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
