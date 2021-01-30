import React, { memo } from 'react'
import LazyLoad from 'react-lazyload';

import { Image,Spin } from 'antd'

import {imageFormat} from '@/utils/format'

export default memo(function LoadImage(props) {
  const { src,width } = props
  return (
    <LazyLoad height={width} offset={100}>
      <Image src={imageFormat(src, width)} preview={false} width={width} heigh={width} placeholder={<Spin style={{textAlign: 'center',padding:width/2.2}} />} />
    </LazyLoad>
  )
})
