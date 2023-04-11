<template>
  <form @submit.prevent>
    <h4>Creating post</h4>
    <input
      class="input"
      v-model="post.title"
      type="text"
      placeholder="Add some post:)"
    />
    <input
      class="input"
      v-model="post.body"
      type="text"
      placeholder="Description"
    />
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

.input {
  width: 100%;
  border: 1px solid #9e9e9e;
  color: #000000;
  padding: 3px 10px;
  margin-top: 10px;
  font-size: 16px;
  background: #fff;
}
</style>
