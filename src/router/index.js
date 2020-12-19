import QRDiscover from '@/pages/discover'
import QRFriend from '@/pages/friend'
import QRMine from '@/pages/mine'
import { Redirect } from 'react-router-dom'


const routes = [
  {
    path:'/',
    exact:true,
    render:()=>(<Redirect to='/discover'/>)
  },
  {
    path:'/discover',
    component:QRDiscover
  },
  {
    path:'/friend',
    exact:true,
    component:QRFriend
  },
  {
    path:'/mine',
    exact:true,
    component:QRMine
  }
]

export default routes