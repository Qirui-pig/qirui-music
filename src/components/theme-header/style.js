import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display:flex;
  justify-content:space-between;

  height:33px;
  padding: 0 10px 4px 34px;
  background-position: -225px -156px;
  border-left: 2px solid #87CEFA;

  .left{
    display:flex;
    align-items:center;
    .title{
      font-size:20px;
      font-family:"Microsoft Yahei", Arial, Helvetica, sans-serif;
      margin-right:20px;
    }
    .keyword{
      display:flex;
      .item{
        .divider{
          margin: 0 15px;
          color:#ccc;
        }
      }
    }
  }
 
  .right{
    display:flex;
    align-items:center;
    .icon{
      display:inline-block;
      width:12px;
      height:12px;
      margin-left:4px;
      background-position: 0 -240px;
    }
  }
` 