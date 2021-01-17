import styled from 'styled-components'

export const QRSongWrapper = styled.div`
  background-color:#fff;
  border-left:1px solid #a1a1a1;
  border-right:1px solid #a1a1a1;
  padding:40px;
  .header{
    width:100%;
    height:40px;
    line-height:40px;
    border-bottom: 2px solid #c20c0c;
    display:flex;
    justify-content:space-between;
    align-items:center;
    .header-left{
      font-size: 24px;
      line-height:40px;
      font-weight: normal;
      .ant-btn{
        margin-left: 10px;
        line-height: 33px;
        height: 34px;
      }
    }
    .red-btn{
      background-color:#c20c0c;
      color:#fff;
    }
  }
`