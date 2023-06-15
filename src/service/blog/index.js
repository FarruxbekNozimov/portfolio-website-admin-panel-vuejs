import axios from '../axios.js'

export const useBlog = {
  GET: async () => await axios.get('posts'),
  UPDATE: async (id, data) =>
    await axios.put(
      `posts/${id}`,
      { ...data },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    )
}
