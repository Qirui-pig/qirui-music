import React, { memo } from 'react'
import { useSelector } from 'react-redux'

import { Tabs, Descriptions,Image } from 'antd';

import { DrawerContentWrapper, AlbumWrapper, SongerDetailWrapper } from './style'
import SongTable from '@/components/song-table'
import { imageFormat } from '@/utils/format'

export default memo(function QRDrawerContent(props) {
  const { TabPane } = Tabs;

  const { artistSong, artistAlbum, artistDesc } = useSelector(state => ({
    artistSong: state.getIn(['artist', 'artistSong']),
    artistAlbum: state.getIn(['artist', 'artistAlbum']),
    artistDesc: state.getIn(['artist', 'artistDesc']),
  }))


  return (
    <DrawerContentWrapper imageUrl={props.imageUrl}>
      <div className="top-image"></div>
      <Tabs defaultActiveKey="1">
        <TabPane tab="热门歌曲" key="1">
          <SongTable tracks={artistSong} />
        </TabPane>
        <TabPane tab="专辑" key="2">
          <AlbumWrapper>
            {
              artistAlbum.map(item => {
                return (
                  <div key={item.id} className="album-item">
                    <div className="image">
                      <Image src={imageFormat(item.picUrl, 100)} width={118} height={100} placeholder='加载中...' />
                      <i className="image_cover"></i>
                    </div>
                    <div className="info">
                      <div className="name">
                        {item.name}
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </AlbumWrapper>
        </TabPane>
        <TabPane tab="歌手信息" key="3">
          <SongerDetailWrapper>
            <Descriptions title="简介" layout="vertical">
              <Descriptions.Item >{artistDesc.briefDesc}</Descriptions.Item>
            </Descriptions>
            <Descriptions title="详细" bordered>
              {
                artistDesc?artistDesc.introduction.map(item=>{
                  return (
                    <Descriptions.Item key={item.ti}  span={4} label={item.ti} >{item.txt}</Descriptions.Item>
                  )
                }):''
              }
            </Descriptions>
          </SongerDetailWrapper>
        </TabPane>
      </Tabs>
    </DrawerContentWrapper>
  )
})
