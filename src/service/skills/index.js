import axios from '../axios.js'

export const useSkills = {
  POST: async (data) => await axios.post(`skills`, { ...data }),
  GET: async () => await axios.get('skills'),
  UPDATE: async (id, data) => await axios.put(`skills/${id}`, { ...data }),
  DELETE: async (id) => await axios.delete(`skills/${id}`)
}
