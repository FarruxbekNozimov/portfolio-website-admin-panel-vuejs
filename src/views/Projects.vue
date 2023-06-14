<script setup></script>

<template>
  <div>
    <div class="grid grid-cols-3 gap-5">
      <div class="mb-5 bg-gray-700/50 rounded-md p-4">
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
