import request from './request'

export const getPlayGroup = id=>{
  return request({
    url:'playlist/detail',
    params:{
      id
    }
  })
} 