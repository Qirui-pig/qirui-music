import React, { memo, useEffect, useState } from 'react'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'

import { Skeleton } from 'antd'
 
import { AlbumDetailWrapper } from './style'
import { getAlbumDetailAction } from '../store/actionCreators'
import LoadImage from '@/components/loading-image'
import SongTable from '@/components/song-table'

export default memo(function AlbumDetail(props) {
  let id = props.location.state.id
  const [isMore, setIsMore] = useState(false);

  const dispatch = useDispatch()

  const { albumDetail } = useSelector(state => ({
    albumDetail: state.getIn(['album', 'albumDetail'])
  }), shallowEqual)

  useEffect(() => {
    window.scroll(0,0)
    // 122204241
    dispatch(getAlbumDetailAction(id))
  }, [dispatch, id]);

  const album = albumDetail.album
  const songs = albumDetail.songs

  return (
    <AlbumDetailWrapper isMore={isMore} className="wrap-v2">
      {
        albumDetail.hasOwnProperty('album') ? (
          <div className="d-left">
            <div className="d-top">
              <div className="image">
                <LoadImage src={album.picUrl} width={177} />
                <div className="cover sprite_covor"></div>
              </div>
              <div className="info">
                <div className="title">{album.name}</div>
                <div className="ar">歌手：{album.artist && album.artists[0].name}</div>
                <div className="ar">发行公司：{album.company}</div>
              </div>
            </div>
            <div className="desc">
              <p className='ti'>专辑介绍：</p>
              <span>{album.description}</span>
            </div>
            <p onClick={e => setIsMore(!isMore)} className="more">{isMore ? '收起' : '展开'}</p>
            <SongTable tracks={songs} />
          </div>
        ):
        <Skeleton avatar active paragraph={{ rows: 6 }} />
      }
    </AlbumDetailWrapper>
  )
})
