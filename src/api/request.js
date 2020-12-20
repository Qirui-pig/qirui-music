import axios from 'axios'

// const devBaseURL = "http://123.207.32.32:9001";
// const proBaseURL = "http://123.207.32.32:9001";
// BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;


const instance = axios.create({
  baseURL:'http://localhost:3001/',
  timeout:5000
})

instance.interceptors.request.use(config=>{
  return config;
},err=>{

})

export default instance