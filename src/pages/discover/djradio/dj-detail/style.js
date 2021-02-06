import styled from 'styled-components'

export const DjDetailWrapper = styled.div`
  padding:30px;
  border-left:1px solid #a1a1a1;
  border-right:1px solid #a1a1a1;
  position: relative;
  .d-top{
    padding:30px;
    display:flex;
    align-items:center;
    .image{
      width:200px;
      height:200px;
      position: relative;
      
    }
    .cover{    
        position:absolute;
        width: 208px;
        height: 208px;
        background-position: 0 -1285px;
        top: -4px;
        left: -4px;
      }
    .info{
      margin-left:15px;
      .info-header{
        line-height: 24px;
        font-size: 20px;
        font-weight: normal;
        margin-bottom:5px;
      }
      .creator{
        display:flex;
        margin-bottom:5px;
        img{
          width:35px;
          height:35px;
          margin-right:10px;
        }
        .name{
          height:35px;
          line-height:35px;
          color: #0c73c2;
        }
      }
      .desc{
        span{
          margin-top: 4px;
          line-height: 18px;
          color: #666;
        }
      }
    }
  }
  .react-svg{
    display: inline-block;
    vertical-align: middle;
    /* margin: 0 auto; */
    position: absolute;
    left: 50%;
    top:50%;
    opacity:.4;
    transform: translateX(-50%);
  }
  .title{
    height:300px;
    text-align: center;
    font-size: 22px;
    opacity:.4;
    color: skyblue;
    font-weight: 600;
  }
`