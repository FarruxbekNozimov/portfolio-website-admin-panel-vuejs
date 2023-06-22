<script setup>
import Loading from '../components/Loading.vue'
import { onMounted, ref, reactive } from 'vue'
import { skillsStore } from '@/stores/skills/skillsStore'
import moment from 'moment'
import { toast } from 'vue3-toastify'

const store = skillsStore()
const addModal = ref(false)
const updateId = ref(null)
const deleteModal = ref(false)
const deleteId = ref(null)

const updateContent = reactive({
  title: '',
  icon: '',
  skill_type: ''
})

const newSkill = reactive({
  title: '',
  icon: '',
  skill_type: ''
})

const toggleModal = () => (addModal.value = !addModal.value)
const toggleDelete = () => (deleteModal.value = !deleteModal.value)

const addSkill = async () => {
  try {
    store.ADD_SKILLS(newSkill)
    for (let i in newSkill) newSkill[i] = ''
    toggleModal()
    toast.success('Successfully skills added', { autoClose: 1000, theme: 'dark' })
  } catch (e) {
    toast.success(`Error ${e}`, { autoClose: 1000, theme: 'dark' })
  }
}
const deleteSkill = async () => {
  try {
    store.DELETE_SKILLS(deleteId.value)
    toggleDelete()
    toast.success('Successfully skills deleted', { autoClose: 1000, theme: 'dark' })
  } catch (e) {
    console.log(e)
    toast.success(`Error ${e}`, { autoClose: 1000, theme: 'dark' })
  }
}
const updateSkill = async () => {
  try {
    await store.UPDATE_SKILLS(updateId.value, updateContent)
    for (let i in updateContent) updateContent[i] = ''
    updateId.value = null
    toast.success('Successfully skills updated', { autoClose: 1000, theme: 'dark' })
  } catch (e) {
    console.log(e)
    toast.success(`Error ${e}`, { autoClose: 1000, theme: 'dark' })
  }
}
onMounted(() => {
  store.GET_SKILLS()
})
</script>

<template>
  <div>
    <!-- DELETE MODAL -->
    <div
      class="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full flex items-center justify-center bg-black/50"
      :class="deleteModal ? '' : 'hidden'"
    >
      <div class="relative w-full max-w-md max-h-full">
        <div class="relative rounded-lg shadow bg-gray-700">
          <button
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent rounded-lg text-sm p-1 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white"
            @click="toggleDelete"
          >
            <i class="bx bx-x text-2xl px-1"></i>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="p-6 text-center">
            <i class="bx bx-bug text-5xl p-5"></i>
            <h3 class="mb-5 text-lg font-normal text-gray-400">
              Are you sure you want to delete this Experience?
            </h3>
            <button
              class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              @click="deleteSkill"
            >
              Yes, I'm sure
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              class="focus:ring-4 focus:outline-none rounded-lg border text-sm font-medium px-5 py-2.5 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600"
              @click="toggleDelete"
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- ADD MODAL -->
    <div
      class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen flex items-center justify-center max-h-full bg-black/60"
      :class="addModal ? '' : 'hidden'"
    >
      <div class="relative w-full max-w-xl max-h-full">
        <div class="relative rounded-lg shadow bg-gray-700">
          <button
            @click="toggleModal"
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent rounded-lg text-sm p-1 px-2 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white"
          >
            <i class="bx bx-x text-2xl"></i>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="px-6 py-6 lg:px-8">
            <h3 class="mb-4 text-xl text-white">Add New Skill</h3>
            <form @submit.prevent="addSkill" class="space-y-4 grid" action="#">
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label>Title</label>
                  <input
                    type="text"
                    class="border text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-3 bg-gray-800 border-gray-500 outline-none focus:bg-gray-700 text-white"
                    placeholder="NestJS"
                    required
                    v-model="newSkill.title"
                  />
                </div>
                <div>
                  <label>Icon</label>
                  <input
                    type="text"
                    class="border text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-3 bg-gray-800 border-gray-500 outline-none focus:bg-gray-700 text-white"
                    placeholder="vscode-icons:file-type-nestjs"
                    required
                    v-model="newSkill.icon"
                  />
                </div>
              </div>
              <button
                type="submit"
                class="w-full text-white focus:ring-4 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-800"
              >
                Add Skill
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full flex items-center justify-between mb-5">
      <h1 class="text-2xl border-b-2 border-cyan-500 pb-2">SKILLS</h1>
      <button
        @click="toggleModal"
        class="text-cyan-400 border border-cyan-400 hover:bg-to-r hover:text-white from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:outline-none rounded-lg text-md px-5 py-2 text-center mr-2 mb-2"
      >
        ADD SKILLS
      </button>
    </div>
    <Loading v-if="store.LOAD" />
    <div v-else class="grid lg:grid-cols-4 md:grid-cols-2 gap-7">
      <div v-for="el in store.SKILLS" class="relative bg-gray-700/50 rounded-md p-3">
        <div class="px-2">
          <input
            v-if="updateId == el._id"
            type="text"
            class="w-full outline-none border border-cyan-500 text-xl text-center rounded-lg mb-2 bg-gray-700/50"
            v-model="updateContent.title"
          />
          <h1 v-else class="text-xl text-center">{{ el.title }}</h1>
          <input
            v-if="updateId == el._id"
            type="text"
            class="w-full outline-none border border-cyan-500 text-sm text-center rounded-lg mb-2 bg-gray-700/50"
            v-model="updateContent.icon"
          />
          <h1 v-else class="text-sm text-center mb-2 text-cyan-300">{{ el.icon }}</h1>
          <div class="border-b border-cyan-500/90 mb-4"></div>
        </div>
        <div class="flex items-center justify-between">
          <i
            v-if="updateId == el._id"
            class="absolute -left-3 -top-3 bx bx-check cursor-pointer hover:bg-blue-600 bg-blue-500 p-2 rounded-full"
            @click="updateSkill"
          ></i>
          <i
            v-else
            class="absolute -left-3 -top-3 bx bx-pencil cursor-pointer hover:bg-green-600 bg-green-500 p-2 rounded-full"
            @click="
              () => {
                updateId = el._id
                updateContent.title = el.title
                updateContent.icon = el.icon
                updateContent.start_time = el.start_time
                updateContent.end_time = el.end_time
              }
            "
          ></i>
          <i
            class="absolute -right-3 -top-3 bx bx-trash cursor-pointer hover:bg-red-600 bg-red-500 p-2 rounded-full"
            @click="
              () => {
                deleteId = el._id
                toggleDelete()
              }
            "
          ></i>
          <span class="text-md text-gray-500">{{ moment(el.createAt).format('l') }}</span>
          <span class="text-md text-gray-500">{{ moment(el.createAt).format('HH:MM') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
