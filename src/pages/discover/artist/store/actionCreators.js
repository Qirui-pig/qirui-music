import { getArtist, getArtistSong, getArtistAlbum, getArtistDesc } from '@/api/artist'
import * as actionTypes from './constans'

export const changeArtistAction = (artistList)=>({
  type:actionTypes.CHANGE_ARTIST_LIST,
  artistList
})

export const changeArtistSongAction = (artistSong)=>({
  type:actionTypes.CHANGE_ARTIST_SONG,
  artistSong
})

export const changeArtistAlbumAction = (artistAlbum)=>({
  type:actionTypes.CHANGE_ARTIST_ALBUM,
  artistAlbum
})

export const changeArtistDescAction = (artistDesc)=>({
  type:actionTypes.CHANGE_ARTIST_DESC,
  artistDesc
})

export const getArtistAction = (type,area,limit,offset)=>{
  return dispatch=>{
    getArtist(type,area,limit,offset).then(res=>{
      dispatch(changeArtistAction(res.data.artists))
    })
  }
}

export const getArtistSongAction = (id)=>{
  return dispatch=>{
    getArtistSong(id).then(res=>{
      dispatch(changeArtistSongAction(res.data.songs))
    })
  }
}

export const getArtistAlbumAction = (id)=>{
  return dispatch=>{
    getArtistAlbum(id).then(res=>{
      dispatch(changeArtistAlbumAction(res.data.hotAlbums))
    })
  }
}

export const getArtistDescAction = (id)=>{
  return dispatch=>{
    getArtistDesc(id).then(res=>{
      dispatch(changeArtistDescAction(res.data))
    })
  }
}