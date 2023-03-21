<template>
  <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
<template #default>
  <p>Unfortunately, at least one input value is invalid</p>
  <p>Please check all inputs </p>
</template>
    <template #actions>
      <buttons-style @click="confirmError">Okay</buttons-style>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input
            ref="titleInput"
            id="title"
            name="title"
            type="text">
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
            ref="descInput"
            id="description"
            name="description"
            rows="3">
        </textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input
            ref="linkInput"
            id="link"
            name="link"
            type="url">
      </div>
      <div>
        <buttons-style type="submit"> Add Resource</buttons-style>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      inputIsInvalid: false,

    }
  },
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value
      const enteredDescription = this.$refs.descInput.value
      const enteredURL = this.$refs.linkInput.value

      if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredURL.trim() === '') {
        this.inputIsInvalid = true
        return
      }

      this.addResource(enteredTitle, enteredDescription, enteredURL)
    },
    confirmError(){
      this.inputIsInvalid = false
    }
  },
  name: "AddResource",
  components: {}
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>