<template>
<div>
<<<<<<< Updated upstream
  <slot></slot>
=======
<slot></slot>
>>>>>>> Stashed changes
</div>

</template>

<script>
export default {
  name: "TestSlot",
  props:['userName']
}
</script>

<style scoped>
div{
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>