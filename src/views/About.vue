<script setup>
import Logo from '@/assets/logo.png'
</script>

<template>
  <div>
    <form>
      <div class="relative mb-5 border h-[90px] w-[90px] rounded-full">
        <img
          src="https://icon-library.com/images/arabic-icon/arabic-icon-13.jpg"
          class="h-[90px] w-[90px] rounded-full"
        />
        <label class="absolute -top-1 -right-1 bg-blue-300 rounded-full px-1" for="file_input">
          <i class="bx bx-x text-black text-xl"></i>
        </label>
        <input class="hidden" id="file_input" type="file" />
      </div>
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <input
            type="text"
            id="first_name"
            class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="last_name"
            class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Doe"
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="company"
            class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Flowbite"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            id="phone"
            class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="123-45-678"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />
        </div>
        <div>
          <input
            type="url"
            id="website"
            class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="flowbite.com"
            required
          />
        </div>
        <div>
          <input
            type="number"
            id="visitors"
            class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder=""
            required
          />
        </div>
      </div>
      <div class="mb-6">
        <input
          type="email"
          id="email"
          class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="john.doe@company.com"
          required
        />
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
      >
        SAVE
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
