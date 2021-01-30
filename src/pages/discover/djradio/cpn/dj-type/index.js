import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
// import { Pagination } from 'antd'

import { DjTypeWrapper } from './style'
import { getDjDetailByTypeAction } from '../../store/actionCreators'
import LoadImage from '@/components/loading-image'

export default memo(function DjType(props) {
  const { type } = props

  const dispatch = useDispatch()
  const { currentRecommend, currentHotDj } = useSelector(state => ({
    currentRecommend: state.getIn(['djRadio', 'currentRecommend']),
    currentHotDj: state.getIn(['djRadio', 'currentHotDj'])
  }))

  useEffect(() => {
    window.scrollTo(0,0)
    dispatch(getDjDetailByTypeAction(type))
  }, [dispatch, type]);

  return (
    <DjTypeWrapper>
      <div className="good-dj">
        <div className="header">优秀电台</div>
        <ul className="list">
          {
            currentRecommend.map(item => {
              return (
                <li className="list-item">
                  <NavLink to={{ pathname: '/discover/djDetail', state: { id: item.id } }}>
                    <LoadImage src={item.picUrl} width={150} />
                    <p className="name text-nowrap">{item.name}</p>
                    <p className="desc">{item.rcmdtext}</p>
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      </div>

      <div className="hot-dj">
        <div className="header">电台排行榜</div>
        <ul className="hot-list">
          {
            currentHotDj.map(item => {
              return (
                <li key={item.picUrl} className="list-item">
                  <NavLink to={{ pathname: '/discover/djDetail', state: { id: item.id } }}>
                    <LoadImage src={item.picUrl} width={120} />
                  </NavLink>
                  <NavLink to={{ pathname: '/discover/djDetail', state: { id: item.id } }}>
                    <div className="info">
                      <div className="name">{item.name}</div>
                      <div className="creator">{item.dj && item.dj.nickname}</div>
                      <div className="period">共{item.programCount}期  订阅{item.subCount}次</div>
                    </div>
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      </div>
      {/* <Pagination style={{ 'textAlign': 'center' }} current={currentPage}  total={total} defaultPageSize={35} onChange={changePage} /> */}
    </DjTypeWrapper>
  )
})
