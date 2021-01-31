import React, {
  memo,
  useEffect,
  useState
} from 'react'

import { Tag } from 'antd'

import { DjDetailWrapper } from './style'
import { getDjDetail } from '@/api/djradio'
import react from '@/assets/svg/react.svg'
import { imageFormat } from '@/utils/format'
import LoadImage from '@/components/loading-image'

export default memo(function DjDetail(props) {
  let id = props.location.state.id
  const [detail, setDetail] = useState({});

  useEffect(() => {
  // 没有对应的音频  so功能待开发
  getDjDetail(id).then(res=>{
    setDetail(res.data.data)
  })
  }, [id]);
  // console.log(detail)

  return (
    <DjDetailWrapper className="wrap-v2">
      <div className="d-top">
        <div className="image">
          <LoadImage src={detail.picUrl} width={200} />
          <div className="cover sprite_covor"></div>
        </div>
        <div className="info">
          <div className="info-header">{detail.name}</div>
          <div className="creator">
            <img src={imageFormat(detail.dj&&detail.dj.avatarUrl,70)} alt=""/>
            <div className="name">{detail.dj&&detail.dj.nickname}</div>
          </div>
          <div className="desc">
            <Tag>{detail.category}</Tag><span>{detail.desc}</span>
          </div>
        </div>
      </div>
      <img src={react} alt='react' className="react-svg" />
      <p className="title">功能待完善</p>
    </DjDetailWrapper>
  )
})
