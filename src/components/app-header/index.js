import React, { memo, useState,  } from 'react'
import { useDispatch } from 'react-redux'

import { headerLinks } from '@/common/local-data'

import { NavLink } from 'react-router-dom'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
import { Input, Modal, Form, Button,message } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { changeUseInfoAction } from './store'
import { login } from '@/api/auth'


export default memo(function QRAppFooter() {
  const [isShow, setIsShow] = useState(false);

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const dispatch = useDispatch()

  const toLogin=(value)=>{
    login(value).then(res=>{
      if(res.status === 200){
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
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">111</a>
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
          <div className="center">
            创作者中心
          </div>
          <div onClick={e => setIsShow(true)}>
            登录
          </div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
      <Modal title="手机号码登录" visible={isShow} footer={null}>
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
            <Input/>
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password/>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button htmlType="submit" type="primary" style={{'width':'200px'}}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </HeaderWrapper>
  )
})
