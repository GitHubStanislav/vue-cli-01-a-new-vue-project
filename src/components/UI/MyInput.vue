<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
  props: {
    modelValue: [String, Number],
  },
  name: "MyInput",
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
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
