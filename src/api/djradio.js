import request from './request'

// 电台banner
export const getDjBanner = ()=>{
  return request({
    url:'dj/banner'
  })
}

// 获取电台分类
export const getDjCat = ()=>{
  return request({
    url:'dj/catelist'
  })
}

// 推荐节目
export const getRecommendProgram = ()=>{
  return request({
    url:'program/recommend'
  })
}

// 节目排行榜
export const getProgramRanking = (limit)=>{
  return request({
    url:'dj/program/toplist',
    params:{
      limit
    }
  })
}

// 获取默认首页分类的推荐歌单
export const getDjCatRecommend = ()=>{
  return request({
    url:'dj/category/recommend'
  })
}

// 获取电台tab中 不同类别推荐
export const getDjByType = (type)=>{
  return request({
    url:'dj/recommend/type',
    params:{
      type
    }
  })
}

// 获取电台tab中 最热电台 暂不支持分页  自己分
export const getDjHotByType = (cateId)=>{
  return request({
    url:'dj/radio/hot',
    params:{
      cateId
    }
  })
}

// 电台详情
export const getDjDetail = (rid)=>{
  return request({
    url:'dj/detail',
    params:{
      rid
    }
  })
}

// 节目详情
export const getProgramDetail = (id)=>{
  return request({
    url:'dj/program/detail',
    params:{
      id
    }
  })
}