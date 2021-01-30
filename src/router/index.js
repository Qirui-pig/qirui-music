import React from 'react'

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

import QRFriend from '@/pages/friend'
import QRMine from '@/pages/mine'
import { Redirect } from 'react-router-dom'


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
]

export default routes