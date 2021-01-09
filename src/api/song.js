import request from './request'

export const getCurrentSong = (ids) => {
  return request({
    url:'song/detail',
    params:{
      ids
    }
  })
}