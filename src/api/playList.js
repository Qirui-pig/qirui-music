import request from './request'

export const getCatList = ()=>{
  return request({
    url:'playlist/catlist'
  })
}

export const getSongList = (cat,limit,offset)=>{
  return request({
    url:'top/playlist',
    params:{
      cat,
      limit,
      offset
    }
  })
}

export const getPlayGroup = id=>{
  return request({
    url:'playlist/detail',
    params:{
      id
    }
  })
} 

export const getPlayListComment = (id,limit)=>{
  return request({
    url:'comment/playlist',
    params:{
      id,limit
    }
  })
}