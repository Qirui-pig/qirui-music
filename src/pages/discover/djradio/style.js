import styled from 'styled-components'

export const DjRadioWrapper = styled.div`
  height:auto;
  padding:30px;
  border-left:1px solid #a1a1a1;
  border-right:1px solid #a1a1a1;
  .tab-content{
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    .tab-item{
      display: block;
      width: 70px;
      height: 70px;
      text-align: center;
      margin: 0 0 25px 33px;
      color: #888;
      
      .image{
        margin: 2px auto 0;
        width:60px;
        height:80px;
        overflow: hidden;
        cursor:pointer;
        border-radius: 5px;
        &:hover{
          background-color:rgba(138,138,138,.4);
        }
      }
      
    }
    .active{
        img{
          margin-left:-60px;    
        }
        color:rgb(232,54,54);
      }
  }
`