import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { HeaderWrapper } from './style'

export default memo(function ThemeHeader(props) {
  const { title,keywords=[],link } = props
  console.log(link)
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
        <NavLink to={{pathname:link}}>更多</NavLink>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
})
