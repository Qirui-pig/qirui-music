import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { Comment, List } from 'antd';

import { SongCommentWrapper } from './style'
import {formatMonthDay } from '@/utils/format'
 
export default memo(function SongComment() {

  const { comments } = useSelector(state => ({
    comments:state.getIn(['song','comments'])
  }),shallowEqual)



  return (
    <SongCommentWrapper>
      {/* <div className="header">评论</div> */}
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
    </SongCommentWrapper>
  )
})
