import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { Table } from 'antd';

import { QRRankingWrapper } from './style'
import { getTopListAction, getTopListDetailAction } from './store/actionCreators'
import { getCurrentSongAction } from '../../play/store'
import { imageFormat, formatMonthDay,formatMinuteSecond } from '@/utils/format'

export default memo(function QRRanking() {

  const dispatch = useDispatch()

  const { topList, topListDetail } = useSelector(state => ({
    topList: state.getIn(['ranking', 'topList']),
    topListDetail: state.getIn(['ranking', 'topListDetail'])
  }), shallowEqual)

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(getTopListAction())
  }, [dispatch])

  useEffect(() => {
    dispatch(getTopListDetailAction(19723756))
  }, [dispatch])

  const changeList = (item, index) => {
    // console.log()
    setCurrentIndex(index)
    dispatch(getTopListDetailAction(item.id))
  }

  const imgUrl = (topListDetail && imageFormat(topListDetail.coverImgUrl, 150)) || ''
  const title = (topListDetail && topListDetail.name) || ''
  const updateTime = (topListDetail && formatMonthDay(topListDetail.updateTime)) || ''
  const desc = (topListDetail && topListDetail.description)||''
  const count = (topListDetail && topListDetail.playCount)||''

  const tracks = (topListDetail && topListDetail.tracks) || []

  const getSong = (id) => {
    dispatch(getCurrentSongAction(id))
  }

  const dataSource = []
  tracks.map((item, index) => {
    const { name, ar, dt, al, id } = item
    // debugger
    let params = {
      index: index + 1,
      imgUrl:imageFormat(al.picUrl,50),
      id,
      name,
      artist: ar[0].name,
      time: formatMinuteSecond(dt),
    }
    dataSource.push(params)
    return item
  })

  const columns = [
    {
      title: '',
      key: 'index',
      dataIndex: 'index',
      width: 50,
    },
    {
      title: '',
      key: 'id',
      dataIndex: 'id',
      width: 40,
      render: id => (
          <div  onClick={e => getSong(id)} className="sprite_table icon">&nbsp;</div>
      )
    },
    {
      title: '歌曲标题',
      key: 'name',
      dataIndex: 'name',
      ellipsis: true,
      width: 300,
      render: (name,row) => (
        row.index < 4 ? <div key={row.id}><img className="mr15" src={row.imgUrl} alt=""/><a href="/">{name}</a></div> : <a key={row.id} href="/">{name}</a>
      )
    },
    {
      title: '时长',
      key: 'time',
      dataIndex: 'time',
    },
    {
      title: '歌手',
      key: 'artist',
      width: 150,
      ellipsis: true,
      dataIndex: 'artist',
    },
  ]

  return (
    <QRRankingWrapper className="wrap-v2">
      <div className="content">
        <div className="left">
          <div className="list-header">
            云音乐榜单
          </div>
          {
            topList.map((item, index) => {
              return (
                <div className={["item ", currentIndex === index ? 'active' : ''].join('')} key={item.name} onClick={e => changeList(item, index)}>
                  <div className="item-left">
                    <img src={imageFormat(item.coverImgUrl, 40)} alt="" />
                  </div>
                  <div className="item-right">
                    <p className="name">{item.name}</p>
                    <p className="time">{item.updateFrequency}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="right">
          <div className="toplist-top">
            <div className="image">
              <img src={imgUrl} alt="" />
              <span className="sprite_covor"></span>
            </div>
            <div className="info">
              <div className="title">{title}</div>
              <div className="time">
                <i className="sprite_icon2"></i>
                <span>更新时间：{updateTime}</span>
              </div>
              <div>{desc}</div>
            </div>
          </div>
          <div className="toplist-table">
            <div className="table-header">
              <div className="title">
                歌曲列表<span>{tracks.length}首歌</span>
              </div>
              <div className="play">
                播放：<span className="count">{count}</span>次
              </div>
            </div>
            <Table showHeader columns={columns} dataSource={dataSource}></Table>
          </div>
        </div>
      </div>
    </QRRankingWrapper>
  )
})
