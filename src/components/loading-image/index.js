import React, { memo } from 'react'
import LazyLoad from 'react-lazyload';

import { Image,Spin } from 'antd'

import {imageFormat} from '@/utils/format'

export default memo(function LoadImage(props) {
  const { src,width,height,radio=1 } = props
  return (
    <LazyLoad height={width} offset={100}>
      <Image src={imageFormat(src, width*radio)} preview={false} width={width} style={{height:height?height:width+'px'}} placeholder={<Spin style={{textAlign: 'center',padding:width/2.4}} />} />
    </LazyLoad>
  )
})
