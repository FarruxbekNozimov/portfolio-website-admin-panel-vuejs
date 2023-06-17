<script setup>
import Loading from '../components/Loading.vue'
import moment from 'moment'
import { blogStore } from '@/stores/blog/blogStore'
import { toast } from 'vue3-toastify'
import { ref, onMounted } from 'vue'

const store = blogStore()
const deleteModal = ref(false)
const deleteId = ref('')
const toggleModal = () => (deleteModal.value = !deleteModal.value)

const deletePost = () => {
  try {
    store.DELETE_BLOG(deleteId.value)
    toast.success('Post deleted successfuly', {
      autoClose: 1000,
      theme: 'dark'
    })
    toggleModal()
  } catch (error) {
    toast.error(`Error: ${error}`, {
      autoClose: 1000,
      theme: 'dark'
    })
  }
}

onMounted(() => {
  store.GET_BLOG()
})
</script>

<template>
  <div>
    <div
      class="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full flex items-center justify-center bg-black/50"
      :class="deleteModal ? '' : 'hidden'"
    >
      <div class="relative w-full max-w-md max-h-full">
        <div class="relative rounded-lg shadow bg-gray-700">
          <button
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent rounded-lg text-sm p-1 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white"
            @click="toggleModal"
          >
            <i class="bx bx-x text-2xl px-1"></i>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="p-6 text-center">
            <i class="bx bx-bug text-5xl p-5"></i>
            <h3 class="mb-5 text-lg font-normal text-gray-400">
              Are you sure you want to delete this post?
            </h3>
            <button
              class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              @click="deletePost"
            >
              Yes, I'm sure
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              class="focus:ring-4 focus:outline-none rounded-lg border text-sm font-medium px-5 py-2.5 focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600"
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>

    <Loading v-if="store.LOAD" />
    <div v-else class="w-full flex items-center justify-between mb-5">
      <h1 class="text-2xl border-b-2 pb-2 border-cyan-500">POSTS</h1>
      <router-link
        to="/blog/add"
        class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        ADD POST
      </router-link>
    </div>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
      <div v-for="el in store.BLOG" class="p-3 bg-gray-950 rounded-lg pt-5 relative">
        <i
          class="bx bx-trash absolute -right-2 -top-2 rounded-full bg-red-500 hover:bg-red-600 p-2 cursor-pointer"
          @click="
            () => {
              toggleModal()
              deleteId = el._id
            }
          "
        ></i>
        <router-link :to="`/blog/${el._id}`">
          <h2 class="w-full text-xl mb-3 text-center">{{ el?.title }}</h2>
          <div class="flex flex-wrap">
            <span
              v-for="tag in el?.tags?.split(',')"
              class="mb-2 bg-gray-800 text-sm rounded p-1 mr-2"
            >
              #{{ tag }}
            </span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-[13px] text-gray-500">{{ moment(el?.createAt).format('L') }}</span>
            <span class="text-[13px] text-gray-500">{{ moment(el?.createAt).format('LT') }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
