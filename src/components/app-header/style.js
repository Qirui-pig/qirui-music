import styled from 'styled-components';

import img from '@/assets/img/sprite_01.png'
import headerImage from '@/assets/img/bg.jpg'
import logo from '@/assets/img/qirui-logo.png'

export const HeaderWrapper = styled.div`
  height:75px;
  font-size:14px;
  background-image:url(${headerImage});
  background-position:center;
  background-size: cover;
  /* background-color:#242424; */
  .content{
    height:70px;
    /* background-color:skyblue; */
    display:flex;
    justify-content:space-between;

  }
  .divider{
    height:5px;
    background-color:rgba(39,92,98,.1)/* c20c20 */;
  }
`

export const HeaderLeft = styled.div`
  .music-svg{
    display: inline-block;
    vertical-align: middle;
    width: 40px;
    height: 60px;
    svg{
      width: 40px;
      height: 74px;
    }
  }
  display:flex;
  justify-content:space-between;
  .logo{
    display:block;
    text-indent:-999px;
    width:176px;
    height:69px;
    background-image:url(${logo});
    background-position:-80px 0 ;
    background-repeat:no-repeat;
    background-size:contain;
    margin-left:35px;
  }

  .select-list{
    display:flex;
    line-height:70px;
    .select-item{
      position:relative;
      a{
        display:block;
        padding:0 20px;
        color:#fff;
      }
      /* :last-of-type a{
        position: relative;
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${img});
          background-position:  -190px 0;
          top: 20px;
          right: -15px;
        }
      } */

      &:hover a, a.active{
        color:#FF6A6A;
        opacity:.4;
        background-color:	#BBFFFF;
        text-decoration:none;
      }

      /* .active .icon{
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      } */


    }
  }

`
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 12px;


  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #fff;
    border-radius: 16px;
    margin: 0 16px;
    background-color: transparent;
  }
`