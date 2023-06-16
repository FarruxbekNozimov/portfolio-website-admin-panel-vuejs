import axios from '../axios.js'

export const useBlog = {
  POST: async (data) => await axios.post('posts', { ...data }),
  GET: async () => await axios.get('posts'),
  UPDATE: async (id, data) => await axios.put(`posts/${id}`, { ...data }),
  DELETE: async (id) => await axios.delete(`posts/${id}`)
}
