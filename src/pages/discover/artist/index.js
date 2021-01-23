import React, { memo, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { QRArtistWrapper } from './style'
import { getArtistAction } from './store/actionCreators'

export default memo(function QRArtist() {

  const [type, setType] = useState(0);
  const [area, setArea] = useState(0);

  const optionType = [{ type: -1, title: '全部' }, { type: 1, title: '男歌手' }, { type: 2, title: '女歌手' }, { type: 3, title: '乐队' }]
  const optionArea = [{ type: -1, title: '全部' }, { type: 7, title: '华语' }, { type: 96, title: '欧美' }, { type: 8, title: '日本' }, { type: 16, title: '韩国' }, { type: 0, title: '其他' }]

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getArtistAction(-1, -1, 25, 0))
  }, [dispatch])

  const getType = (area)=>{
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
    setType(index)
    let myarea = getType(area)
    
    dispatch(getArtistAction(item.type, myarea, 25, 0))
  }


  const areaClick = (item, index) => {
    // debugger
    setArea(index)
    dispatch(getArtistAction(type === 0 ? -1 : type, item.type, 25, 0))
  }

  return (
    <QRArtistWrapper className="wrap-v2">
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
    </QRArtistWrapper>
  )
})
