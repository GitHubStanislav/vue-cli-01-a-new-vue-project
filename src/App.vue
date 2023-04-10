<template>
  <div class="app">


  </div>
</template>

<script>
export default {
  components: {},
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
          id: 2,
          title: "C++",
          body: "Description 3",
        },
      ],
      title: "",
      body: "",
    };
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      };
      if (this.title.trim() !== "" && this.body.trim() !== "") {
        this.posts.push(newPost);
      }
      this.title = "";
      this.body = "";
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
