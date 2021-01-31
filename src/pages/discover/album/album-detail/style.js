import styled from 'styled-components'
import bgImg from '@/assets/img/wrap-bg.png'

export const AlbumDetailWrapper = styled.div`
  padding:30px;
  border-right:1px solid #a1a1a1;
  border-left:1px solid #a1a1a1;
  background: url(${bgImg}) repeat-y;
  .d-left{
    width:709px;
    padding-right:50px;
    .d-top{
      display:flex;
      align-items:center;
      .image{
        width:209px;
        height:177px;
        position: relative;
        .cover{
          position: absolute;
          left:0;
          top:0;
          width: 209px;
          height: 177px;
          background-position: 0 -986px;
        }
      }
      .info{
        margin-left:40px;
        .title{
          line-height: 24px;
          font-size: 20px;
          font-weight: normal;
        }
        .ar{
          margin-top: 4px;
          line-height: 18px;
          color: #666;
        }
      }
    }
    .desc{
      padding:15px 0;
      height:${props=>props.isMore?'auto':'140px'};
      overflow:hidden;
      .ti{
        font-weight:bold;
      }     
    }
    .more{
      text-align:right;
      color:skyblue;
      cursor: pointer;
    }
  
  }
`