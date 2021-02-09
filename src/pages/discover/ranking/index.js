import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import LazyLoad from 'react-lazyload';

import { Table, Statistic, Image, Spin, Skeleton } from 'antd';

import { QRRankingWrapper } from './style'
import { getTopListAction, getTopListDetailAction } from './store/actionCreators'
import { getCurrentSongAction } from '../../play/store'
import { imageFormat, formatMonthDay, formatMinuteSecond } from '@/utils/format'

export default memo(function QRRanking(props) {

  const dispatch = useDispatch()

  const { topList, topListDetail } = useSelector(state => ({
    topList: state.getIn(['ranking', 'topList']),
    topListDetail: state.getIn(['ranking', 'topListDetail'])
  }), shallowEqual)


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getTopListAction())
  }, [dispatch])

  useEffect(() => {
    if (props.location.state) {
      window.scrollTo(0, 0)
      dispatch(getTopListDetailAction(props.location.state.id))
      setCurrentIndex(-1)
    } else {
      dispatch(getTopListDetailAction(19723756))
    }
  }, [dispatch, props])

  const changeList = (item, index) => {
    // console.log()
    setCurrentIndex(index)
    dispatch(getTopListDetailAction(item.id))
  }

  const imgUrl = (topListDetail && imageFormat(topListDetail.coverImgUrl, 150)) || ''
  const title = (topListDetail && topListDetail.name) || ''
  const updateTime = (topListDetail && formatMonthDay(topListDetail.updateTime)) || ''
  const desc = (topListDetail && topListDetail.description) || ''
  const count = (topListDetail && topListDetail.playCount) || ''

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
      imgUrl: imageFormat(al.picUrl, 50),
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
        <div onClick={e => getSong(id)} className="sprite_table icon">&nbsp;</div>
      )
    },
    {
      title: '歌曲标题',
      key: 'name',
      dataIndex: 'name',
      ellipsis: true,
      width: 300,
      render: (name, row) => (
        row.index < 4 ? <div key={row.id}><img className="mr15" src={row.imgUrl} alt="" /><a href="/">{name}</a></div> : <a key={row.id} href="/">{name}</a>
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
            topList ? (
              topList.map((item, index) => {
                return (
                  <div className={["item ", currentIndex === index ? 'active' : ''].join('')} key={item.name} onClick={e => changeList(item, index)}>
                    <div className="item-left">
                      <LazyLoad height={40}>
                        <Image src={imageFormat(item.coverImgUrl, 40)} height={40} width={40} preview={false} placeholder={<Spin style={{ textAlign: 'center', padding: '10px' }} />} />
                      </LazyLoad>
                    </div>
                    <div className="item-right">
                      <p className="name">{item.name}</p>
                      <p className="time">{item.updateFrequency}</p>
                    </div>
                  </div>
                )
              }) 
            ) : <Skeleton avatar active paragraph={{ rows: 2 }} />
          }

        </div>
        <div className="right">
          <div className="toplist-top">
            <div className="image">
              <LazyLoad height={150}>
                <Image src={imgUrl} width={150} height={150} preview={false} placeholder={<Spin style={{ padding: '70px' }} size="small" />} />
              </LazyLoad>
              <i className="image-wrap sprite_covor"></i>
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
                播放：<Statistic className="count" value={count}></Statistic>次
              </div>
            </div>
            <Table showHeader columns={columns} dataSource={dataSource}></Table>
          </div>
        </div>
      </div>
    </QRRankingWrapper>
  )
})
