import styled from 'styled-components'

export const NewAlbumWrapper = styled.div`


  .content{
    height:186px;
    background-color:#f5f5f5;
    border:1px solid #d3d3d3;
    margin:20px 0 37px;
    display:flex;
    align-items:center;
    .arrow{
      width:25px;
      height:25px;
      cursor:pointer;
    }
    .arrow-left{
      background-position:-260px -75px;
    }
    .album{
      width:650px;
      height:150px;
      .page{
        display:flex !important;
        justify-content:space-between;
        align-items:center;

      }
    }
    .arrow-right{
      background-position:-300px -75px;
    }
  }


` 