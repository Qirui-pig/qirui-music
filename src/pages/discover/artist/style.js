import styled from 'styled-components'
import bg_singer from '@/assets/img/bg_singer.jpg'

export const QRArtistWrapper = styled.div`
  border-left:1px solid #a1a1a1;
  border-right:1px solid #a1a1a1;
  .art-top{
    width:100%;
    height:202px;
    background-image:url(${bg_singer});
    background-size: contain;
    background-position:center;
  }
  .art-cat{
    margin:15px 0 0 20px;
    .r-flex{
      display:flex;
      align-items:center;
      padding-bottom: 3px;
      .item{
        height: 26px;
        line-height: 27px;
        overflow: hidden;
        padding: 0 8px;
        margin: 0 12px 14px 0;
        cursor:pointer;
      }
      .active{
        background-color:#31c27c;
        color:#fff;
      }
    }
  }
  .art-content{
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    justify-content:space-around;
    .ant-skeleton-content {
      padding: 24px;
    }
    .art-person{
      padding:25px;
      .image{
        img{
          width:140px;
          height:140px;
          border-radius:70px;
        }  
      }
      .name{
        margin-top:10px;
        display:block;
        font-size: 16px;
        font-weight: 400;
        text-align:center;
        cursor:pointer;
        &:hover{
          color: #31c27c;
        }
      }
      
    }
  }

`

