<script setup>
const cards = [
  {
    color: 'orange',
    name: 'Views',
    icon: 'bx bx-show'
  },
  {
    color: 'purple',
    name: 'Users',
    icon: 'bx bx-user'
  },
  {
    color: 'yellow',
    name: 'Comments',
    icon: 'bx bx-chat'
  },
  {
    color: 'gray',
    name: 'Posts',
    icon: 'bx bx-code-block'
  }
]
</script>
<template>
  <div class="">
    <div class="grid grid-cols-3 gap-5">
      <div class="ml-10 text-center border p-5 rounded-xl text-orange-400 border-orange-400">
        <div class="relative flex items-center justify-around gap-5">
          <i
            class="-left-[70px] absolute border-8 border-gray-900 text-cyan-950 rounded-full text-6xl p-3 bg-orange-400 bx bx-show"
          ></i>
          <div class="w-[100%]">
            <h2 class="text-6xl">24</h2>
            <h2 class="">Today Views</h2>
          </div>
        </div>
      </div>
      <div class="ml-10 text-center border p-5 rounded-xl text-indigo-400 border-indigo-400">
        <div class="relative flex items-center justify-around gap-5">
          <i
            class="-left-[70px] absolute border-8 border-gray-900 text-cyan-950 rounded-full text-6xl p-3 bg-indigo-400 bx bx-show-alt"
          ></i>
          <div class="w-[100%]">
            <h2 class="text-6xl">13</h2>
            <h2 class="">Monthly Views</h2>
          </div>
        </div>
      </div>
      <div class="ml-10 text-center border p-5 rounded-xl text-purple-400 border-purple-400">
        <div class="relative flex items-center justify-around gap-5">
          <i
            class="-left-[70px] absolute border-8 border-gray-900 text-cyan-950 rounded-full text-6xl p-3 bg-purple-400 bx bx-user"
          ></i>
          <div class="w-[100%]">
            <h2 class="text-6xl">10</h2>
            <h2 class="">Users</h2>
          </div>
        </div>
      </div>
      <div class="ml-10 text-center border p-5 rounded-xl text-yellow-400 border-yellow-400">
        <div class="relative flex items-center justify-around gap-5">
          <i
            class="-left-[70px] absolute border-8 border-gray-900 text-cyan-950 rounded-full text-6xl p-3 bg-yellow-400 bx bx-chat"
          ></i>
          <div class="w-[100%]">
            <h2 class="text-6xl">20</h2>
            <h2 class="">Comments</h2>
          </div>
        </div>
      </div>
      <div class="ml-10 text-center border p-5 rounded-xl text-gray-400 border-gray-400">
        <div class="relative flex items-center justify-around gap-5">
          <i
            class="-left-[70px] absolute border-8 border-gray-900 text-cyan-950 rounded-full text-6xl p-3 bg-gray-400 bx bx-code-block"
          ></i>
          <div class="w-[100%]">
            <h2 class="text-6xl">13</h2>
            <h2 class="">Blogs</h2>
          </div>
        </div>
      </div>
      <div class="ml-10 text-center border p-5 rounded-xl text-lime-400 border-lime-400">
        <div class="relative flex items-center justify-around gap-5">
          <i
            class="-left-[70px] absolute border-8 border-gray-900 text-cyan-950 rounded-full text-6xl p-3 bg-lime-400 bx bx-like"
          ></i>
          <div class="w-[100%]">
            <h2 class="text-6xl">8</h2>
            <h2 class="">Reactions</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
