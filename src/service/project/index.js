import axios from '../axios.js'

export const useProject = {
  POST: async (data) => await axios.post(`projects`, { ...data }),
  GET: async () => await axios.get('projects'),
  UPDATE: async (id, data) => await axios.put(`projects/${id}`, { ...data }),
  DELETE: async (id) => await axios.delete(`projects/${id}`)
}
