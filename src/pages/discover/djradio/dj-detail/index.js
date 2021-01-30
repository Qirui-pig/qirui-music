import React, { memo, 
  // useEffect 
} from 'react'

import { DjDetailWrapper } from './style'
// import { getDjDetail,getProgramDetail } from '@/api/djradio'
import react from '@/assets/svg/react.svg'

export default memo(function DjDetail(props) {
  // let id = props.location.state.id

  // useEffect(() => {
    // 没有对应的音频  so功能待开发
    // getDjDetail(id).then(res=>{
    //   console.log(res)
    // })
    // getProgramDetail(id).then(res=>{
    //   console.log(res)
    // })
  // }, [id]);

  return (
    <DjDetailWrapper className="wrap-v2">
      <img src={react} alt='react'  className="react-svg" />
      <p className="title">功能待完善</p>
    </DjDetailWrapper>
  )
})
