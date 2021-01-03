import * as actionTypes from './constants'


export const changeUseInfoAction = (res)=>({
  type:actionTypes.CHANGE_USERINFO,
  userInfo:res
})

// export const getUserInfoAction = (form)=>{
//   return dispatch=>{
//     login(form).then(res=>{
//       dispatch(changeUseInfoAction(res.data))
//     })
//   }
// }