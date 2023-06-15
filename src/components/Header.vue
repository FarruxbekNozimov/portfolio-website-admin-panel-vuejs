<script setup>
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
import { toast } from 'vue3-toastify'

const logout = () => {
  localStorage.clear()
  toast.success('Logout Successfuly', {
    autoClose: 1000,
    theme: 'dark'
  })
  router.push('/login')
}
</script>

<template>
  <div
    class="bg-gray-900 rounded-xl border border-cyan-500 w-full h-[55px] flex items-center justify-between px-5 mb-4 shadow shadow-cyan-500"
  >
    <h1 class="text-lg">{{ route.name.toUpperCase() }}</h1>
    <button @click="logout" class="bx bx-log-out text-3xl text-red-500 hover:scale-110"></button>
  </div>
</template>

<style lang="scss" scoped></style>
