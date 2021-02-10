import styled from 'styled-components'

import bgImg from '@/assets/img/wrap3.png'

export const QRRankingWrapper = styled.div`
  .mr15{
    margin-right:15px;
  }
  /* .ant-table-tbody:nth-of-type(2n+0){
    background-color:#fafafa;
  } */
  .content {
    background: url(${bgImg}) repeat-y;
    background-color: #fff;
    display: flex;
    border-left:1px solid #a1a1a1;
    height:auto;
    .left{
      width:240px;
      height:auto;
      .ant-skeleton{
        padding: 8px;
      }
      .list-header{
        width: 240px;
        margin-top:25px;
        padding: 0 10px 12px 20px;
        font-size: 15px;
        font-weight:600;
        color: #000;
      }
      .item{
        &:hover{
          background-color:#f4f2f2;
        }

        height:70px;
        padding:10px 0 10px 20px;
        display:flex;
        .item-left{
          img{
            width:40px;
            height:40px;
            margin-top: 5px;
          }
        }
        .item-right{
          margin-left:7px;
          .name{
            width: 150px;
            overflow: hidden;
            margin-top: 2px;
            margin-bottom: 8px;
          }
          .time{
            vertical-align: middle;
            color:#a1a1a1;
          }
        }
      }
      .active{
        background-color:#e6e6e6;
      }
    }
    .right{
      /* width:740px; */
      .ant-skeleton {
        padding: 44px;
      }
      .toplist-top{
        /* width:740px; */
        height:238px;
        padding:40px;
        display:flex;
        .image{
          position:relative;
          padding:5px;
          border:1px solid #eee;
          /* img{
            width:150px;
            height:150px;
          } */
          .image-wrap{
            position:absolute;
            width: 150px;
            height: 150px;
            background-position: -230px -380px;
            top: 3px;
            left: 3px;
          }
        }
        .info{
          margin-left:25px;
          .title{
            line-height: 24px;
            font-size: 20px;
            font-weight: normal;
          }
          .time{
            i{
              width: 13px;
              height: 13px;
              background-position: -18px -682px;
              float: left;
              margin-top: 4px;
              margin-right:5px;
            }
            color:#a1a1a1;
            margin: 9px 0 0 3px;
            margin-bottom:10px;
          }
        }
      }
      .toplist-table{
        margin:0 40px;
        .table-header{
          height: 40px;
          border-bottom: 2px solid#87CEFA;
          display:flex;
          align-items:center;
          justify-content:space-between;
          .title{
            font-size: 20px;
            line-height: 28px;
            span{
              font-size:15px;
              color:#a1a1a1;
            }
          }
          .play{
            color:#a1a1a1;
            .count{
              color:#c20c0c;
              display:inline;
              font-weight:600;
            }
          }
        }
        .icon{
          background-position: 0 -103px;
          width: 17px;
          height: 17px;
          cursor: pointer;
        }
        
      }
    }
  }
`