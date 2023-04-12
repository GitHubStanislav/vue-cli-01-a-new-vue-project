<template>
  <div>
    <h3>Users list</h3>
    <post-item
      @remove="$emit('remove', post)"
      :post="post"
      v-for="post in posts"
      :key="post.id"
    ></post-item>
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

<style scoped></style>
