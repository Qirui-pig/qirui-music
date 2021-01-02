import React, { memo } from 'react'

import { AlbumCoverWrapper } from './style'
import { imageFormat } from '@/utils/format'

export default memo(function AlbumCover(props) {
  const { info, width = 153, size = 130, bgp = "-845px" } = props

  return (
    <AlbumCoverWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={imageFormat(info.picUrl,100)} alt={info.name} />
        <a href="/" className="cover image_cover">{info.name}</a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumCoverWrapper>
  )
})
