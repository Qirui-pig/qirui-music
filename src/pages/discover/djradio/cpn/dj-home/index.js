import React, { memo, useEffect, useState } from 'react'

import { Carousel, Row, Col, Tag } from 'antd'

import { DjHomeWrapper, ImageItem } from './style'
import { getDjBanner, getRecommendProgram, getProgramRanking, getDjCatRecommend } from '@/api/djradio'
import LoadImage from '@/components/loading-image'

export default memo(function DjHome() {
  const [banners, setBanners] = useState([]);
  const [recommend, setRecommend] = useState([]);
  const [ranking, setRanking] = useState([])
  const [typeList, setTypeList] = useState([])

  useEffect(() => {
    getDjBanner().then(res => {
      setBanners([...res.data.data])
    })
    getRecommendProgram().then(res => {
      setRecommend([...res.data.programs])
    })
    getProgramRanking().then(res => {
      let list = res.data.toplist.splice(0, 10)
      setRanking([...list])
    })
    getDjCatRecommend().then(res => {
      setTypeList([...res.data.data])
    })
  }, []);

  console.log(typeList)

  return (
    <DjHomeWrapper>
      {/* banners */}
      <Carousel autoplay>
        {
          banners.map(item => {
            return (
              <ImageItem key={item.pic} >
                <img src={item.pic} alt={item.typeTitle} />
              </ImageItem>
            )
          })
        }
      </Carousel>
      {/* program */}
      <div className="center">
        <div className="programs">
          <div className="p-header">推荐节目</div>
          <ul className="list">
            {
              recommend.map((item, index) => {
                return (
                  <li key={item.coverUrl} className={['list-item ', index % 2 !== 1 ? 'bg' : ''].join('')}>
                    <Row>
                      <Col className="image" span={4}>
                        <LoadImage src={item.coverUrl} width={40} alt="" />
                        <i className="play"></i>
                      </Col>
                      <Col span={16}>
                        <p className="name text-nowrap">{item.name}</p>
                        <p className="creator text-nowrap">{item.dj && item.dj.brand}</p>
                      </Col>
                      <Col span={4}>
                        <Tag className="p-tag">{item.radio && item.radio.category}</Tag>
                      </Col>
                    </Row>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="programs">
          <div className="p-header">节目排行榜</div>
          <ul className="list">
            {
              ranking.map((item, index) => {
                return (
                  <li key={item.program.coverUrl} className={['list-item ', index % 2 !== 1 ? 'bg' : ''].join('')}>
                    <Row>
                      <Col className="image" span={4}>
                        <LoadImage src={item.program.coverUrl} width={40} alt="" />
                        <i className="play"></i>
                      </Col>
                      <Col span={16}>
                        <p className="name text-nowrap">{item.program.name}</p>
                        <p className="creator text-nowrap">{item.program.dj && item.program.dj.nickname}</p>
                      </Col>
                      <Col span={4}>
                        <Tag className="p-tag">{item.program.radio && item.program.radio.category}</Tag>
                      </Col>
                    </Row>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
      {/* different type */}
      {
        typeList.map(item=>{
          return(
            <div key={item.categoryId} className="dj">
              <div className="dj-header">{item.categoryName}</div>
              <ul className="dj-list">
                {
                  item.radios&&item.radios.map(iten=>{
                    return(
                      <li className="dj-item">
                        <Row>
                          <Col span={10}>
                            <LoadImage src={iten.picUrl} width={120}/>
                          </Col>
                          <Col className="info" span={14}>
                            <p className="name text-nowrap">{iten.name}</p>
                            <p className="desc">{iten.rcmdText}</p>
                          </Col>
                        </Row>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          )
        })
      }
    </DjHomeWrapper>
  )
})
