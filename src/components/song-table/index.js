import React, { memo } from 'react'
import { useDispatch } from 'react-redux'

import { Table } from 'antd'

import { SongTableWrapper } from './style'
import { getCurrentSongAction } from '@/pages/play/store'
import { formatMinuteSecond } from '@/utils/format'

export default memo(function SongTable(props) {
  let { tracks } = props

  const dispatch = useDispatch()

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
      width: 100,
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
    <SongTableWrapper>
      <Table showHeader stripe columns={columns} dataSource={dataSource}></Table>
    </SongTableWrapper>
  )
})
