import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import { refreshAccessToken } from '../services/authService'
const excludeUrls = ['/auth/login', '/auth/refresh-tokens', '/shopping/users/me/cart']
const axiosApiInstance:AxiosInstance  = axios.create()

// set base api
axiosApiInstance.defaults.baseURL = import.meta.env.VITE_API_URL

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
   (config: InternalAxiosRequestConfig) => {
    const access_token = localStorage.getItem('access_token')
    if(access_token)
    {
      config.headers.Authorization = `Bearer ${access_token}`;
        config.headers.Accept=  'application/json';
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)
// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
  (response) => {
    return response
  },
  async function (error) {
    const originalRequest = error.config
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry &&
      !excludeUrls.includes(originalRequest.url)
    ) {
      originalRequest._retry = true
      try {
        const token = await refreshAccessToken()
        localStorage.setItem('access_token', token.data.accessToken)
        localStorage.setItem('refresh_token', token.data.refreshToken)
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token.data.accessToken
        return axiosApiInstance(originalRequest)
      } catch (error) {
        console.log(error, 'ERROR', originalRequest.url)
        localStorage.clear()
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  }
)
export default axiosApiInstance
