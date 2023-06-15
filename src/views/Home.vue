<script setup>
import { ref } from 'vue'
const views = ref(0)
const viewsCount = 100
const user = 100

setInterval(() => {
  if (views.value != viewsCount) {
    views.value += 1
  }
}, 10)

import { Chart, initTE } from 'tw-elements'

initTE({ Chart })
</script>

<template>
  <div class="">
    <div>
      <div class="container mx-auto grid">
        <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
          <div class="flex items-center p-4 bg-gray-800 rounded-lg shadow-xs">
            <div
              class="p-3 mr-4 text-blue-500 bg-blue-100 flex items-center justify-center rounded-full"
            >
              <i class="bx bx-show text-2xl px-1"></i>
            </div>
            <div>
              <p class="mb-2 text-sm font-medium text-gray-100">Today Views</p>
              <p class="text-xl font-semibold text-gray-300">{{ views }}</p>
            </div>
          </div>
          <div class="flex items-center p-4 bg-gray-800 rounded-lg shadow-xs">
            <div
              class="p-3 mr-4 text-green-500 bg-green-100 flex items-center justify-center rounded-full"
            >
              <i class="bx bx-user text-2xl px-1"></i>
            </div>
            <div>
              <p class="mb-2 text-sm font-medium text-gray-100">User active</p>
              <p class="text-xl font-semibold text-gray-300">120</p>
            </div>
          </div>
          <div class="flex items-center p-4 bg-gray-800 rounded-lg shadow-xs">
            <div
              class="p-3 mr-4 text-red-500 bg-red-100 flex items-center justify-center rounded-full"
            >
              <i class="bx bx-chat text-2xl px-1"></i>
            </div>
            <div>
              <p class="mb-2 text-sm font-medium text-gray-100">Users suspend</p>
              <p class="text-xl font-semibold text-gray-300">6389</p>
            </div>
          </div>
          <div class="flex items-center p-4 bg-gray-800 rounded-lg shadow-xs">
            <div
              class="p-3 mr-4 text-yellow-500 bg-yellow-100 flex items-center justify-center rounded-full"
            >
              <i class="bx bx-code-block text-2xl px-1"></i>
            </div>
            <div>
              <p class="mb-2 text-sm font-medium text-gray-100">User vip</p>
              <p class="text-xl font-semibold text-gray-300">828</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center mb-3">
      <span class="mb-1 text-xl font-semibold text-white"> New Comments </span>
    </div>
    <div class="grid lg:grid-cols-2 gap-5">
      <div class="w-full">
        <div v-for="el in 5" class="mb-5 p-4 rounded-lg shadow bg-gray-800 text-gray-300">
          <div class="">
            <div class="border-l-4 border-cyan-500 p-2 mb-3">
              <h1 class="text-sm font-bold">NodeJS nima ?</h1>
              <p class="text-xs">Lorem ipsum dolor sit amet...</p>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex">
                <div class="relative inline-block shrink-0">
                  <img
                    class="w-14 h-14 rounded-full"
                    src="https://i.pinimg.com/600x315/f7/e3/83/f7e3833638974785895d4e6fd44883b6.jpg"
                    alt="image"
                  />
                </div>
                <div class="ml-3 text-sm font-normal">
                  <div class="text-md font-semibold text-white">Bonnie Green</div>
                  <div class="text-sm font-normal">Vashshee zo'r chiqibdi</div>
                  <span class="text-xs font-medium text-cyan-500">a few seconds ago</span>
                </div>
              </div>
              <div class="flex gap-2">
                <button class="bg-red-500 px-2 rounded-lg flex items-center gap-1">
                  <i class="bx bx-x text-xl"></i>
                </button>
                <button class="bg-green-500 px-1 rounded-lg flex items-center gap-1">
                  <i class="bx bx-check text-2xl"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full">
        <h1>salom</h1>
        <div class="w-full max-w-full px-3 mt-0">
          <canvas
            data-te-chart="line"
            data-te-dataset-label="Traffic"
            data-te-labels="['Monday', 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday ']"
            data-te-dataset-data="[2112, 2343, 2545, 3423, 2365, 1985, 987]"
          >
          </canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
