import React from 'react'

import QRDiscover from '@/pages/discover'
import QRRecommend from '@/pages/discover/recommend'
import QRRanking from '@/pages/discover/ranking'
import QRSong from '@/pages/discover/song'
import QRDjRadio from '@/pages/discover/djradio'
import QRArtist from '@/pages/discover/artist'
import QRAlbum from '@/pages/discover/album'

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
        path:'/discover',
        exact:true,
        render:()=>{
          <Redirect to="/discover/recommend"/>
        }
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
    ]
  },
  {
    path:'/friend',
    component:QRFriend
  },
  {
    path:'/mine',
    component:QRMine
  }
]

export default routes