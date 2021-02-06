import React, { memo, useEffect,useState } from 'react'

import DPlayer from "react-dplayer";
import { List,Comment } from 'antd'
 
import { MvDetailWrapper } from './style'
import { getMvDetail, getMvVideo,getMvComment } from '@/api/mv.js'
import { formatMonthDay } from '@/utils/format'

export default memo(function MvDetail (props) {
  let id = props.location.state.id
  // console.log(props.location.state.id)

  const [videoUrl, setVideoUrl] = useState(null)
  const [videoDetail, setVideoDetail] = useState({})
  const [mvComment, setMvComment] = useState([])

  useEffect(() => {
    // 10849296

    getMvDetail(id).then(res => {
      setVideoDetail(res.data.data)
    })
    getMvVideo(id).then(res => {
      setVideoUrl(res.data.data.url)
    })
    getMvComment(id).then(res=>{
      setMvComment([...res.data.hotComments])
    })
  }, [id])

  return (
    <MvDetailWrapper className="wrap-v2">
      <p className="title">{videoDetail.name}</p>
      <p>{videoDetail.artistName}</p>
      {
        videoUrl?<DPlayer options={{video: { url: videoUrl } }}/>:''
      }
      <List
        className="comment-list"
        header='评论'
        itemLayout="horizontal"
        dataSource={mvComment}
        renderItem={item => (
          <li>
            <Comment
              author={item.user.nickname}
              avatar={item.user.avatarUrl}
              content={item.content}
              datetime={formatMonthDay(item.time)}
            />
          </li>
        )}
      />
    </MvDetailWrapper>
  )
})
