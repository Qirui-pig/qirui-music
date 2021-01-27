import request from './request'

// 新碟上架
// area: ALL:全部,ZH:华语,EA:欧美,KR:韩国,JP:日本
// type : new:全部 hot:热门,默认为 new
export const getNewAlbum = (area,type)=>{
  return request({
    url:'top/album',
    params:{
      limit:10,
      area,
      type
    }
  })
}

// 获取全部歌单
export const getAllAlbum = (limit=35,offset,area='ALL')=>{
  return request({
    url:'album/new',
    params:{
      limit,
      offset,
      area,
    }
  })
}

// 获取歌单详情
export const getAlbumDetail = (id)=>{
  return request({
    url:'/album',
    params:{
      id
    }
  })
}