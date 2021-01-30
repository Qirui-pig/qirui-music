import styled from 'styled-components'

export const DjTypeWrapper = styled.div`
  .header{
    font-size:22px;
    font-weight:500;
    border-bottom:2px solid skyblue;
  }
  .good-dj{
    .list{
      display:flex;
      flex-wrap:wrap;
      align-items:center;
      justify-content:space-between;
      width:100%;
      .list-item{
        width:170px;
        height:215px;
        padding:10px 0;
        .name{
          font-size:12px;
          padding:5px 0px;
        }
        .desc{
          color:#999;
          font-size:10px;
        }
      }
    }
  }
  .hot-dj{
    .hot-list{
      display:flex;
      align-items:center;
      flex-wrap:wrap;
      .list-item{
        margin-left:15px;
        width:48%;
        height:155px;
        padding:15px 0px;
        border-bottom:1px solid #eee;
        display:flex;
        align-items:center;
        .info{
          margin-left:15px;
          .name{
            font-size:17px;
            font-weight:600;
            padding-bottom:10px;
          }
          .period{
            color:#a1a1a1;
            font-size:12px;
          }
        }
      }
    }
  }
`