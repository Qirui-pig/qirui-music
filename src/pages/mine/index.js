import React, { memo, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import { MvWrapper } from './style'
import { getNewMv, getRecommendMv, getAllMv } from '@/api/mv.js'
import LoadImage from '@/components/loading-image'

export default memo(function QRMine () {
  const list = ['全部', '内地', '港台', '欧美', '日本', '韩国']

  const [currentIndex, setCurrentIndex] = useState(0)
  const [newMvList, setNewMvList] = useState([])
  const [recommendMvList, setRecommendMvList] = useState([])
  const [allMvList, setAllMvList] = useState([])

  useEffect(() => {
    getNewMv().then(res => {
      setNewMvList([...res.data.data])
    })
    getRecommendMv().then(res => {
      setRecommendMvList([...res.data.result])
    })
    getAllMv().then(res => {
      setAllMvList([...res.data.data])
    })
  }, [])

  const typeChange = (item, index) => {
    setCurrentIndex(index)
    getAllMv(10, 0, item).then(res => {
      setAllMvList([...res.data.data])
    })
  }


  return (
    <MvWrapper className="wrap-v2">
      <div className="m-box">
        <div className="m-header">
          <span className="title">最新MV</span>
        </div>
        <ul className="m-content">
          {
            newMvList && newMvList.map(item => {
              return (
                <li key={item.cover} className="item">
                  <NavLink to={{ pathname: '/mvdetail', state: { id: item.id } }}>
                    <div className="image">
                      <LoadImage src={item.cover} radio={3} width={175} height={107} />
                    </div>
                    <div className="play icon_all"></div>
                    <div className="info">
                      <p className="artist text-nowrap">{item.name}</p>
                      <p className="name text-nowrap">{item.artistName}</p>
                    </div>
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      </div>

      <div className="m-box">
        <div className="m-header">
          <span className="title">推荐MV</span>
        </div>
        <ul className="m-content" style={{ height: 200 + 'px' }} >
          {
            recommendMvList && recommendMvList.map(item => {
              return (
                <li key={item.cover} className="item">
                  <NavLink to={{ pathname: '/mvdetail', state: { id: item.id } }}>
                    <div className="image">
                      <LoadImage src={item.cover || item.picUrl} radio={3} width={175} height={107} />
                    </div>
                    <div className="play icon_all"></div>
                    <div className="info">
                      <p className="text-nowrap">{item.name}</p>
                      <p className="artist text-nowrap">{item.artistName}</p>
                    </div>
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      </div>

      <div className="m-box">
        <div className="m-header">
          <span className="title">最新MV</span>
          <ul className="list">
            {
              list.map((item, index) => {
                return <li key={item} onClick={e => typeChange(item, index)} className={['list-item ', currentIndex === index ? 'active' : ''].join('')}>{item}</li>
              })
            }
          </ul>
        </div>
        <ul className="m-content">
          {
            allMvList && allMvList.map(item => {
              return (
                <li key={item.cover} className="item">
                  <NavLink to={{ pathname: '/mvdetail', state: { id: item.id } }}>
                    <div className="image">
                      <LoadImage src={item.cover} radio={3} width={175} height={107} />
                    </div>
                    <div className="play icon_all"></div>
                    <div className="info">
                      <p className="text-nowrap">{item.name}</p>
                      <p className="text-nowrap artist">{item.artistName}</p>
                    </div>
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      </div>


    </MvWrapper>
  )
})
