<template>
  <div class="post">
    <div>Name: {{ post.title }}</div>
    <div>Description: {{ post.body }}</div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  name: "PostItem",
};
</script>

<style scoped></style>
