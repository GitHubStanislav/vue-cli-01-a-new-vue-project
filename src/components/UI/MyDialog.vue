<template>
  <div class="dialog">
<div class="dialog__content">
<slot></slot>
</div>
  </div>
</template>

<script>
export default {
  name: "MyDialog",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.dialog{
    top: 20%;
    right: 20%;
    bottom: 20%;
    left: 20%;
    background: bisque;
    position: fixed;
    display: flex;
}
.dialog__content{
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
    padding: 20px;
    text-align: center;
}
</style>
