<template>
  <div class="post" v-for="post in posts" :key="post.id">
    <div>Name: {{ post.title }}</div>
    <div>Description: {{ post.body }}</div>
  </div>
</template>

<script>
export default {
  name: "PostList",
};
</script>

<style scoped>
.post {
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
}
</style>
