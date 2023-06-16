import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { useBlog } from '../../service/blog'

export const blogStore = defineStore('blog', () => {
  const state = reactive({
    blog: {},
    load: true
  })

  const ADD_BLOG = async (data) => {
    try {
      await useBlog.POST(data)
    } catch (error) {
      console.log(error)
    }
  }

  const GET_BLOG = async () => {
    try {
      state.blog = (await useBlog.GET()).data
      state.load = false
      console.log(state.blog)
    } catch (error) {
      console.log(error)
    }
  }

  const GET_ONE = async (id) => {
    await GET_BLOG()
    for (let i in state.blog) {
      if (state.blog[i]._id == id) {
        return state.blog[i]
      }
    }
  }

  const UPDATE_BLOG = async (id, post) => {
    try {
      state.blog = (await useBlog.UPDATE(id, post)).data
    } catch (error) {
      console.log(error)
    }
  }

  const DELETE_BLOG = async (id) => {
    try {
      await useBlog.DELETE(id)
      await GET_BLOG()
      console.log('DELETED')
    } catch (error) {
      console.log(error)
    }
  }

  const BLOG = computed(() => state.blog)
  const LOAD = computed(() => state.load)

  return { ADD_BLOG, GET_BLOG, BLOG, UPDATE_BLOG, GET_ONE, LOAD, DELETE_BLOG }
})
