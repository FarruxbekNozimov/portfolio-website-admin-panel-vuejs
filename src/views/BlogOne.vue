<script setup>
import Back from '@/components/Back.vue'
import Editor from '@tinymce/tinymce-vue'
import { ref } from 'vue'
const content = ref('')
</script>

<template>
  <div class="w-full">
    <div class="">
      <Back />
      <editor
        api-key="t8qlpw6q6ttt2fogox4z2xz2wg7pn3d807clhp5w8uipd7fn"
        v-model="content"
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
    <span>{{ content }}</span>
  </div>
</template>

<style lang="scss" scoped></style>
