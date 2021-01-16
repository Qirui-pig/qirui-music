import styled from 'styled-components'
import bgImg from '@/assets/img/wrap-bg.png'


export const PlayGroupWrapper  = styled.div`
  .content {
    background: url(${bgImg}) repeat-y;
    background-color: #fff;
    display: flex;
    .left{
      width: 710px;
      height: auto;
      padding: 20px 40px 40px 30px;
      .main-top{
        display:flex;
        /* border-bottom:1px solid #eee; */
        /* justify-content:space-between; */
        .image{
          position:relative;
          span{
            position:absolute;
            background-position: 0 -1285px;
            width: 208px;
            height: 208px;
            top: -4px;
            left: -4px;
          }
        }
        .info{
          padding: 0 40px;
          .title{
            line-height: 24px;
            font-size: 20px;
            font-weight: normal;
            margin-bottom:10px;
          }
          .auth{
            img{
              margin-right:15px;
            }
            span{
              color:skyblue;
            }
            margin-bottom:10px;
          }
          .tags{
            .item{
              width: auto;
              height: 28px;
              padding: 6px 10px;
              border: 1px solid #eee;
              display: inline;
              margin: 0 5px;
              background-color: rgba(143,219,243,.8);
              border-radius: 11px;
              color: #fff;
            }
            margin-bottom:10px; 
          }
          .desc{
            padding:20px 0;
            margin-top: 4px;
            line-height: 18px;
            color: #666;
          }
        }
      }
      .song-table{
        .icon{
          background-position: 0 -103px;
          width: 17px;
          height: 17px;
          cursor: pointer;
        }
      }
    }
    .right{
      width: 270px;
      padding: 20px 40px 40px 30px;
    }
  }
`