import request from './request'

export const getCurrentSong = (ids) => {
  return request({
    url:'song/detail',
    params:{
      ids
    }
  })
}

export const getLyric = (id) => {
  return request({
    url:'lyric',
    params:{
      id
    }
  })
}

// limit: 取出评论数量 , 默认为 20
// offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
// before: 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到)
export const getComment = (id,limit='',offset='',before='') => {
  return request({
    url:'comment/music',
    params:{
      id,
      limit,
      offset,
      before
    }
  })
}