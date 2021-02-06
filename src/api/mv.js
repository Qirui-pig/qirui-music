import request from './request.js'

// 最新 mv
export const getNewMv = (limit=10)=>{
  return request({
    url:'mv/first',
    params:{
      limit
    }
  })
}

// 推荐 mv
export const getRecommendMv = ()=>{
  return request({
    url:'personalized/mv',
  })
}

// 全部mv
// 全部,内地,港台,欧美,日本,韩国
export const getAllMv = (limit=10,offset=0,area)=>{
  return request({
    url:'mv/all',
    params:{
      limit,
      offset,
      area,
    }
  })
}
// mv排行榜
export const getMvRanking = (limit=10,offset)=>{
  return request({
    url:'top/mv',
    params:{
      limit,
      offset,
    }
  })
}

// 获取 mv 数据
export const getMvDetail = (mvid)=>{
  return request({
    url:'mv/detail',
    params:{
      mvid
    }
  })
}

// 播放 mv/视频
export const getMvVideo = (id)=>{
  return request({
    url:'mv/url',
    params:{
      id
    }
  })
}

// mv 评论
export const getMvComment = (id)=>{
  return request({
    url:'comment/mv',
    params:{
      id
    }
  })
}

// 相似 mv
export const similarMv = (mvid)=>{
  return request({
    url:'simi/mv',
    params:{
      mvid
    }
  })
}