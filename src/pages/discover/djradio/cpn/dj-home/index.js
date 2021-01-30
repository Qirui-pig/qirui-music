import React, { memo, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Carousel, Row, Col, Tag } from 'antd'
// import ReactAplayer from 'react-aplayer';

import { DjHomeWrapper, ImageItem } from './style'
import { getDjBanner, getRecommendProgram, getProgramRanking, getDjCatRecommend, getSongUrl } from '@/api/djradio'
import LoadImage from '@/components/loading-image'
// import {imageFormat} from '@/utils/format'

export default memo(function DjHome() {
  const [banners, setBanners] = useState([]);
  const [recommend, setRecommend] = useState([]);
  const [ranking, setRanking] = useState([])
  const [typeList, setTypeList] = useState([])
  // const [audio, setAudio] = useState({
  //   theme: '#87CEEB',
  //   lrcType: 3,
  //   audio: [
  //   ]
  // });

  useEffect(() => {
    window.scrollTo(0, 0)
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


  // const onPlay = () => {
  //   console.log('on play');
  // };

  // const onPause = () => {
  //   console.log('on pause');
  // };

  // // example of access aplayer instance
  // const onInit = ap => {
  //   console.log(ap)
  // };

  const changeSong = (item) => {
    getSongUrl(item.mainTrackId).then(res => {
      if (res.data.data[0].url !== '') {
        window.open(res.data.data[0].url)
        // let song = {
        //   name:item.name,
        //   artist:item.dj.brand,
        //   url:res.data.data[0].url,
        //   cover:imageFormat(item.coverUrl,100),
        //   theme:'#87CEEB'
        // }
        // let audioC = {...audio}
        
        // audioC.audio.push(song)
        // setAudio(audioC)
        // console.log(audio)

      }
    })
  }
  

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
      {/* <div>
        <ReactAplayer
          {...audio}
          onInit={onInit}
          onPlay={onPlay}
          onPause={onPause}
        />
      </div> */}
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
                        <i className="play" onClick={e => changeSong(item)}></i>
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
                let iten = item.program
                return (
                  <li key={iten.coverUrl} className={['list-item ', index % 2 !== 1 ? 'bg' : ''].join('')}>
                    <Row>
                      <Col className="image" span={4}>
                        <LoadImage src={iten.coverUrl} width={40} alt="" />
                        <i className="play" onClick={e => changeSong(iten)}></i>
                      </Col>
                      <Col span={16}>
                        <p className="name text-nowrap">{iten.name}</p>
                        <p className="creator text-nowrap">{iten.dj && iten.dj.nickname}</p>
                      </Col>
                      <Col span={4}>
                        <Tag className="p-tag">{iten.radio && iten.radio.category}</Tag>
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
        typeList.map(item => {
          return (
            <div key={item.categoryName} className="dj">
              <div className="dj-header">{item.categoryName}</div>
              <ul className="dj-list">
                {
                  item.radios && item.radios.map(iten => {
                    return (
                      <li className="dj-item">
                        <NavLink to={{ pathname: '/discover/djDetail', state: { id: iten.id } }}>
                          <Row>
                            <Col span={10}>
                              <LoadImage src={iten.picUrl} width={120} />
                            </Col>
                            <Col className="info" span={14}>
                              <p className="name text-nowrap">{iten.name}</p>
                              <p className="desc">{iten.rcmdText}</p>
                            </Col>
                          </Row>
                        </NavLink>
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
