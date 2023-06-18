<script setup>
import Logo from '@/assets/logo.png'
import { navLinks } from '../constants/navLinks'
import { ref } from 'vue'

const menuId = ref(1)
</script>

<template>
  <div
    class="w-96 bg-gray-900 h-screen border-r border-cyan-500 shadow shadow-cyan-500 relative overflow-y-auto"
  >
    <a href="/" class="top-0 left-2 bg-gray-900 gap-2 flex items-center justify-center py-5">
      <img :src="Logo" alt="logo" class="h-[50px]" />
      <span class="text-3xl font-['Kablammo']">FarruxDEV</span>
    </a>
    <div class="px-5">
      <div class="">
        <div v-for="el in navLinks">
          <router-link
            @click="() => (menuId = el.id)"
            :to="el.path"
            class="bg-gray-950 duration-300 cursor-pointer px-5 py-3 rounded-xl text-md group hover:bg-cyan-500 hover:text-gray-950 flex items-center justify-between mt-3"
            :class="el.childrens?.length ? 'mb-3 ' : 'mb-3'"
          >
            <div class="flex items-center text-md gap-2">
              <i :class="el.icon" class="text-lg group-hover:bx-tada"></i>
              {{ el.name }}
            </div>
            <i
              v-if="el.childrens.length"
              class="bx text-xl"
              :class="menuId == el.id ? 'bx-chevron-down' : 'bx-chevron-up'"
            ></i>
          </router-link>
          <div v-for="child in el.childrens" :class="menuId == el.id ? '' : 'hidden'">
            <router-link
              :to="child.path"
              class="ml-5 bg-gray-950 duration-300 cursor-pointer px-5 py-3 rounded-xl text-md mb-2 group hover:bg-cyan-500 hover:text-gray-950 block"
            >
              <div class="flex items-center gap-2">
                <i :class="child.icon" class="text-xl group-hover:bx-tada"></i>
                {{ child.name }}
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  background: rgb(6 182 212 / var(--tw-bg-opacity));
  color: rgb(3 7 18 / var(--tw-text-opacity));
}
</style>
