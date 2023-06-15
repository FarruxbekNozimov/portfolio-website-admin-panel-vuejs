import axios from '../axios.js'

export const useProject = {
  GET: async () => await axios.get('projects'),
  UPDATE: async (id, data) => await axios.put(`projects/${id}`, { ...data })
}
