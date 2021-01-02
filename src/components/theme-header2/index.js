import React, { memo } from 'react'

import { HeaderWrapper } from './style'

export default memo(function ThemeHeader(props) {
  const { title } = props
  return (
    <HeaderWrapper>
      <div className="left">
        <i className="sprite_02 icon"></i>
        <h3 className="title">{title}</h3>
      </div>
      <div className="right">
        <a href="/">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
})
