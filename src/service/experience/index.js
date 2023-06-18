import axios from '../axios.js'

export const useExperience = {
  POST: async (data) => await axios.post(`work`, { ...data }),
  GET: async () => await axios.get('work'),
  UPDATE: async (id, data) => await axios.put(`work/${id}`, { ...data }),
  DELETE: async (id) => await axios.delete(`work/${id}`)
}
