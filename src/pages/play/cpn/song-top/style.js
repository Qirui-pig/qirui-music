import styled from 'styled-components'

export const SongTopWrapper = styled.div`
  width:710px;
  display:flex;
  .song-top{
    padding:20px;
    display:flex;
    justify-content:space-between;
    .image{
    width:198px;
    height:198px;
    position: relative;
    margin-right:40px;
      img{
        width:130px;
        height:130px;
        margin:34px;
      }
      span{
        position:absolute;
        width: 206px;
        height: 205px;
        top: -4px;
        left: -4px;
        background-position: -140px -580px;
      }
    }
    .song-content{
      margin-left:25px;
      .title{
        display:flex;
        align-items:center;
        /* i{
          width:54px;
          height:24px;
          background-position:0 -463px;
        } */
        font-size:24px;
        margin-bottom:10px;
      }
      .p1{
        font-size:14px;
        color:#a1a1a1;
        a{
          color:skyblue;
        }
        margin-bottom:10px;
      }
      .lyric-list{
        height:${props=>props.isShowMore?'auto':'258px'};
        overflow:hidden;
        margin-top:13px;
        
      }
      .show-more{
        color:skyblue;
        margin-top:15px;
      }
    }
  }
`