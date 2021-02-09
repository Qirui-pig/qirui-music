import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { Skeleton } from 'antd'

import { getDjCatAction,changeCurrentTypeAction } from './store/actionCreators'
import { DjRadioWrapper } from './style'
import DjHome  from './cpn/dj-home'
import DjType from './cpn/dj-type'

export default memo(function QRDjRadio () {

  const dispatch = useDispatch()

  const { djCat,currentType } = useSelector(state => ({
    djCat: state.getIn(['djRadio', 'djCat']),
    currentType:state.getIn(['djRadio', 'currentType'])
  }), shallowEqual)

  useEffect(() => {
    window.scrollTo(0,0)
    dispatch(getDjCatAction())
    dispatch(changeCurrentTypeAction(''))
  }, [dispatch])

  // 主页内容不再使用redux管理 只有切换时使用redux进行数据管理

  const changeType = (id)=>{
    dispatch(changeCurrentTypeAction(id))
  }

  return (
    <DjRadioWrapper className="wrap-v2">
      {/* todo tab切换栏 */}
      <ul className="tab-content">
        {
          djCat?djCat.map(item=>{
            return (
              <li onClick={e=>changeType(item.id)} key={item.id} className={["tab-item ",item.id===currentType?'active':''].join('')}>
                <div className="image">
                  <img src={item.picMacUrl} alt=""/>
                  <p className="name">{item.name}</p>

                </div>
              </li>
            )
          }):<Skeleton active paragraph={{ rows: 4 }}/>
        }
      </ul>
      {/* 判断current-type是否存在 如果不存在 就是默认radio推荐页 在则是另外一个组件 */}
      {
        currentType==='' ? <DjHome/>:(<DjType type={currentType}/>)
      }
    </DjRadioWrapper>
  )
})
