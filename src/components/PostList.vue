<template>
  <div>
    <h3>Users list</h3>
    <post-item :post="post" v-for="post in posts" :key="post.id"></post-item>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";

export default {
  components: { PostItem },
  props: ["posts"],
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
