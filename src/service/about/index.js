import axios from '../axios.js'

export const useAbout = {
  GET: async () => await axios.get('about'),
  UPDATE: async (id, data) => await axios.put(`about/${id}`, { ...data })
}
