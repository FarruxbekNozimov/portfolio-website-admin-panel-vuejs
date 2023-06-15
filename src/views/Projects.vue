<script setup></script>

<template>
  <div>
    <div class="w-full flex items-center justify-between mb-5">
      <h1 class="text-2xl border-b-2 border-cyan-500 pb-2">PROJECTS</h1>
      <router-link
        to="/blog/add"
        class="text-cyan-400 border border-cyan-400 hover:bg-to-r hover:text-white from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg text-md px-5 py-2 text-center mr-2 mb-2"
      >
        ADD PROJECT
      </router-link>
    </div>
    <div class="grid grid-cols-3 gap-5">
      <div v-for="el in 10" class="mb-5 bg-gray-700/50 rounded-md p-4">
        <img
          src="https://blog.logrocket.com/wp-content/uploads/2021/04/handling-dispatching-events-nodejs.png"
          class="h-[200px] w-full object-cover rounded-md"
        />
        <h1 class="pt-4 text-xl mb-2">Courses simple website</h1>
        <div class="flex flex-wrap">
          <span
            v-for="el in ['vuejs', 'html', 'css']"
            class="mb-2 bg-gray-950 text-sm rounded p-1 mr-2"
            >#{{ el.toUpperCase() }}</span
          >
        </div>
        <div class="flex items-center justify-between">
          <span class="text-[13px] text-gray-500">14/06/2023</span>
          <span class="text-[13px] text-gray-500">12:00</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
