import styled from "styled-components";

export const DrawerContentWrapper = styled.div`
  .top-image{
    background-image:url(${props => props.imageUrl});
    width:100%;
    height:300px;
    background-position:center;
    background-size:cover;
  }
`

export const AlbumWrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  .album-item{
    width:118px;
    margin-left:19px;
    height:146px;
    .image{
      width:118px;
      height:100px;
      position:relative;
      i{
        cursor:pointer;
        position:absolute;
        left:0;
        right:0;
        width:118px;
        height:100px;
        top:0;
        background-position: 0 -570px;
      }
    }
    .info{
      padding-top:10px;
      .name{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
      }
    }
  }
`
export const SongerDetailWrapper = styled.div`
  
`