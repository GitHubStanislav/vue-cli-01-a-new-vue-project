<template>
 <div class="app">
  <form >
    <h4>Creating post</h4>
    <input class="input" type="text" placeholder="Add some post:)" />
    <input class="input" type="text" placeholder="Description" />
    <button class="btn">Create post</button>
  </form>
  <div class="post" v-for="post in posts" :key="post.id">
    <div>Name {{ post.title }}</div>
    <div>Description {{ post.body }}</div>
  </div>
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
    };
  },
  methods: {},
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.app{
    padding: 20px;
}
form{
    display: flex;
    flex-direction: column;
}
.btn{
    margin-top: 15px;
    align-self: flex-end;
    background: lightsteelblue;
    color: black;
    border: 1px solid teal;
    padding: 2px;
}
.btn:hover{
    background-color: coral;
}

.post {
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
}
.input {
  width: 100%;
  border: 1px solid #9e9e9e;
  color: #000000;
  padding: 3px 10px;
  margin-top: 10px;
  font-size: 14px;
  background: #fff;

}
</style>
