import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { useBlog } from '../../service/blog'

export const blogStore = defineStore('blog', () => {
  const state = reactive({
    blog: {}
  })

  const GET_BLOG = async () => {
    try {
      state.blog = (await useBlog.GET()).data[0]
      console.log(state.blog)
    } catch (error) {
      console.log(error)
    }
  }

  const UPDATE_BLOG = async () => {
    try {
      state.blog = (await useBlog.UPDATE(state.id, state.blog)).data
    } catch (error) {
      console.log(error)
    }
  }

  const BLOG = computed(() => state.blog)

  return { GET_BLOG, BLOG, UPDATE_BLOG }
})
