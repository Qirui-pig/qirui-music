import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { HeaderWrapper } from './style'

export default memo(function ThemeHeader(props) {
  const { title,link } = props
  return (
    <HeaderWrapper>
      <div className="left">
        <i className="sprite_02 icon"></i>
        <h3 className="title">{title}</h3>
      </div>
      <div className="right">
        <NavLink to={{pathname:link}}>更多</NavLink>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
})
