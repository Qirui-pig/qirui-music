import request from './request'

export const getArtist = (type,area,limit,offset)=>{
  return request({
    url:'artist/list',
    params:{
      type,
      area,
      limit,
      offset
    }
  })
}

export const getArtistSong = (id)=>{
  return request({
    url:'artist/top/song',
    params:{
      id
    }
  })
}

export const getArtistAlbum = (id)=>{
  return request({
    url:'artist/album',
    params:{
      id
    }
  })
}

export const getArtistDesc = (id)=>{
  return request({
    url:'artist/desc',
    params:{
      id
    }
  })
}