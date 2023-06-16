<script setup>
import Back from '@/components/Back.vue'
import Editor from '@tinymce/tinymce-vue'
import { blogStore } from '@/stores/blog/blogStore'
import { toast } from 'vue3-toastify'
import { ref, onMounted, reactive } from 'vue'

const newPost = reactive({
  title: '',
  tags: '',
  content: ''
})
const store = blogStore()

const addPost = () => {
  if (!newPost.title.length || !newPost.tags.length || !newPost.content.length) {
    toast.error(`All fields are required`, {
      autoClose: 1000,
      theme: 'dark'
    })
  } else {
    try {
      store.ADD_BLOG(newPost)
      toast.success('Post added successfuly', {
        autoClose: 1000,
        theme: 'dark'
      })
    } catch (error) {
      toast.error(`Error: ${error}`, {
        autoClose: 1000,
        theme: 'dark'
      })
    }
  }
}
</script>

<template>
  <div class="w-full">
    <div class="">
      <div class="flex items-center justify-between">
        <Back />
        <button
          @click="addPost"
          class="border border-cyan-500 hover:bg-cyan-500 px-5 py-2 rounded-lg"
        >
          PUBLISH POST
        </button>
      </div>
      <div class="flex items-center gap-5 mb-5">
        <input
          type="text"
          class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-cyan-500 focus:border-cyan-500 outline-none"
          placeholder="Title"
          required
          v-model="newPost.title"
        />
        <input
          type="text"
          class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-cyan-500 focus:border-cyan-500 outline-none"
          placeholder="Tags: nodej,js,python"
          required
          v-model="newPost.tags"
        />
      </div>
      <editor
        api-key="t8qlpw6q6ttt2fogox4z2xz2wg7pn3d807clhp5w8uipd7fn"
        v-model="newPost.content"
        :init="{
          menubar: false,
          plugins: 'lists link image emoticons',
          toolbar:
            'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
          toolbar:
            'undo redo | blocks fontsize | emoticons bold italic underline strikethrough  | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight checklist numlist bullist  | charmap | removeformat'
        }"
      />
    </div>
    <h1 class="text-3xl text-center p-5">Preview Post</h1>
    <span v-html="newPost.content"></span>
  </div>
</template>

<style lang="scss" scoped></style>
