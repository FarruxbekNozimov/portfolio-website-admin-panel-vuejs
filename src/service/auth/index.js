import axios from '../axios.js'

export const useAuth = {
  LOGIN: async (data) => await axios.post('admins/login', { ...data }),
  GET: async (data) => await axios.post('admins/login', { ...data })
}
