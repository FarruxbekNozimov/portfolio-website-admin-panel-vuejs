<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <button
    class="flex items-center border px-4 rounded-lg py-1 mb-5 border-cyan-500 hover:bg-cyan-500 hover:text-gray-900"
    @click="() => router.go(-1)"
  >
    <i class="bx bx-left-arrow-alt text-2xl"></i>
    GO BACK
  </button>
</template>

<style lang="scss" scoped></style>
