<template>
  <ul>
    <li :class="{active: activeOption === 'poor'}">
      <button type="button" @click="activate('poor')">Poor</button>
    </li>
    <li :class="{active: activeOption === 'average'}">
      <button type="button" @click="activate('average')">Average</button>
    </li>
    <li :class="{active: activeOption === 'great'}">
      <button type="button" @click="activate('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props:['modelValue'],
  emits:['update:modelValue'],
  name: "RatingControl",
  data() {
    return {
      activeOption: this.modelValue,

    }
  },
  methods: {
    activate(option) {
      this.activeOption = option
      this.$emit('update:modelValue',option)
    }
  }
}
</script>

<style scoped>
.active {
  border-color: darkorchid;
}

.active button {
  color: darkorchid;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid darkgrey;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  display: flex;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>