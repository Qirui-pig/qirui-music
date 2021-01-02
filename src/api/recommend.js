import request from './request'

export function getTopBanner(){
  return request({
    url:'banner'
  })
}

export function getHotRecommend(limit){
  return request({
    url: "personalized",
    params: {
      limit
    }
  })
}

export function getNewAlbum(limit){
  return request({
    url: "top/album",
    params: {
      limit
    }
  })
}