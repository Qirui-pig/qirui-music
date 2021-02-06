import React, { memo,
  // useRef,
  useEffect } from 'react'

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { LoadingPageWrapper } from './style.js'

export default memo(function LoadingPage() {
  const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />

  // const canvasRef = useRef()

  // document.addEventListener('touchmove', function(e) {
  //   e.preventDefault()
  // })

  useEffect(() => {
    // canvas画图
  // var c = canvasRef.current
  // var  x = c.getContext('2d')
  // var  pr = window.devicePixelRatio || 1
  // var  w = window.innerWidth
  // var  h = window.innerHeight
  // var  f = 90
  // var  q
  // var  r = 0
  // var  u = Math.PI * 2
  // var  v = Math.cos
  // var  z = Math.random

  // c.width = w * pr
  // c.height = h * pr
  // x.scale(pr, pr)
  // x.globalAlpha = 0.6

  // function i() {
  //   x.clearRect(0, 0, w, h)
  //   q = [{ x: 0, y: h * .7 + f }, { x: 0, y: h * .7 - f }]
  //   while (q[1].x < w + f) d(q[0], q[1])
  // }

  // function d(i, j) {
  //   x.beginPath()
  //   x.moveTo(i.x, i.y)
  //   x.lineTo(j.x, j.y)
  //   var k = j.x + (z() * 2 - 0.25) * f,
  //     n = y(j.y)
  //   x.lineTo(k, n)
  //   x.closePath()
  //   r -= u / -50
  //   x.fillStyle = '#' + (v(r) * 127 + 128 << 16 | v(r + u / 3) * 127 + 128 << 8 | v(r + u / 3 * 2) * 127 + 128).toString(16)
  //   x.fill()
  //   q[0] = q[1]
  //   q[1] = { x: k, y: n }
  // }

  // function y(p) {
  //   var t = p + (z() * 2 - 1.1) * f
  //   return (t > h || t < 0) ? y(p) : t
  // }

  // document.onclick = i
  // document.ontouchstart = i
  // i()

  }, [])
  
  return (
    <LoadingPageWrapper>
      {/* <canvas className="l-canvas" ref={canvasRef}></canvas> */}
      <div className="spin"><Spin indicator={antIcon} /></div>
      <p>加载中</p>
    </LoadingPageWrapper>
  )
})
