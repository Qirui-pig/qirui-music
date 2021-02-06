import styled from 'styled-components'

export const MvWrapper = styled.div`
  padding:30px;
  border-left:1px solid #a1a1a1;
  border-right:1px solid #a1a1a1;
  .m-box{
    margin-bottom:25px;
    .m-header{
      height:50px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      border-bottom:2px solid skyblue;
      .title{
        font-size:20px;
        font-weight:normal;
        color:#000;
      }
      .list{
        display:flex;
        align-items:center;
        justify-content:space-between;
        .list-item{
          margin-right:5px;
          cursor:pointer;
          color:#a1a1a1;
          text-align:center;
          border-right:1px solid #a1a1a1;
          width:40px;
          &:last-child{
            border-right:1px ;
          }
        }
        .active{
          background-color:skyblue;
          border-radius:8px;
          color:#fff;
        }
      }
    }
    .m-content{
      width:100%;
      height:350px;
      display:flex;
      align-items:center;
      flex-wrap:wrap;
      justify-content:space-between;
      .item{
        position:relative;
        cursor:pointer;
        .image{
          width:175px;
          height:107px;
        }
        &:hover{
        .play{
            background-position: 0px -140px;
          }
        }
        .play{
          right: 5px;
          width: 28px;
          height: 28px;
          top: 75px;
          position:absolute;
        }
        .info{
          width:175px;
          .artist{
            color:#a1a1a1;
          }
        }
      }
    }
  }
`