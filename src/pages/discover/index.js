import React, { memo, useEffect } from 'react'
import { NavLink,withRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import { dicoverMenu } from '@/common/local-data'
import request from '@/api/request'

import { DiscoverWrapper, TopMenu } from './style'

function QRDiscover(props) {
  
  useEffect(() => {
    request({url:'banner'}).then(res=>{
      
    })
    return () => {
      
    };
  }, []);

  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            dicoverMenu.map(item=>{
              return (
                <div className="item" key={item.title}>
                  <NavLink to={`/discover${item.link}`} >{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      {renderRoutes(props.route.routes)}
    </DiscoverWrapper>
  )
}

export default memo(withRouter(QRDiscover))