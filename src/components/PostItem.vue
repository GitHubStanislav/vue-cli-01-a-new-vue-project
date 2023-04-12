<template>
  <div class="post">
    <div>Name: {{ post.title }}</div>
    <div>Description: {{ post.body }}</div>
    <my-button style="background-color: red; color: white">Delete</my-button>
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

<style scoped>
.post {
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
