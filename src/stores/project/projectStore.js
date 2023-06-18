import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { useProject } from '../../service/project'

export const projectStore = defineStore('project', () => {
  const state = reactive({
    id: '',
    project: {},
    load: true
  })

  const ADD_PROJECT = async (newData) => {
    try {
      console.log(newData)
      state.project = (await useProject.POST(newData)).data
    } catch (error) {
      console.log(error)
    }
  }

  const GET_PROJECT = async () => {
    try {
      state.project = (await useProject.GET()).data
      state.id = state.project._id
      state.load = false
    } catch (error) {
      console.log(error)
    }
  }

  const UPDATE_PROJECT = async () => {
    try {
      state.project = (await useProject.UPDATE(state.id, state.project)).data
    } catch (error) {
      console.log(error)
    }
  }

  const DELETE_PROJECT = async (id) => {
    try {
      await useProject.DELETE(id)
      GET_PROJECT()
    } catch (error) {
      console.log(error)
    }
  }

  const PROJECT = computed(() => state.project)
  const LOAD = computed(() => state.load)

  return { GET_PROJECT, PROJECT, UPDATE_PROJECT, LOAD, ADD_PROJECT, DELETE_PROJECT }
})
