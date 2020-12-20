import request from './request'

export function getTopBanner(){
  return request({
    url:'banner'
  })
}