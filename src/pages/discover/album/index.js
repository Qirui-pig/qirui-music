import React, { memo, useEffect, useState, useCallback } from 'react'
import { useDispatch, shallowEqual, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { Pagination,Skeleton } from 'antd'

import { AlbumWrapper } from './style'
import { getHotAlbumAction, getAllAlbumAction } from './store/actionCreators'
import LoadImage from '@/components/loading-image'

export default memo(function QRAlubm() {
  const type = [{ name: '全部', type: 'ALL' }, { name: '华语', type: 'ZH' }, { name: '欧美', type: 'EA' }, { name: '韩国', type: 'KR' }, { name: '日本', type: 'JP' }]
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentType, setCurrentType] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch()

  const { hotAlbum, allAlbum } = useSelector(state => ({
    hotAlbum: state.getIn(['album', 'hotAlbum']),
    allAlbum: state.getIn(['album', 'allAlbum'])
  }), shallowEqual)

  useEffect(() => {
    window.scrollTo(0,0)
    dispatch(getHotAlbumAction('ALL', 'hot'))
    dispatch(getAllAlbumAction(0))
  }, [dispatch]);

  const typeChange = (item, index) => {
    setCurrentPage(1)
    setCurrentIndex(index)
    setCurrentType(item.type)
    dispatch(getAllAlbumAction(0, item.type))
  }

  const changePage = useCallback((page, pageSize) => {
    window.scroll(0, 0)
    setCurrentPage(page)
    dispatch(getAllAlbumAction(page * pageSize, currentType))
  }, [dispatch, currentType])

  return (
    <AlbumWrapper className="wrap-v2">
      <div className="h-album">
        <div className="header">
          <span className='title'>热门新碟</span>
        </div>
        <ul className="h-list">
          {
            hotAlbum?(hotAlbum.map(item => {
              return (
                <NavLink to={{ pathname: '/discover/albumDetail', state:{ id: item.id } }}>
                  <li className="list-item" key={item.id}>
                    <div className="image">
                      <LoadImage width={140} src={item.picUrl} />
                      <div className="play icon_all"></div>
                      <div className="cover sprite_covor"></div>
                    </div>
                    <div className="name">{item.name}</div>
                    <div className="artist text-nowrap">{item.artist && item.artist.name}</div>
                  </li>
                </NavLink>
              )
            })):<Skeleton active  paragraph={{ rows: 6 }}/>
          }
        </ul>
      </div>
      <div className="h-album">
        <div className="header">
          <span className='title'>全部新碟</span>
          <ul className="type">
            {
              type.map((item, index) => {
                return <li onClick={e => typeChange(item, index)} className={['type-item ', currentIndex === index ? 'active' : ''].join('')} key={item.name}>{item.name}</li>
              })
            }
          </ul>
        </div>
        <ul className="h-list">
          {
            allAlbum.map(item => {
              return (
                <NavLink to={{ pathname: '/discover/albumDetail', state:{ id: item.id } }}>
                  <li className="list-item" key={item.id}>
                    <div className="image">
                      <LoadImage width={140} src={item.picUrl} />
                      <div className="play icon_all"></div>
                      <div className="cover sprite_covor"></div>
                    </div>
                    <div className="name text-nowrap">{item.name}</div>
                    <div className="artist text-nowrap">{item.artist && item.artist.name}</div>
                  </li>
                </NavLink>
              )
            })
          }
        </ul>
        <Pagination style={{ 'textAlign': 'center', 'marginBottom': '10px' }} showSizeChanger={false} current={currentPage} total={500} onChange={changePage} defaultPageSize={35} />

      </div>
    </AlbumWrapper>
  )
})
