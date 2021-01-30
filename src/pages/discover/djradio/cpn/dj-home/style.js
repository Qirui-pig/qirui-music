import styled from 'styled-components'
import play from '@/assets/img/icn_ply.png'

export const DjHomeWrapper = styled.div`
  .center{
    padding-top:25px;
    display:flex;
    align-items:center;
    justify-content:space-between;
   .programs{
     width:426px;
     height:643px;
     .p-header{
      height: 40px;
      border-bottom: 2px solid skyblue;
      color: #333;
      font-size:22px;
      font-weight:500;
     }
     .list{
        border:1px solid #ccc;
        .list-item{
          width: 424px;
          height: 60px;
          padding: 10px;
          &:hover{
            background-color:#eee;
            .image{
              .play{
                cursor:pointer;
                background-image:url(${play});
              }
            }
          }
          .image{
            position:relative;
            .play{
              width: 22px;
              height: 22px;
              left:9px;
              top:9px;
              position: absolute;
            }
          }
          .creator{
            margin-top:3px;
            color:#a1a1a1;
          }
          .p-tag{
            cursor:pointer;
            margin-left:5px;
            margin-top:10px;
          }
        }
        .bg{
          background-color:#eee;
        }
      }
   }
   
  }
  .dj{
    margin-top:15px;
     .dj-header{
        font-size:22px;
        font-weight:500;
        border-bottom: 2px solid skyblue;
      }
     .dj-list{
       display:flex;
       align-items:center;
       justify-content:space-evenly;
       .dj-item{
         width:300px;
         height:161px;
         padding:25px 0;
         .info{
           padding:25px;
          .name{
            font-size:18px;
            font-weight:600;
            margin-bottom:5px;
          }
          .desc{
            color:#999
          }
         }
       }
     }
   }
`

export const ImageItem = styled.div`
  img{
    width:920px;
    height:320px;
  }
`