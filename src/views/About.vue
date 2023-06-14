<script setup>
import Logo from '@/assets/logo.png'
import { ref, reactive } from 'vue'

const about = reactive({
  user_photo: 'https://icon-library.com/images/arabic-icon/arabic-icon-13.jpg',
  fullname: 'FarruxDEV',
  email: 'farruxbek@gmail.com',
  phone: '998887038006',
  description: 'Hello I am Developer'
})
</script>

<template>
  <div>
    <form class="text-center w-[70%] mx-auto">
      <div class="flex items-center justify-evenly">
        <div class="w-[25%]">
          <div
            class="relative mb-5 mx-auto border-2 border-cyan-500 h-[150px] w-[150px] rounded-full"
          >
            <img :src="about.user_photo" class="h-[150px] w-[150px] rounded-full" />
            <label
              class="absolute -top-0 -right-0 cursor-pointer bg-cyan-300 rounded-full px-1 text-2xl hover:bg-cyan-400 border-2 border-cyan-500 text-black bx bx-x"
              for="file_input"
            ></label>
            <input class="hidden" id="file_input" type="file" />
          </div>
        </div>
        <div class="w-[75%]">
          <input
            type="text"
            id="first_name"
            class="mb-5 outline-none border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-cyan-500 focus:border-cyan-500"
            placeholder="Fullname"
            v-model="about.fullname"
          />
          <input
            type="text"
            id="first_name"
            class="mb-5 outline-none border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-cyan-500 focus:border-cyan-500"
            placeholder="Email"
            v-model="about.email"
          />
        </div>
      </div>
      <div class="w-full">
        <input
          type="text"
          id="first_name"
          class="mb-5 outline-none border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-cyan-500 focus:border-cyan-500"
          placeholder="Phone"
          v-model="about.phone"
        />
      </div>
      <div class="mx-auto w-full">
        <textarea
          id="message"
          rows="5"
          class="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-cyan-500 focus:border-cyan-500 mb-5 outline-none"
          placeholder="About Me"
          v-model="about.description"
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
