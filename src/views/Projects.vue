<script setup>
import { ref } from 'vue'

const addModal = ref(false)

const toggleModal = () => (addModal.value = !addModal.value)
</script>

<template>
  <div>
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
            <h3 class="mb-4 text-xl text-white">Add New Project</h3>
            <form class="space-y-4 grid" action="#">
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    class="border text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-3 bg-gray-800 border-gray-500 outline-none focus:bg-gray-700 text-white"
                    placeholder="Project title"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    class="border text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-3 bg-gray-800 border-gray-500 outline-none focus:bg-gray-700 text-white"
                    placeholder="Project tags"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    class="border text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-3 bg-gray-800 border-gray-500 outline-none focus:bg-gray-700 text-white"
                    placeholder="Website link"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    class="border text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-3 bg-gray-800 border-gray-500 outline-none focus:bg-gray-700 text-white"
                    placeholder="Github demo"
                    required
                  />
                </div>
              </div>
              <div>
                <textarea
                  id="message"
                  rows="3"
                  class="outline-none block p-2.5 w-full text-sm rounded-lg border bg-gray-800 border-gray-500 text-white focus:ring-cyan-500 focus:border-cyan-500 focus:bg-gray-700"
                  placeholder="Write description for project..."
                ></textarea>
              </div>
              <div class="flex items-center justify-center w-full">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-36 border border-dashed rounded-lg cursor-pointer bg-gray-800 border-gray-500 hover:border-cyan-500 hover:bg-gray-700"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <i class="bx bx-cloud-upload text-5xl"></i>
                    <p class="mb-2 text-sm text-gray-400">
                      <span class="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p class="text-xs text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <input id="dropzone-file" type="file" class="hidden" />
                </label>
              </div>
              <button
                type="submit"
                class="w-full text-white focus:ring-4 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center bg-cyan-600 hover:bg-cyan-700 focus:ring-cyan-800"
              >
                Add Project
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full flex items-center justify-between mb-5">
      <h1 class="text-2xl border-b-2 border-cyan-500 pb-2">PROJECTS</h1>
      <button
        @click="toggleModal"
        class="text-cyan-400 border border-cyan-400 hover:bg-to-r hover:text-white from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:outline-none rounded-lg text-md px-5 py-2 text-center mr-2 mb-2"
      >
        ADD PROJECT
      </button>
    </div>
    <div class="grid grid-cols-3 gap-5">
      <router-link to="/" v-for="el in 10" class="mb-5 bg-gray-700/50 rounded-md p-4">
        <img
          src="https://blog.logrocket.com/wp-content/uploads/2021/04/handling-dispatching-events-nodejs.png"
          class="h-[200px] w-full object-cover rounded-md"
        />
        <div class="px-2">
          <h1 class="pt-4 text-xl text-center border-b border-cyan-500/50 pb-4 mb-6">
            Courses simple website
          </h1>
        </div>

        <div class="flex items-center justify-between">
          <span class="text-[14px] text-gray-500">14/06/2023</span>
          <span class="text-[14px] text-gray-500">12:00</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
