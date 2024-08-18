import axios from 'axios'
import axiosApiInstance from '../plugins/api'
axios.defaults.baseURL = import.meta.env.VITE_API_URL
const BASE_ENDPOINT = '/identity'

interface Auth{
    username: string,
    password: string
}

export const refreshAccessToken = async () => {
  const refresh_token = localStorage.getItem('refresh_token')
  const data = {
    refreshToken: refresh_token,
  }
  return await axios.post(`${BASE_ENDPOINT}/auth/refresh-token`, data)
}
export const loginApi = async (data: Auth) => {
  return await axiosApiInstance.post(`${BASE_ENDPOINT}/auth/login`, data, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

export const loginGGApi = async (data: Auth) => {
  return await axiosApiInstance.post(`${BASE_ENDPOINT}/auth/login-gg`, data)
}
export const registerApi = async (data: Auth) => {
  return await axiosApiInstance.post(`${BASE_ENDPOINT}/auth/register`, data)
}
export const getInfo = async () => {
  return await axiosApiInstance.get(`${BASE_ENDPOINT}/users/me`)
}
