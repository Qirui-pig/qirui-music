import styled from 'styled-components'
import bg_singer from '@/assets/img/bg_singer.jpg'

export const QRArtistWrapper = styled.div`
  border-left:1px solid #a1a1a1;
  border-right:1px solid #a1a1a1;
  .art-top{
    width:100%;
    height:202px;
    background-image:url(${bg_singer});
    background-size: contain;
    background-position:center;
  }
  .art-cat{
    margin:15px 0 0 20px;
    .r-flex{
      display:flex;
      align-items:center;
      padding-bottom: 3px;
      .item{
        height: 26px;
        line-height: 27px;
        overflow: hidden;
        padding: 0 8px;
        margin: 0 12px 14px 0;
        cursor:pointer;
      }
      .active{
        background-color:#31c27c;
        color:#fff;
      }
    }
  }
`