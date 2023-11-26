
<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { type Blog } from '@tm/types';

const blogs = ref<Blog[]>([])

axios.get('http://localhost:8009/blogs').then(result => {
  blogs.value = result.data.blogs;
})
</script>

<template>
  <main>
    <div v-for="blog in blogs" :key="blog.id">
      <h1>{{ blog.title }}</h1>
      <p>{{ blog.content }}</p>
    </div>
  </main>
</template>