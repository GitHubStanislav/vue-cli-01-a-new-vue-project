<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",
};
</script>

<style scoped>
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

</style>
