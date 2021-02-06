import React from 'react'
import { Redirect } from 'react-router-dom'

// const QRDiscover =  React.lazy(_=>import('@/pages/discover')) 
// const QRRecommend =  React.lazy(_=>import('@/pages/discover/recommend')) 
// const QRRanking =  React.lazy(_=>import('@/pages/discover/ranking')) 
// const QRSong =  React.lazy(_=>import('@/pages/discover/song')) 
// const QRDjRadio =  React.lazy(_=>import('@/pages/discover/djradio')) 
// const QRArtist =  React.lazy(_=>import('@/pages/discover/artist')) 
// const QRAlbum =  React.lazy(_=>import('@/pages/discover/album')) 
// const SongDetail =  React.lazy(_=>import('@/pages/play')) 
// const PlayGroup =  React.lazy(_=>import('@/pages/discover/play-list')) 
// const DjDetail =  React.lazy(_=>import('@/pages/discover/djradio/dj-detail')) 
// const AlbumDetail =  React.lazy(_=>import('@/pages/discover/album/album-detail')) 
// const QRFriend =  React.lazy(_=>import('@/pages/friend')) 
// const QRMine =  React.lazy(_=>import('@/pages/mine')) 
import QRDiscover from '@/pages/discover'
import QRRecommend from '@/pages/discover/recommend'
import QRRanking from '@/pages/discover/ranking'
import QRSong from '@/pages/discover/song'
import QRDjRadio from '@/pages/discover/djradio'
import QRArtist from '@/pages/discover/artist'
import QRAlbum from '@/pages/discover/album'
import SongDetail from '@/pages/play'
import PlayGroup from '@/pages/discover/play-list'
import DjDetail from '@/pages/discover/djradio/dj-detail'
import AlbumDetail from '@/pages/discover/album/album-detail'

import QRFriend from '@/pages/friend'
import QRMine from '@/pages/mine'
import MvDetail from '@/pages/mine/mv-detail'


const routes = [
  {
    path:'/',
    exact: true,
    render:()=>(<Redirect to="/discover"/>)
  },
  {
    path:'/discover',
    component:QRDiscover,
    routes:[
      {
        exact:true,
        path:'/discover',
        render:()=>(
          <Redirect to="/discover/recommend"/>
        )
      },  
      {
        path:'/discover/recommend',
        component:QRRecommend
      },
      {
        path:'/discover/ranking',
        component:QRRanking
      },
      {
        path:'/discover/songs',
        component:QRSong
      },
      {
        path:'/discover/djradio',
        component:QRDjRadio
      },
      {
        path:'/discover/artist',
        component:QRArtist
      },
      {
        path:'/discover/album',
        component:QRAlbum
      },
      {
        path:'/discover/detail',
        component:SongDetail
      },
      {
        path:'/discover/playGroup',
        component:PlayGroup
      },
      {
        path:'/discover/djDetail',
        component:DjDetail
      },
      {
        path:'/discover/albumDetail',
        component:AlbumDetail
      }
    ]
  },
  {
    path:'/friend',
    component:QRFriend
  },
  {
    path:'/mine',
    component:QRMine
  },
  {
    path:'/mvdetail',
    component:MvDetail
  },
  
]

export default routes