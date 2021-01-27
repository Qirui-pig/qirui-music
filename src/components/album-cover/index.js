import React, { memo } from 'react'
import LazyLoad from 'react-lazyload';

import { Image,Spin } from 'antd'

import { AlbumCoverWrapper } from './style'
import { imageFormat } from '@/utils/format'

export default memo(function AlbumCover(props) {
  const { info, width = 153, size = 130, bgp = "-845px" } = props

  return (
    <AlbumCoverWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <LazyLoad height={100} offset={100}>
          <Image src={imageFormat(info.picUrl,100)} preview={false} width={100} placeholder={<Spin style={{textAlign: 'center',padding:'40px'}} />} />
        </LazyLoad>
        <a href="/" className="cover image_cover">{info.name}</a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumCoverWrapper>
  )
})
