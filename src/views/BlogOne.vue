<script setup>
import Back from '@/components/Back.vue'
import Editor from '@tinymce/tinymce-vue'
import Loading from '../components/Loading.vue'
import { blogStore } from '@/stores/blog/blogStore'
import { toast } from 'vue3-toastify'
import { ref, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const postId = router.currentRoute.value.params.id
let newPost = reactive({
  title: '',
  tags: '',
  content: ''
})
const store = blogStore()

const updatePost = () => {
  if (!newPost.title.length || !newPost.tags.length || !newPost.content.length) {
    toast.error(`All fields are required`, {
      autoClose: 1000,
      theme: 'dark'
    })
  } else {
    try {
      store.UPDATE_BLOG(postId, newPost)
      toast.success('Post updated successfuly', {
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

onMounted(async () => {
  const updatePost = await store.GET_ONE(postId)
  newPost.title = updatePost.title
  newPost.tags = updatePost.tags
  newPost.content = updatePost.content
})
</script>

<template>
  <div class="w-full">
    <div class="">
      <div class="flex items-center justify-between">
        <Back />
        <button
          @click="updatePost"
          class="border border-cyan-500 hover:bg-cyan-500 px-5 py-2 rounded-lg"
        >
          UPDATE POST
        </button>
      </div>
      <Loading v-if="store.LOAD" />
      <div v-else class="">
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
        <h1 class="text-3xl text-center p-5">Preview Post</h1>
        <div class="text-center" v-html="newPost.content"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
