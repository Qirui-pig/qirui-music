import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { Divider, Table, Comment, List } from 'antd';

import { PlayGroupWrapper } from './style'
import { getPlayGroupAction, getPlayListCommentAction } from './store/actionCreators'
import { imageFormat, formatMonthDay, formatMinuteSecond } from '@/utils/format'
import { getCurrentSongAction } from '../../play/store'

export default memo(function PlayGroup(props) {

  const dispatch = useDispatch()

  const { playGroup, playListComment } = useSelector(state => ({
    playGroup: state.getIn(['playGroup', 'playGroup']),
    playListComment: state.getIn(['playGroup', 'playListComment'])
  }), shallowEqual)

  useEffect(() => {
    window.scrollTo(0, 0)
    let id = props.location.state.id
    if (props.location.state !== {}) {
      dispatch(getPlayGroupAction(id))
      dispatch(getPlayListCommentAction(id))
    }
    // dispatch(getPlayGroupAction(5461296669))
  }, [props.location.state, dispatch])

  console.log(playGroup)
  const playGroupImg = (playGroup && imageFormat(playGroup.coverImgUrl, 200)) || ''
  const playGroupTitle = (playGroup && playGroup.name) || ''
  const authImg = (playGroup.creator && imageFormat(playGroup.creator.avatarUrl, 35)) || ''
  const authName = (playGroup.creator && playGroup.creator.nickname) || ''
  const tags = (playGroup && playGroup.tags) || []
  const desc = (playGroup && playGroup.description) || ''
  const tracks = (playGroup && playGroup.tracks) || []
  const createTime = (playGroup && formatMonthDay(playGroup.trackUpdateTime)) || ''

  const comments = (playListComment && playListComment) || []

  const getSong = (id) => {
    dispatch(getCurrentSongAction(id))
  }

  const dataSource = []
  tracks.map((item, index) => {
    const { name, ar, dt, al, id } = item
    let params = {
      index: index + 1,
      id,
      name,
      artist: ar[0].name,
      time: formatMinuteSecond(dt),
      album: al.name
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
        <>
          <div onClick={e => getSong(id)} className="sprite_table icon">&nbsp;</div>
        </>
      )
    },
    {
      title: '歌曲标题',
      key: 'name',
      dataIndex: 'name',
      ellipsis: true,
      width: 150,
      render: name => <a href="/">{name}</a>
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
    {
      title: '专辑',
      key: 'album',
      dataIndex: 'album',
      ellipsis: true,

    }
  ]



  return (
    <PlayGroupWrapper className="wrap-v2">
      <div className="content">
        <div className="left">
          <div className="main-top">
            <div className="image">
              <img src={playGroupImg} alt="" />
              <span className="sprite_covor"></span>
            </div>
            <div className="info">
              <p className="title">{playGroupTitle}</p>
              <div className="auth">
                <img src={authImg} alt="" />
                <span>{`${authName} ${createTime}  创建`}</span>
              </div>
              <div className="tags">
                标签：
                {
                  tags.map(item => {
                    return (
                      <div className="item" key={item}>
                        {item}
                      </div>
                    )
                  })
                }
              </div>
              <div className="desc">{desc}</div>

            </div>
          </div>
          <Divider />
          <div className="song-table">
            <Table showHeader stripe columns={columns} dataSource={dataSource}></Table>
          </div>

          <div className="comment">
            <List
              className="comment-list"
              header='评论'
              itemLayout="horizontal"
              dataSource={comments}
              renderItem={item => (
                <li>
                  <Comment
                    author={item.user.nickname}
                    avatar={item.user.avatarUrl}
                    content={item.content}
                    datetime={formatMonthDay(item.time)}
                  />
                </li>
              )}
            />
          </div>
        </div>
        <div className="right"></div>
      </div>
    </PlayGroupWrapper>
  )
})
