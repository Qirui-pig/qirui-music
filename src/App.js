import React, { memo } from 'react'
import {renderRoutes} from 'react-router-config'
import { HashRouter } from 'react-router-dom'

import routes from './router'

import QRAppHeader from 'components/app-header'
import QRAppFooter from 'components/app-footer'


export default memo(function App() {
  return (
    <HashRouter>
      <QRAppHeader/>
      {renderRoutes(routes)}
      <QRAppFooter/>
    </HashRouter>
  )
})

