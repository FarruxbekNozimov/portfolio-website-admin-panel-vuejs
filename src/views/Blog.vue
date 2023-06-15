<script setup>
import { blogStore } from '@/stores/blog/blogStore'
import { ref, onMounted } from 'vue'

const store = blogStore()

onMounted(() => {
  store.GET_BLOG()
})
</script>

<template>
  <div>
    <div class="w-full flex items-center justify-between mb-5">
      <h1 class="text-2xl border-b-2 pb-2 border-cyan-500">POSTS</h1>
      <router-link
        to="/blog/add"
        class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        ADD POST
      </router-link>
    </div>
    <div class="grid grid-cols-3 gap-3">
      <router-link v-for="el in 15" to="/blog/1" class="p-3 bg-gray-950 rounded-lg pt-5">
        <h2 class="text-xl mb-3 text-center">NodeJS nima ?</h2>
        <div class="flex flex-wrap">
          <span
            v-for="el in ['nodejs', 'express', 'html']"
            class="mb-2 bg-gray-800 text-sm rounded p-1 mr-2"
          >
            #{{ el.toUpperCase() }}
          </span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-[13px] text-gray-500">14/06/2023</span>
          <span class="text-[13px] text-gray-500">12:00</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
