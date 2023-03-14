<template>
  <div>
    <h2> Manage Goals </h2>
    <input type="text" ref="goal"/>
    <button @click="setGoal">Set goal</button>
    <error-alert v-if="inputIsValid">
      <h2>Input is invalid</h2>
      <p>Please enter at least a few characters... </p>
      <button @click="conformError">Ok</button>
    </error-alert>
  </div>

</template>

<script>
import ErrorAlert from "@/components/ErrorAlert.vue";

export default {
  name: "ManageGoals",
  components: {ErrorAlert},
  data(){
    return{
inputIsValid: false
    }
  },
  methods:{
    setGoal(){
      const enteredValue = this.$refs.goal.value
      if(enteredValue === ''){
        this.inputIsValid = true
      }
    },
    conformError(){
      this.inputIsValid=false
    }
  }

}
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>