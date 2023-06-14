<script setup>
import Sidebar from '../components/Sidebar.vue'
import Header from '../components/Header.vue'
</script>

<template>
  <div class="flex w-full h-screen">
    <Sidebar />
    <div class="p-5 w-full h-full">
      <Header />
      <router-view
        class="p-5 bg-gray-900 rounded-xl border border-cyan-500 w-full h-[80vh] overflow-y-auto"
      ></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
