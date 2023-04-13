<template>
  <div v-if="posts.length > 0">
    <h3>Users list</h3>
    <post-item
      @remove="$emit('remove', post)"
      :post="post"
      v-for="post in posts"
      :key="post.id"
    ></post-item>
  </div>
  <div v-else>
      <h2>
          Sorry you don't have any posts
      </h2>
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
