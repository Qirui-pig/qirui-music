import React, { memo } from 'react'

import { HeaderWrapper } from './style'

export default memo(function ThemeHeader(props) {
  const { title,keywords } = props
  return (
    <HeaderWrapper>
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {
            keywords.map(item=>{
              return (
              <div className="item" key={item}>
                <a href="/">{item}</a>
                <span className="divider">|</span>
              </div>)
            })
          }
        </div>
      </div>
      <div className="right">
        <a href="/">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
})
