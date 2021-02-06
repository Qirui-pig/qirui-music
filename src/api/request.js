import axios from 'axios'


const instance = axios.create({
  // baseURL:'http://1.15.105.80:8080/',
  baseURL:'http://localhost:8080/',

  timeout:50000
})

instance.interceptors.request.use(config=>{
  return config;
},err=>{

})

export default instance