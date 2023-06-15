<script setup>
import Logo from '@/assets/logo.png'
import { navLinks } from '../constants/navLinks'
</script>

<template>
  <div class="w-96 bg-gray-900 h-screen border-r border-cyan-500 shadow shadow-cyan-500 relative">
    <div class="w-full gap-2 flex items-center justify-center py-5">
      <img :src="Logo" alt="logo" class="h-[50px]" />
      <span class="text-3xl font-['Kablammo']">FarruxDEV</span>
    </div>
    <div class="px-5 py-5">
      <router-link
        v-for="el in navLinks"
        :to="el.path"
        class="bg-gray-950 duration-300 cursor-pointer px-5 py-3 rounded-xl text-md mb-5 block group hover:bg-cyan-500 hover:text-gray-950"
      >
        <div class="flex items-center gap-2">
          <i :class="el.icon" class="text-xl group-hover:bx-tada"></i>
          {{ el.name }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  background: rgb(6 182 212 / var(--tw-bg-opacity));
  color: rgb(3 7 18 / var(--tw-text-opacity));
}
</style>
