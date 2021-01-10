import styled from 'styled-components'

export const SongCommentWrapper = styled.div`
  width:100%;
  height:auto;
  .header{
    position: relative;
    top: 1px;
    margin-left:25px;
    height: 40px;
    line-height:40px;
    font-size:18px;
    border-bottom: 1px solid #cfcfcf;
  }
  .comment-list{
    padding:25px;
    .ant-list-header{
      font-size:19px;
      font-weight:600;
    }
  }
`