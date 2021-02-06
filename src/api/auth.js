import request from './request'

export function login(form){
  return request({
    url:'login/cellphone',
    method:'post',
    data:{
      phone:form.phone,
      password:form.password
    }
  })
}

export const loginByQr = ()=>{
  // 生成key
  return request({
    url:'login/qr/key',
    method:'post',
  })
}

export const getQr = (key)=>{
  return request({
    url:'login/qr/create',
    method:'get',
    params:{
      key,
      qrimg:'1'
    }
  })
}

export const checkQr = (key)=>{
  return request({
    url:'login/qr/check',
    method:'get',
    params:{
      key,
    }
  })
}