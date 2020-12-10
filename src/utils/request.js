import axios from 'axios'
import { API_URL } from '../environments'

const service = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

service.interceptors.request.use(
  (config) => {
    /* uncomment if you use auth */
    // if (token) {
    //   config.headers.Authorization = getToken()
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
service.interceptors.response.use(
  (response) => {
    return response.data
    /* uncomment to use custom error codes */
    // const { success, code, message, data } = response.data
    // if (success) {
    //   return data
    // } else {
    //   Message({
    //     message: message,
    //     type: 'error',
    //     duration: 5 * 1000
    //   })
    //   return Promise.reject(code)
    // }
  },
  (error) => {
    /* uncomment to use ui handle error */
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  },
)

export default service
