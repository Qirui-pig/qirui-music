import styled from 'styled-components'

export const SimilarSongWrapper = styled.div`
  .title{
    height: 35px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    color: #333;
    font-size:16px;
    font-weight:600;
  }
  .item{
    position:relative;
    margin-top:10px;
    width:200px;
    height:32px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    .info{
      flex:1;
      height:32px;
      p{
        height:14px;
      }
      .song-name{
        font-size:14px;
      }
      .artist{
        font-size:10px;
        color:#a1a1a1;
      }
    }
    .operate{
      width:50px;
      margin-top:27px;
      .play,.add{
        width:20px;
        height:20px;
      }
      .play{
        margin-right: 16px;
        background-position: 0 0;
      }
      /* .add{
        background-position: -87px -454px;
      } */
    }
  }
`