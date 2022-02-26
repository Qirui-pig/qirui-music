import React, { 
Suspense
 } from 'react'
import { renderRoutes, } from 'react-router-config'
import { HashRouter, } from 'react-router-dom'
import { Provider } from 'react-redux'

import routes from './router'
import store from './store'

import QRAppHeader from 'components/app-header'
import QRAppFooter from 'components/app-footer'
import PlayToolBar from './pages/play/play-toolbar'
import LoadingPage from './components/loading-page'

export default function App () {
  return (
    <Provider store={store}>
      <HashRouter>
        <QRAppHeader />
        <Suspense fallback={<LoadingPage/>}>
          {renderRoutes(routes)}
        </Suspense>
        <QRAppFooter />
        <PlayToolBar />
      </HashRouter>
    </Provider>
  )
}

