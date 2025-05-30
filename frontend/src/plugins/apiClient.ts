// src/plugins/apiClient.ts
import axios from 'axios'
import router from '../router'              // adjust path if needed

// 1) Create a dedicated axios instance
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { 'Content-Type': 'application/json' }
})

// 2) Request interceptor: add the JWT if present
apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// 3) Response interceptor: handle 401s globally
apiClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // token expired or missing → send user to login
      router.push('/login')
    }
    return Promise.reject(error)
  }
)

export default apiClient
