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

export function getTopList(){
  return request({
    url: "toplist",
  })
}

export function getTopListDetail(id){
  return request({
    url: "playlist/detail",
    params: {
      id
    }
  })
}