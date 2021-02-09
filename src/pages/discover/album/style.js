import styled from 'styled-components'

export const AlbumWrapper = styled.div`
  padding:30px;
  border-left:1px solid #a1a1a1;
  border-right:1px solid #a1a1a1;
  .h-album{
    .header{
      height: 40px;
      border-bottom: 2px solid #87ceeb;
      display:flex;
      align-items:center;
      .title{
        font-size:22px;
        font-weight:500;
      }
      .type{
        margin-left:25px;
        display:flex;
        align-items:center;
        .active{
          background-color:#87ceeb;
          color:#fff;
        }
        .type-item{
          width:45px;
          /* height:40px; */
          /* line-height:40px; */
          padding:0px 10px;
          cursor: pointer;
          border-right:1px solid #999;
          &:last-child{
            border-right:1px;
          }
        }
      }
    }
    .h-list{
      .ant-skeleton {
        padding: 16px;
      }
      display:flex;
      align-items:center;
      flex-wrap:wrap;
      margin-left:-20px;
      margin-top:20px;
      margin-bottom:30px;
      .list-item{
        margin-left: 30px;
        width: 153px;
        height: 190px;
        .image{
          width: 153px;
          height: 140px;
          position: relative;
          .cover{
            position:absolute;
            left:0;
            top:0;
            width: 153px;
            height: 130px;
            background-position: 0px -845px;
          }
          &:hover{
            .play{
              background-position: 0px -140px;
            }
          }
          .play{
            left: 94px;
            width: 28px;
            height: 28px;
            bottom:15px;
            position:absolute;
          }
        }
        .name{
          margin: 3px 0px 3px;
          font-size: 14px;
          font-weight:500;
        }
        .artist{
          color:#999;
        }
      }
    }
  }
`