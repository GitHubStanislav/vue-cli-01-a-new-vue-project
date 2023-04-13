<template>
  <div class="app">
   <my-dialog>

   </my-dialog>
    <post-form @create="createPost"></post-form>
    <post-list @remove="removePost" :posts="posts"></post-list>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyDialog from "@/components/UI/MyDialog.vue";

export default {
  components: {MyDialog, PostList, PostForm },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "JavaScript",
          body: "Description 1 ",
        },
        {
          id: 2,
          title: "Java",
          body: "Description 2",
        },
        {
          id: 3,
          title: "C++",
          body: "Description 3",
        },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.app {
  padding: 20px;
}
</style>
