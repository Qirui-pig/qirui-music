import request from './request'

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