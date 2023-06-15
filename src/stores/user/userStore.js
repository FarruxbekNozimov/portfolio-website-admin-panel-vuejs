import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { useAuth } from '../../service/auth/'

export const userStore = defineStore('user', () => {
  const state = reactive({
    user: {}
  })

  const LOGIN_USER = async (auth) => {
    try {
      state.user = (await useAuth.LOGIN(auth)).data
      localStorage.setItem('token', state.user.tokens.access_token)
    } catch (error) {
      console.log(error)
    }
  }

  const USER = computed(() => state.user)

  return { LOGIN_USER, USER }
})
