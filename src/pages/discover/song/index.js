import React, { memo, useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { Button, Pagination, Card, Tag } from 'antd'

import { QRSongWrapper } from './style'
import { getCatListAction, getSongListAction } from './store/actionCreators'
import { imageFormat, unitFormat, deWeightThree, getRandomColor } from '@/utils/format'

export default memo(function QRSong() {

  const dispatch = useDispatch()

  const { catList, songList, total } = useSelector(state => ({
    catList: state.getIn(['songList', 'catList']),
    songList: state.getIn(['songList', 'songList']),
    total: state.getIn(['songList', 'total'])
  }), shallowEqual)

  let deWeightTree = [...songList]
  // 拿到的数据会出现key重复的现象 为防止报错 去除重复的数据
  deWeightTree = deWeightThree(deWeightTree)

  useEffect(() => {
    dispatch(getCatListAction())
    dispatch(getSongListAction())
  }, [dispatch])
  
  const [title, setTitle] = useState('全部');

  // 分页
  const changePage = useCallback((page, pageSize) => {
    setCurrentPage(page)
    // console.log(page,pageSize)
    dispatch(getSongListAction(title, pageSize, (page - 1) * pageSize))
  }, [title,dispatch])

  // 接口暂时只支持2种类型
  // const catListCopy = [...catList]

  // const cats = ["语种", "风格", "场景", "情感", "主题"]

  // let cat0 = catListCopy.filter(item=>item.type===0)
  // let cat1 = catListCopy.filter(item=>item.type===1)
  // let cat2 = catListCopy.filter(item=>item.type===2)
  // let cat3 = catListCopy.filter(item=>item.type===3)
  // let cat4 = catListCopy.filter(item=>item.type===4)

  // let catListI = [cat0,cat1,cat2,cat3,cat4]
  // console.log(catListI)
  const [currentPage, setCurrentPage] = useState(1);

  const tagChange = (item) => {
    setTitle(item.name)
    setCurrentPage(1)
    dispatch(getSongListAction(item.name))
  }

  return (
    <QRSongWrapper className="wrap-v2">
      <div className="cat">
        <Card title='歌单类型' className="top-card">
          {
            catList.map(item => {
              return (
                <Tag onClick={e => tagChange(item)} key={item.name} className="tag-item" color={getRandomColor()}>{item.name}</Tag>
              )
            })
          }
        </Card>
      </div>
      <div className="header">
        <div className="header-left">
          <span>{title}</span>
          {/* <Button>选择分类</Button> */}
        </div>
        <Button className="red-btn">热门</Button>
      </div>
      <ul className="content">
        {
          deWeightTree.map(item => {
            return (
              <li key={item.coverImgUrl} className="item">
                <div className="image">
                  <img src={imageFormat(item.coverImgUrl, 140)} alt="" />
                  <NavLink to={{ pathname: "/discover/playGroup", state: { id: item.id } }} className="sprite_covor">123</NavLink>
                  <div className="bottom sprite_covor">
                    <i className="icon-header icon_all"></i>
                    <span className="counter">{unitFormat(item.playCount)}</span>
                  </div>
                </div>
                <div className="info">
                  <NavLink to={{ pathname: "/discover/playGroup", state: { id: item.id } }} className="name">{item.name}</NavLink>
                  <p className="creator">{item.creator.nickname}</p>
                </div>
              </li>
            )
          })
        }
      </ul>

      <Pagination style={{ 'textAlign': 'center' }} current={currentPage}  total={total} defaultPageSize={35} onChange={changePage} />
    </QRSongWrapper>
  )
})
