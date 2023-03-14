<template>
  <div>
    <button @click="selected('active-goals')">active-goals</button>
    <button @click="selected('manage-goals')">manage-goals</button>
  </div>
  <keep-alive>
  <component :is="selectedComp"></component>
  </keep-alive>
</template>

<script>
import ActiveGoals from "@/components/ActiveGoals.vue";
import ManageGoals from "@/components/ManageGoals.vue";

export default {
  components: {ActiveGoals, ManageGoals},
  name: "MyTest",
  data() {
    return {
      ifVisible: true,
      selectedComp: 'active-goals'
    }

  },
  methods: {
    selected(e) {
      this.selectedComp = e
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