<script setup>
import { onMounted, ref } from 'vue'
import { aboutStore } from '@/stores/about/aboutStore'
import Loading from '../components/Loading.vue'
// import { useUpload } from '../service/upload/index.js'
import { toast } from 'vue3-toastify'

const file = ref('')
const imgURL = ref('')
const store = aboutStore()

const uploadFile = async (event) => {
  file.value = event.target.files[0]

  if (['png', 'gif', 'jpg'].includes(file.value.type.split('/')[1])) {
    const blobUrl = URL.createObjectURL(file.value)
    imgURL.value = blobUrl
    console.log(imgURL.value)
    // useUpload.UPLOAD(imgURL)
    console.log(file.value)
  } else {
    toast.error('Image must be PNG,GIF,JPG', {
      autoClose: 1000,
      theme: 'dark'
    })
  }
}

const update_about = () => {
  try {
    store.UPDATE_ABOUT()
    toast.success('Successfully Logged in', {
      autoClose: 1000,
      theme: 'dark'
    })
  } catch (error) {
    console.log(error)
    toast.error('Error', {
      autoClose: 1000,
      theme: 'dark'
    })
  }
}

onMounted(() => {
  store.GET_ABOUT()
})
</script>

<template>
  <div>
    <Loading v-if="store.LOAD" />
    <form v-else @submit.prevent="update_about" class="text-center lg:w-[70%] mx-auto">
      <div class="lg:flex items-center justify-evenly">
        <div class="lg:w-[30%]">
          <div
            class="mx-auto relative mb-5 border-4 border-cyan-500 h-[160px] w-[160px] rounded-full"
          >
            <img
              :src="imgURL ? imgURL : store.ABOUT.user_photo"
              class="h-[152px] w-[152px] rounded-full object-cover"
            />
            <label
              class="absolute -top-0 -right-0 cursor-pointer bg-cyan-200 rounded-full px-1 text-2xl hover:bg-cyan-500 border-4 border-cyan-500 text-black bx bxs-cloud-upload"
              for="file_input"
            ></label>
            <input
              class="hidden"
              id="file_input"
              type="file"
              @change="uploadFile"
              accept=".png, .gif, .jpg"
            />
          </div>
        </div>
        <div class="text-start lg:w-[75%]">
          <label>Fullname</label>
          <input
            type="text"
            id="first_name"
            class="mb-5 outline-none border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-cyan-500 focus:border-cyan-500"
            placeholder="Fullname"
            v-model="store.ABOUT.fullname"
          />
          <label>Email</label>
          <input
            type="text"
            id="first_name"
            class="mb-5 outline-none border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-cyan-500 focus:border-cyan-500"
            placeholder="Email"
            v-model="store.ABOUT.email"
          />
        </div>
      </div>
      <div class="text-start w-full">
        <label>Phone </label>
        <input
          type="text"
          id="first_name"
          class="mb-5 outline-none border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-cyan-500 focus:border-cyan-500"
          placeholder="Phone"
          v-model="store.ABOUT.phone"
        />
      </div>
      <div class="text-start mx-auto w-full">
        <label>About Me </label>
        <textarea
          id="message"
          rows="4"
          class="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-cyan-500 focus:border-cyan-500 mb-5 outline-none"
          placeholder="About Me"
          v-model="store.ABOUT.description"
        ></textarea>
      </div>
      <button
        type="submit"
        class="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-cyan-600 hover:bg-cyan-700"
      >
        SAVE
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
