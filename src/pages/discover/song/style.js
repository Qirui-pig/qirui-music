import styled from 'styled-components'

export const QRSongWrapper = styled.div`
  background-color:#fff;
  border-left:1px solid #a1a1a1;
  border-right:1px solid #a1a1a1;
  padding:40px;
  .cat{
    display:flex;
    justify-content:space-evenly;
    .top-card{
      width:100%;
      height:300px;
      margin:10px;
    }
    .tag-item{
      margin:7px;
      cursor:pointer;
    }
  }
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
  .content{
    display:flex;
    /* justify-content:space-between; */
    align-items:center;
    flex-wrap:wrap;
    margin-left:-20px;
    .item{
      /* background-color:skyblue; */
      display: inline-block;
      width: 180px;
      height: 210px;
      overflow: hidden;
      padding: 10px 0px 30px 40px;
      line-height: 1.4;
      .image{
        width: 100%;
        height: 100%;
        overflow: hidden;
        transition: all 0.6s;    //设置动画执行的时间为0.6s
        cursor: pointer;
        &:hover{
          transform: scale(1.1);
        }
        width:140px;
        height:140px;
        position:relative;
        cursor:pointer;
        a{
          text-indent:-999px;
          width: 140px;
          height: 140px;
          position:absolute;
          left:0;
          right:0;
          top:0;
          background-position:0 0;
        }
        .bottom{
          color: #ccc;
          position:absolute;
          left:0;
          right:0;
          bottom:0;
          height: 27px;
          background-position: 0 -537px;
          color: #ccc;
          .icon-header{
            width: 14px;
            height: 11px;
            background-position: 0 -24px;
            margin: 9px 5px 9px 10px;
            position: absolute;
          }
          .counter{
            position: absolute;
            left:30px;
            bottom:3px;
          }
        }
      }
      .info{
        margin: 8px 0 3px;
        font-size: 14px;
        .name{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
        }
        .creator{
          color:#a1a1a1;
          font-size:12px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
        }
      }
    }
  }
`