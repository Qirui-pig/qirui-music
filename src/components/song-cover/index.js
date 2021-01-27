import React, { memo } from 'react'

import { Image,Spin } from 'antd'

import { SongCoverWrapper } from './style'
import { imageFormat, unitFormat } from '@/utils/format'

export default memo(function SongCover(props) {
  const { info } = props

  return (
    <SongCoverWrapper>
      <div className="cover-top">
        <Image src={imageFormat(info.picUrl, 140)} preview={false} width={140} heigh={140} placeholder={<Spin style={{textAlign: 'center',padding:'60px'}} />} />
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
