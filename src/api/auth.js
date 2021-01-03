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