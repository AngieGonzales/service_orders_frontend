import axios from 'axios'

export const useApi = () => {
  const config = useRuntimeConfig()
  const token = import.meta.client ? localStorage.getItem('access_token') : null
  const { public: { apiBaseUrl } } = useRuntimeConfig()

  const api = axios.create({
    baseURL: apiBaseUrl as string,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    }
  })

  return api
}