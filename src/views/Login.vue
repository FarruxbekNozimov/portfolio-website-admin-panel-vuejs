<script setup>
import Logo from '@/assets/logo.png'
</script>

<template>
  <div class="h-full flex items-center">
    <form
      action=""
      class="h-auto lg:w-[35%] md:w-[100%] py-7 px-14 shadow-cyan-400 shadow mx-auto border border-cyan-500 bg-slate-900/100 rounded-xl"
    >
      <img :src="Logo" alt="" class="h-[150px] mx-auto" />
      <div class="mb-5">
        <label for="first_name" class="block mb-2 text-sm font-medium text-white"
          >Username <span class="text-red-500">*</span></label
        >
        <input
          type="text"
          id="first_name"
          class="outline-none border text-sm rounded-lg block w-full p-2.5 bg-gray-950 border-gray-500 placeholder-gray-400 text-white focus:ring-cyan-500 focus:border-cyan-500"
          placeholder="Username"
          required
        />
      </div>
      <div class="mb-10">
        <label for="first_name" class="block mb-2 text-sm font-medium text-white"
          >Password <span class="text-red-500">*</span></label
        >
        <input
          type="password"
          id="first_name"
          class="outline-none border text-sm rounded-lg block w-full p-2.5 bg-gray-950 border-gray-500 placeholder-gray-400 text-white focus:ring-cyan-500 focus:border-cyan-500"
          placeholder="Password"
          required
        />
      </div>
      <div class="w-full text-center">
        <button
          type="submit"
          class="border border-cyan-500 w-[30%] mx-auto py-2 rounded-lg hover:bg-cyan-500 hover:text-gray-900 duration-300"
        >
          LOGIN
        </button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
