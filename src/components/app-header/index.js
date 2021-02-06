import React, {
  memo, useState,
  // useEffect
} from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { Input, Modal, Form, Button, message } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { ReactSVG } from 'react-svg'

import { headerLinks } from '@/common/local-data'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
import { changeUseInfoAction } from './store'
import {
  login,
  // loginByQr,
  // getQr,checkQr 
} from '@/api/auth'
import logo from '@/assets/svg/music.svg'


export default memo(function QRAppFooter () {
  const [isShow, setIsShow] = useState(false);
  // const [baseQr, setBaseQr] = useState(null)
  // const [key, setKey] = useState(null)

  // const getImg = ()=>{
  //   loginByQr().then(res=>{
  //     setKey(res.data.data.unikey)
  //     getQr(key).then(res2=>{
  //       setBaseQr(res2.data.data.qrimg)
  //     })
  //   })
  // }

  // useEffect(() => {
  //   getImg()
  //   let flag = false

  //   if(!flag && key!==null){
  //     setInterval(() => {
  //       checkQr(key).then(res=>{
  //         if(res.data.code === 800){
  //           getImg()
  //         }else if(res.data.code === 803){
  //           message.success('登录成功')
  //           flag = true
  //           setIsShow(false)
  //         }
  //       })
  //     }, 2000);
  //   }
  // }, [])

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const dispatch = useDispatch()

  const toLogin = (value) => {
    login(value).then(res => {
      if (res.status === 200) {
        dispatch(changeUseInfoAction(res.data))
        setIsShow(false)
        message.success('登录成功')
      }
    })
  }

  const selectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link} exact>{item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return <a href={item.link} target="blanck">{item.title}</a>
    }
  }


  return (
    <HeaderWrapper>
      <div className="content wrap-v2">
        <HeaderLeft>
          <ReactSVG src={logo} className="music-svg"/>
          <a href="#/" className="logo">111</a>
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div className="select-item" key={item.title}>
                    {selectItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" prefix={<SearchOutlined />} placeholder="音乐/视频/电台/用户" />
          <div className="center" onClick={e => setIsShow(true)}>
            登录
          </div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
      <Modal title="手机号码登录" visible={isShow} footer={null} maskClosable={true} onCancel={e => { setIsShow(false) }}>
        {/* <img src={baseQr} />
        使用 网易云音乐APP 扫码登录
        <br/> */}
        <Form
          {...layout}
          name="basic"
          onFinish={toLogin}
        // initialValues={{ remember: true }}
        >
          <Form.Item
            label="手机号"
            name="phone"
            rules={[{ required: true, message: '请输入手机号' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button htmlType="submit" type="primary" style={{ 'width': '200px' }}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </HeaderWrapper>
  )
})
