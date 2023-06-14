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
    <div class="grid grid-cols-4 gap-5">
      <div
        v-for="el in cards"
        class="text-center border p-5 rounded-xl"
        :class="`text-${el.color}-400  border-${el.color}-400`"
      >
        <div class="relative flex items-center gap-5">
          <i
            class="bg-gray-900 border rounded-full text-6xl p-3"
            :class="el.icon + ` border-${el.color}-400`"
          ></i>
          <div class="">
            <h2 class="text-6xl">20</h2>
            <h2 class="">{{ el.name }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
