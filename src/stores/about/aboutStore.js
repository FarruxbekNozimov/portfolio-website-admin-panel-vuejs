import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { useAbout } from '../../service/about'

export const aboutStore = defineStore('about', () => {
  const state = reactive({
    id: '',
    about: {}
  })

  const GET_ABOUT = async () => {
    try {
      state.about = (await useAbout.GET()).data[0]
      state.id = state.about._id
      console.log(state.about)
    } catch (error) {
      console.log(error)
    }
  }

  const UPDATE_ABOUT = async () => {
    try {
      console.log(state.about)
      state.about = (await useAbout.UPDATE(state.id, state.about)).data
      console.log(state.about)
    } catch (error) {
      console.log(error)
    }
  }

  const ABOUT = computed(() => state.about)

  return { GET_ABOUT, ABOUT, UPDATE_ABOUT }
})
