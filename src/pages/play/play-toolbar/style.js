import styled from 'styled-components'

export const PlayToolBarWrapper = styled.div`
  position:fixed;
  left:0;
  right:0;
  bottom:0;
  height:52px;
  background-position:0 0;
  background-repeat:repeat;

  .content{
    /* background-color:#fff; */
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:absolute;
    transform:translateX(-50%);
    left:50%;
    bottom:0;
    height:47px;
  } 
`

export const Control = styled.div`
  display:flex;
  align-items:center;
  width:137px;
  height:36px;

  .prev,.next{
    width:28px;
    height:28px;
  }

  .prev{
    background-position:0 -130px;
  }
  .next{
    background-position:-80px -130px;
  }
  .play{
    width:36px;
    height:36px;
    margin:0 9px;
    background-position:0 ${props=>props.isPlay?'-165px':'-204px'};
  }
`

export const PlayInfo = styled.div`
  width:642px;
  display:flex;
  align-items:center;

  .image{
    width:34px;
    height:34px;
    img{
      border-radius:5px;

    }
    border-radius:5px;
  }

  .info{
    flex:1;
    color:#a1a1a1;
    margin-left:10px;

    .song{
      color:#e1e1e1;
      position:relative;
      top:8px;
      left:8px;
      .songer-name{
        color:#a1a1a1;
        margin-left:10px;
      }
    }
  }

  .progress{
    display:flex;
    align-items:center;

    .ant-slider{
      width:493px;
      margin-left:10px;
    }

    .time{
      .now_time{
        color:#e1e1e1;
      }
      .divider{
        margin:0 3 px;
      }
    }
  }
`

export const Operator = styled.div`
  display:flex;
  position:relative;
  top:5px;

  .btn{
    width:25px;
    height:25px;
    cursor:pointer;
  }
  .left{
    .favor {
      background-position: -88px -163px;
    }

    .share {
      background-position: -114px -163px;
    }
  }

  .right{
    width:126px;
    padding-left:13px;
    background-position: -147px -248px;
    
    .volume {
      background-position: -2px -248px;
    }

    .loop{
      background-position: ${props => {
        switch(props.sequence) {
          case 1:
            return "-66px -248px"
          case 2:
            return "-66px -344px"
          default:
            return "-3px -344px"
        }
      }};
    }
    .playlist {
      width: 59px;
      background-position: -42px -68px;
    }
  }
`