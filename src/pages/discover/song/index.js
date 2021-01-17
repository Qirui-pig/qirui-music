import React, { memo } from 'react'

import { Button } from 'antd'

import {QRSongWrapper} from './style'

export default memo(function QRSong() {
  return (
    <QRSongWrapper className="wrap-v2">
      <div className="header">
        <div className="header-left">
          <span>全部</span>
          <Button>选择分类</Button>
        </div>
        <Button className="red-btn">热门</Button>
      </div>
    </QRSongWrapper>
  )
})
