<template>
  <div>
    <h3 v-for="name in names" :key="name.firstName">
<slot :firstName="name.firstName" :latsName="name.lastName"></slot>
    </h3>
  </div>
</template>

<script>
export default {
  name: "TestPropsList",
  data() {
    return {
      names: [
        {
          firstName: 'Boris',
          lastName: 'Cook'
        },
        {
          firstName: 'Larisa',
          lastName: "Curva"
        },
        {
          firstName: 'Leon',
          lastName: 'Babay'
        }
      ]
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