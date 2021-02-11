import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { Carousel,Skeleton } from 'antd';
import ThemeHeader from '@/components/theme-header2'
import AlbumCover from '@/components/album-cover'
import { NewAlbumWrapper } from './style'
import { getNewAlbumAction } from '../../store/actionCreators'

export default memo(function NewAlbum() {

  const dispatch = useDispatch()

  const { newAlbum } = useSelector(state => ({
    newAlbum: state.getIn(['recommend', 'newAlbum'])
  }), shallowEqual)

  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  }, [dispatch])

  const albumRef = useRef()

  return (
    <NewAlbumWrapper>
      <ThemeHeader title="新碟上架" link="/discover/album"/>
      <div className="content">
        <button onClick={e => albumRef.current.prev()} className="arrow arrow-left sprite_02"></button>
        <div className="album">
          <Carousel ref={albumRef}>
            {
              [0, 1].map(item => {
                return (
                  <div key={item} className="page">
                    {
                      newAlbum.length>0 ? newAlbum.slice(item * 5, (item + 1) * 5).map(iten => {
                        return <AlbumCover key={iten.picUrl} info={iten} size={100} width={118} bgp="-570px" />
                      }):<Skeleton active paragraph={{ rows: 3 }}/>
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button onClick={e => albumRef.current.next()} className="arrow arrow-right sprite_02"></button>
      </div>
    </NewAlbumWrapper>
  )
})
