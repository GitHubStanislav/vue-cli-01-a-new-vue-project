<template>
  <form @submit.prevent>
    <h4>Creating post</h4>
    <my-input v-model="post.title" type="text" placeholder="Add some post:)" />
    <my-input v-model="post.body" type="text" placeholder="Description" />
    <my-button @click="createNewPost"> Create post </my-button>
  </form>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
  name: "PostForm",
  components: { MyButton },
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createNewPost() {
      this.post.id = new Date(); //create ad with Date()

      if (this.post.title.trim() !== "" && this.post.body.trim() !== "") {
        this.$emit("create", this.post);
      }
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
