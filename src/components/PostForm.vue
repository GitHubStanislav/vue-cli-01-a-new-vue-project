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
    <button class="btn" @click="createPost">Create post</button>
  </form>
</template>

<script>
export default {
  name: "PostForm",
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

.btn {
  margin-top: 15px;
  align-self: flex-end;
  background: lightsteelblue;
  color: black;
  border: 1px solid teal;
  padding: 2px;
}

.btn:hover {
  background-color: coral;
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
