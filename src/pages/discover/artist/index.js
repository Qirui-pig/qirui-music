import React, { memo, useState, useEffect, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { Pagination, Drawer,Image,Spin } from 'antd'

import { QRArtistWrapper } from './style'
import { getArtistAction,getArtistSongAction,getArtistAlbumAction,getArtistDescAction } from './store/actionCreators'
import { imageFormat } from '@/utils/format'
import QRDrawerContent from './cpn/drawer'

export default memo(function QRArtist() {

  const [type, setType] = useState(0);
  const [area, setArea] = useState(0);
  const [currentPage, setCurrentPage] = useState(1)
  const [name, setName] = useState('')
  const [imageUrl, setImageUrl] = useState('');

  const [visible, setVisible] = useState(false);

  const optionType = [{ type: -1, title: '全部' }, { type: 1, title: '男歌手' }, { type: 2, title: '女歌手' }, { type: 3, title: '乐队' }]
  const optionArea = [{ type: -1, title: '全部' }, { type: 7, title: '华语' }, { type: 96, title: '欧美' }, { type: 8, title: '日本' }, { type: 16, title: '韩国' }, { type: 0, title: '其他' }]

  const dispatch = useDispatch()

  const { artistList } = useSelector(state => ({
    artistList: state.getIn(['artist', 'artistList'])
  }), shallowEqual)

  useEffect(() => {
    window.scrollTo(0,0)
    dispatch(getArtistAction(-1, -1, 25,))
  }, [dispatch])

  const getType = (area) => {
    switch (area) {
      case 0:
        return -1
      case 1:
        return 7
      case 2:
        return 96
      case 3:
        return 8
      case 4:
        return 16
      case 5:
        return 0
      default:
        return -1
    }
  }

  const typeClick = (item, index) => {
    setCurrentPage(1)
    setType(index)
    let myarea = getType(area)

    dispatch(getArtistAction(item.type, myarea, 25,))
  }


  const areaClick = (item, index) => {
    setCurrentPage(1)
    // debugger
    setArea(index)
    dispatch(getArtistAction(type === 0 ? -1 : type, item.type, 25,))
  }

  const changePage = useCallback((page, pageSize) => {
    setCurrentPage(page)
    let myArea = getType(area)
    dispatch(getArtistAction(type === 0 ? -1 : type, myArea, 25, pageSize * page))
  }, [dispatch, area, type])

  const showDrawer = (item) => {
    setImageUrl(imageFormat(item.picUrl,640))
    setName(item.name)

    dispatch(getArtistSongAction(item.id))
    dispatch(getArtistAlbumAction(item.id))
    dispatch(getArtistDescAction(item.id))

    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <QRArtistWrapper className="wrap-v2" >
      <div className="art-top"></div>
      <div className="art-cat">
        <div className="r-flex art-type">
          {
            optionType.map((item, index) => {
              return (
                <div key={item.title} onClick={e => typeClick(item, index)} className={["item ", type === index ? 'active' : ''].join('')}>{item.title}</div>
              )
            })
          }
        </div>
        <div className="r-flex art-area">
          {
            optionArea.map((item, index) => {
              return (
                <div key={item.title} onClick={e => areaClick(item, index)} className={["item ", area === index ? 'active' : ''].join('')} >{item.title}</div>
              )
            })
          }
        </div>
      </div>

      <div className="art-content">
        {
          artistList.map(item => {
            return (
              <div key={item.id} className="art-person">
                <div className="image" onClick={e=>showDrawer(item)}>
                  <Image src={imageFormat(item.picUrl, 280)} width={140} height={140} preview={false} placeholder={<Spin style={{textAlign: 'center',padding:'60px'}} />} />
                </div>
                <span className="name" onClick={e=>showDrawer(item)} >{item.name}</span>
              </div>
            )
          })
        }
        <Pagination  style={{ 'textAlign': 'center','marginBottom':'10px' }} showSizeChanger={false} current={currentPage} total={500} onChange={changePage} />

      </div>
      <Drawer width={640} title={name} placement="right" closable={false} onClose={onClose} visible={visible}>
        <QRDrawerContent imageUrl={imageUrl}/>
      </Drawer>
    </QRArtistWrapper>
  )
})
