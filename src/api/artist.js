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