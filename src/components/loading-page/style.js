import styled from 'styled-components'
import loadingBg from '../../assets/img/loading-bg.png'

export const LoadingPageWrapper = styled.div`
  padding:40px;
  height:500px;
  width:1040px;
  margin:0 auto;
  // background-image:url(${loadingBg});
  background-position:center;
  opacity:.5;
  background-size:cover;
  position:relative;
  .spin{
    left:50%;
    width:100%;
    height:50px;
    text-align:center;
    margin:100px auto;
    margin-bottom:50px;
  }
  .l-canvas{
    left:0;
    top:0;
    right:0;
    position:absolute;
    width:100%;
    height:500px;
  }
  p{
    text-align:center;
    font-size:24px;
    font-weight:normal;
    color:skyblue;
  }
`