import apiClient from '../plugins/apiClient'

export interface Credentials {
  username: string
  password: string
}

export async function signup(creds: Credentials) {
  const { data } = await apiClient.post('/auth/signup', creds)
  return data
}

export async function login(creds: Credentials) {
  const { data } = await apiClient.post('/auth/login', creds)
  return data.token
}
