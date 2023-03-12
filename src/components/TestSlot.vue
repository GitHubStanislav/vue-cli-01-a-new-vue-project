<template>
<div>
{{userName}}
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 50%;
  border: 2px black solid;
  margin: 10px auto;
}
</style>